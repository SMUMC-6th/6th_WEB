import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../constants/cartItem";

// const [count, setCount] = useState(0) 랑 똑같음
// 객체로 여러 개의 장바구니 항목들을 id별로 따로 관리
const items = cartItems.map((item) => {
  return {
    id: item.id,
    title: item.title,
    singer: item.singer,
    price: item.price,
    img: item.img,
    amount: 1,
  };
});

const calculateInitialTotalCount = (items) => {
  return items.reduce((acc, item) => acc + item.amount, 0);
};

const calculateInitialTotalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.amount * item.price, 0);
};

const initialState = {
  items: items,
  totalCount: calculateInitialTotalCount(items),
  totalPrice: calculateInitialTotalPrice(items),
};

// 로직 : action -> dispatch(useDispatch)로 실행
const cartSlice = createSlice({
  name: "cart", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    increment: (state, action) => {
      // find로 가져와서 call by ref로 원본 배열에 접근 가능
      const increaseItem = state.items.find(
        (item) => item.id == action.payload
      );
      increaseItem.amount += 1;
    },

    decrement: (state, action) => {
      const decreaseItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (decreaseItem.amount > 1) {
        decreaseItem.amount -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    initialize: (state) => {
      state.items = [];
    },

    getTotalCount: (state) => {
      // reduce : 배열을 순회하며 acc를 증감시켜서 반환하는 메소드
      const total = state.items.reduce((acc, item) => {
        return acc + item.amount;
      }, 0);
      state.totalCount = total;
    },

    getTotalPrice: (state) => {
      const total = state.items.reduce((acc, item) => {
        return acc + item.amount * item.price;
      }, 0);
      state.totalPrice = total;
    },
  },
});

export const {
  increment,
  decrement,
  initialize,
  getTotalCount,
  getTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
