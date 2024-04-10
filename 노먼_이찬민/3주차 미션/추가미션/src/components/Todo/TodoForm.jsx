function TodoForm(props) {
  const [onSubmit, onChange, text] = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="할 일을 입력하세요!"
      ></input>
      <button role="button">아이콘</button>
    </form>
  );
}

export default TodoForm;
