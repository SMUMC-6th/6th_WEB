import { useEffect, useState } from "react";
import * as B from "./Banner.style";
import { authAxios } from "../../api/axios";

const Banner = () => {
  const [name, setName] = useState("");
  const [loding, setLoding] = useState(false);

  const fetchUser = async (token) => {
    setLoding(true);

    try {
      const res = await authAxios("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setName(res.data.name);
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser(token);
  }, []);

  return (
    <B.Container>
      {loding ? <p>로딩 중...</p> : name ? <p>{name}님 환영합니다</p> : <p>🎊 환영합니다 🎊</p>}
    </B.Container>
  );
};

export default Banner;
