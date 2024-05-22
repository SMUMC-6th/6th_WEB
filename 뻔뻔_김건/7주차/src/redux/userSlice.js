import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  value: {
    token: "",
    username: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.value = action.payload;
      state.isLogin = true;
      localStorage.setItem("accessToken", state.value.token);
      console.log(state.value.token);
    },
    logoutAction: (state) => {
      Object.assign(state, initialState);
      localStorage.clear();
    },
  },
});

export const { loginData, loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
