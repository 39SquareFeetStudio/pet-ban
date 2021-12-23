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
    collectionHide: (state, action) => {
      state.collectionShow = false;
    },
  },
});

export const { collectionToggle, collectionHide } = mainNavSlice.actions;

export default mainNavSlice;
