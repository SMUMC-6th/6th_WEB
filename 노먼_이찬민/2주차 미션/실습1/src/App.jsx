import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "./App.css";

// state는 컴포넌트의 내부 값 변경에 사용.

// 피드백 1 : flex -wrap 사용해서 반응형 조작가능학 ㅔ하기 
// 추가 정보 : 환경변수 세팅을 잘 해놓으면 여러개의 환경 변수를 일제히 조정할 수 있음 
// key 값은 id로 정하는 게 좋음 -> index는 중간 요소가 삭제될 때 그 이후 변수의 index는 변하기 때문에 id로! 
// 추가 정보 : 객체는 모두 주소값을 가지고 있으며, map으로 dom요소를 만드는 이유는 새로운 배열을 반환하기 때문임.
// 예를 들어 forEach로 접근하면 객체가 같은 주소값이니까 react가 변한 걸 모르고, map이 만든 새 배열은 다른 주소값을 가짐.

// useState를 잘 쓰는 법 -> 상태값을 batch, 비동기로 처리함. setcount 3번? -> batch 중 가장 마지막 state만! 반영
// 3번 해서 각각 하고 싶다면, prev 선언! -> count + 1을 함수로 ((count) => count+1)을 주면 적용 가능 (이름보다 함수 자체를 넣는다는 게 중요함!)

// useEffect 는 특정 조건(dependancy = useEffect 동작을 실행하는 트리거(이게 변할 때마다 실행))에서 렌더링 후 실행되는 동작을 정의함 []로 하면 마운트 때 1번 
// 마운트 때 작업(시간 타이머 동작이 있다면) 언마운트 때 return () => clearTimeout()을 통해서 타이머 초기화 필요! 

function App() {
  // state를 이용한 각 list 변수 관리
  const [todoList, setTodoList] = useState([]);
  const [completeList, setCompleteList] = useState([]);
  const inputRef = useRef(null); // ref 생성

// 입력 끝나면 콜백함수
function addTodoItem(event) {
  event.preventDefault();
  const text = event.target.elements[0].value; // form의 이벤트 객체라서
  const newTodoList = [...todoList]; // 객체 state를 set할때 1단계 : 받아오기
  newTodoList.push({
    // 객체 state를 set할때 2단계 : id, text 등의 변수가 담긴 객체를 받아온 배열에 push하기
    id: todoList.length,
    text: text,
    buttonArea: "완료",
    areaFunc: addCompleteItem,
  });
  setTodoList(newTodoList); // 객체 state를 set할때 3단계 : 새로운 객체 newTodoList를 set하기
  console.log(newTodoList);
  event.target.elements[0].value = "";
  // event.target.elements[0].focus();
}

  useEffect(() => {
    inputRef.current.focus();// ref로 포커스 이동하기
  }, [addTodoItem]);

  // 완료 버튼 누를때 콜백함수
  function addCompleteItem(text) {
    const newCompleteList = [...completeList];
    const newTodoList = [...todoList];
    newCompleteList.push({
      id: completeList.length,
      text: text,
      buttonArea: "삭제",
      areaFunc: removeCompleteItem,
    });
    setCompleteList(newCompleteList);
    setTodoList(newTodoList.filter((item) => item.text !== text)); // 입력 text와 같은 text를 가진 todoitem 삭제
    console.log(newCompleteList);
  }

  function removeCompleteItem(text) {
    let newCompleteList = [...completeList];
    newCompleteList = newCompleteList.filter((item) => item.text !== text);
    setCompleteList(newCompleteList);
  }

  // todolist 컴포넌트
  function TodoForm(props) {
    return (
      <form onSubmit={addTodoItem}>
        <input ref={inputRef} type="text" placeholder={props.placeholder} />
      </form>
    );
  }

  // 리스트 항목 컴포넌트
  function ListItem(props) {
    const { id, text, buttonArea, areaFunc } = props;

    return (
      <li className="listItem">
        <span>{text}</span>
        <button onClick={() => areaFunc(text)}>{buttonArea}</button>
      </li>
    );
  }

  return (
    <>
      <header>
        <h1>UMC Study Plan</h1>
      </header>
      <main>
        <TodoForm placeholder={"UMC 스터디 계획을 세워보세요!"}></TodoForm>
        <div className="label">
          <p>해야 할 일</p>
          <p>해낸 일</p>
        </div>
        <div className="listContainer">
          <ul className="todoList">
            {todoList.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                text={item.text}
                buttonArea={"완료"}
                areaFunc={addCompleteItem}
              />
            ))}
          </ul>
          <ul className="completeList">
            {completeList.map((item) => (
              <ListItem
                key={item.id}
                id={item.id}
                text={item.text}
                buttonArea={"삭제"}
                areaFunc={removeCompleteItem}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
