import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, remove, clearCart } from "../../redux/cartSlice";
import * as S from './PlayList.style'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function PlayList() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item.amount === 1) {
      dispatch(remove(id));
    } else {
      dispatch(decrease(id));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.amount), 0);

  return (
    <S.Container>
      <p>당신이 선택한 음반</p>
      <div>
        {Array.isArray(cart) && cart.length > 0 ? (
          cart.map((item) => (
            <S.List key={item.id}>
              <img src={item.img} alt={item.title} />
              <S.Text>
                <p>{item.title} | {item.singer}</p>
                <p>₩ {item.price}</p>
              </S.Text>
              <S.Count>
                <button onClick={() => handleIncrease(item.id)}><FaAngleUp /></button>
                <p>{item.amount}</p>
                <button onClick={() => handleDecrease(item.id)}><FaAngleDown /></button>
              </S.Count>
            </S.List>
          ))
        ): (<p>장바구니가 비어있습니다.</p>)}
      </div>
      <S.Divider />
      <S.Total>
        <p>총 가격</p>
        <p>₩ {totalPrice}</p>
      </S.Total>
      <S.Button onClick={handleClearCart}>장바구니 초기화</S.Button>
    </S.Container>
  )

}