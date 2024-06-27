import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// 비동기 API 요청 함수
export const getMusics = createAsyncThunk("cart/getMusicsStatus", async () => {
  try {
    const response = await axiosInstance.get("/musics");
    return response.data;
  } catch (error) {
    throw error;
  }
});

const calculateInitialTotalCount = (items) => {
  return items.reduce((acc, item) => acc + item.amount, 0);
};

const calculateInitialTotalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.amount * item.price, 0);
};

const initialState = {
  items: [],
  getMusicsStatus: "",
  totalCount: calculateInitialTotalCount([]),
  totalPrice: calculateInitialTotalPrice([]),
};

// 로직 : action -> dispatch(useDispatch)로 실행
const cartSlice = createSlice({
  name: "cart", // 이 슬라이스를 구분하는 이름
  initialState, // initialState : initialState 처럼 똑같이 적는 경우 이렇게 쓸 수 있음
  reducers: {
    // 동작(로직)들 이름 정의 ( 매개변수 state는 inital state임 )
    increment: (state, action) => {
      // find(call by ref)로 가져와서 원본 배열에 접근 가능
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
      state.totalCount = 0;
      state.totalPrice = 0;
    },

    getTotalCount: (state) => {
      // reduce : 배열을 순회하며 acc를 증감시켜서 반환하는 메소드
      const total = calculateInitialTotalCount(state.items);
      state.totalCount = total;
    },

    getTotalPrice: (state) => {
      const total = calculateInitialTotalPrice(state.items);
      state.totalPrice = total;
    },
  },

  extraReducers: (builder) => {
    // 프로미스 로딩 (pending) 시점
    builder.addCase(getMusics.pending, (state) => {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    });

    // 프로미스 성공 (fulfilled) 시점
    builder.addCase(getMusics.fulfilled, (state, action) => {
      state.items = action.payload;
      state.totalCount = calculateInitialTotalCount(state.items);
      state.totalPrice = calculateInitialTotalPrice(state.items);
    });

    // 프로미스 실패 (rejected) 시점
    builder.addCase(getMusics.rejected, (state) => {
      console.error("음악을 불러오는 데 실패하였습니다");
    });
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
