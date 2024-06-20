import { useDispatch, useSelector } from "react-redux";
import { remove, complete } from "../redux/todoSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import * as S from './TodoList.style'

export default function TodoList() {
  const todolist = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const todolistView = todolist.map((todo, idx) => (
    <S.Container key={todolist[idx].id}>
      <input type="checkbox" onChange={() => dispatch(complete(todolist[idx].id))} />
      <div>
        {todo.complete === false ? <>{todo.text}</> : <del>{todo.text}</del>}
      </div>
      <button type="button" onClick={() => dispatch(remove(todolist[idx].id))}><FaRegTrashCan size="22px" color="gray"/></button>
    </S.Container>
  ))

  return (
    <>
      <ul>{todolistView}</ul>
    </>
  )
}