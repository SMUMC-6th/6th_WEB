import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    value: {
      token: "",
      uername: "",
    },
  },
  reducers: {
    loginAction: (state, action) => {
      state.value = action.payload;
      state.isLogin = true;
      localStorage.setItem("accessToken", state.value.token);
      console.log(state.value.token);
    },
    logoutAction: (state) => {
      localStorage.removeItem("accessToken", state.value.token);
      state.isLogin = false;
      state.value = {};
    },
  },
});

export const { loginData, loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;