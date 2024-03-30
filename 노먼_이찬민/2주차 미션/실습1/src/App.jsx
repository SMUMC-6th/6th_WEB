import React from "react";
import { useState } from "react";
import "./App.css";

// state는 컴포넌트의 내부 값 변경에 사용.

function App() {
  // state를 이용한 각 list 변수 관리
  const [todoList, setTodoList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

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
  }

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
        <input type="text" placeholder={props.placeholder} />
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
