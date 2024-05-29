import { createSlice } from "@reduxjs/toolkit";

// const [count, setCount] = useState(0) 랑 똑같음
const initialState = {
  count: 0,
};

// 로직 : action -> dispatch(useDispatch)로 실행
const counterSlice = createSlice({
  name: "counter", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // increaseUserInputNum: (state, action) => {
    //   console.log(action);
    //   state.count += action.payload; // payload는 내용(매개변수)임
    // },
    increaseUserInputNum: (state, { payload }) => {
      state.count += payload; // payload는 내용(매개변수)임
    },

    decrementUserInputNum: (state, action) => {
      console.log(action);
      state.count -= action.payload.num;
    },

    initialize: (state) => {
      state.count = 0;
    },
    /* {type: 'counter/increaseUserInputNum', payload: 10}
payload: 10
type: "counter/increaseUserInputNum"*/
  },
});

export const {
  increment,
  decrement,
  increaseUserInputNum,
  decrementUserInputNum,
  initialize,
} = counterSlice.actions;
export default counterSlice.reducer; // 리듀서를 통째로 반환해야 emutable한 기능 사용가능
