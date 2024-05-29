import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
