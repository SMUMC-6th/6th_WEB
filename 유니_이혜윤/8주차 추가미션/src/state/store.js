import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter/counterSlice"


// 중앙저장소를 만들어
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})