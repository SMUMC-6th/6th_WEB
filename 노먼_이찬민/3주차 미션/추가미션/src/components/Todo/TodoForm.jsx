function TodoForm(props) {
  const { setTodos, formText, setFormText } = props;

  // todoform으로 옮기기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), task: formText },
    ]);
  };

  // todoform으로 옮기기
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      alert("할 일을 입력하세요.");
      return;
    }
    addTodo();
  };

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formText}
        onChange={handleChange}
        placeholder="할 일을 입력하세요!"
      ></input>
      <button type="submit">아이콘</button>
    </form>
  );
}

export default TodoForm;
