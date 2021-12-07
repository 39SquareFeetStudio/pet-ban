import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  data: {
    idToken: "",
    isLoggedIn: false,
    messages: "",
  },
};

export const authUserLogin = createAsyncThunk(
  "auth/authUserLogin",
  async ({ account, password }, thunkAPI) => {
    const { data } = await axios.post(`http://127.0.0.1:8000/api/auth/login`, {
      account: account,
      password: password,
    });
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state = action.payload;
    },
    logout(state) {
      state = initialState;
    },
  },
  extraReducers: {
    [authUserLogin.pending.type]: (state) => {
      state.loading = true;
    },
    [authUserLogin.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [authUserLogin.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
