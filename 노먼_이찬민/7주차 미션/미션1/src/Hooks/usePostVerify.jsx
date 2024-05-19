import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// 6주차 피드백 2 : getMoives language까지 매개변수로 받아서 쿼리파라미터 조정 -> 영어 제목 가져올 수 있음
function usePostVerify({
  type,
  name,
  email,
  age,
  username,
  password,
  passwordCheck,
  isPosting,
}) {
  const [isLoading, setIsLoading] = useState(false);
  let formData;
  const [token, setToken] = useState("");
  const [myUsername, setMyUsername] = useState("");
  // const POST_URL = "http://localhost:8080/auth/signup";
  const POST_URL = `http://localhost:8080/auth/${type}`;

  useEffect(() => {
    // 첫 hook 호출 바로 리턴시키기
    if (!username) {
      return;
    }

    // post할 회원정보 props로 받아온 대로 FormData로 종합하기 - 나중에 type별로 분기해서 처리할 거임
    // useSearchParams를 사용하면 하나의 객체로 그냥 보내도 된다는데...?
    if (type == "signup") {
      formData = {
        name: name,
        email: email,
        age: age,
        username: username,
        password: password,
        passwordCheck: passwordCheck,
      };
    } else {
      formData = {
        username: username,
        password: password,
      };
    }

    console.log(formData);
    const options = {
      method: "POST",
      headers: {
        // header로 이거 formdata 타입 정의해주니까 invalid 안뜸
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    async function postAPI() {
      setIsLoading(true); // 로딩 시작
      try {
        const userData = await fetch(POST_URL, options);
        const data = await userData.json();
        // console.log(data);
        if (data.token) {
          alert(`
          정상적으로 ${
            type === "signup" ? "회원가입" : "로그인"
          }이 완료되었습니다!
          `);
        } else {
          alert("입력값을 확인해주세요.");
        }
        setToken(data.token);
        setMyUsername(data.username);
        setIsLoading(false); // 로딩 종료
      } catch (error) {
        if (error.response.status === 409) {
          alert("이미 존재하는 아이디입니다.");
        }
        setIsLoading(false); // 로딩 종료
      }
    }

    postAPI();
  }, [type, name, email, age, username, password, passwordCheck, isPosting]);

  return { token, myUsername, isLoading };
}

export { usePostVerify };
