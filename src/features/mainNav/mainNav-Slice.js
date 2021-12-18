import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collectionShow: false,
};

export const mainNavSlice = createSlice({
  name: "mainNav",
  initialState,
  reducers: {
    collectionToggle: (state, action) => {
      state.collectionShow = !state.collectionShow;
    },
  },
});

export const { collectionToggle } = mainNavSlice.actions;

export default mainNavSlice;
