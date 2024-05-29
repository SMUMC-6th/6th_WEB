import { useDispatch } from "react-redux";
import * as S from "./Todo.style";
import { FaTrashCan } from "react-icons/fa6";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

import { remove, completed } from "../../../redux/todo/todoSlice";

const Todo = ({ item }) => {
  const { id, text, complete } = item;
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch(completed(id));
  };

  return (
    <S.Container>
      {complete ? <FaRegCheckCircle onClick={handleCompleted} /> : <FaRegCircle onClick={handleCompleted} />}
      <div>{text}</div>
      <FaTrashCan onClick={() => dispatch(remove(id))} />
    </S.Container>
  );
};

export default Todo;
