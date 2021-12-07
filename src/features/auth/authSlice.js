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

export const authUserLoginOrSignUp = createAsyncThunk(
  "auth/authUserLoginOrSignUp",
  async ({ isLogin, account, password }, thunkAPI) => {
    let url = "";
    if (isLogin) {
      url = "http://127.0.0.1:8000/api/auth/login";
    } else {
      url = "http://127.0.0.1:8000/api/auth/register";
    }
    const { data } = await axios.post(url, {
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
    logOut: (state) => {
      state.data = {
        idToken: "",
        isLoggedIn: false,
        messages: "",
      };
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [authUserLoginOrSignUp.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authUserLoginOrSignUp.fulfilled.type]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [authUserLoginOrSignUp.rejected.type]: (state) => {
      state.loading = false;
      state.error = "訪問錯誤";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
