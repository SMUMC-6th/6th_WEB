import "./Todos.css";

const Todos = ({ completed, items, handleCompleted }) => {
  return (
    <div className="todo-wrapper">
      <div className="todo-title">{completed ? "해낸 일" : "해야할 일"}</div>
      <div className="todo-box">
        {items.map((item) => {
          return (
            <div className="todo" key={item.id}>
              <div>{item.content}</div>
              <button onClick={() => handleCompleted(item)}>
                {completed ? "삭제" : "완료"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
