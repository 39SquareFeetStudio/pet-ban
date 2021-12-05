import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout(state, action) {
      return initialState;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
