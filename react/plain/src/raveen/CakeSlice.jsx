import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  count: 10,
  price: 20,
};
const CakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state, action) => {
      state.count -= action.payload;
    },
    restocked: (state) => {
      state.count = 10;
    },
    present: (state) => {
      state.price = 100;
    },
  },
});
export default CakeSlice.reducer;
export const { order, restocked, present } = CakeSlice.actions;
