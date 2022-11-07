import { createSlice } from "@reduxjs/toolkit";
import React from "react";
let initialState = {
  count: 11,
  price: 200,
};
const IceSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.count += action.payload;
    },
    restocked: (state, action) => {
      state.price += action.payload;
    },
  },
});

export default IceSlice.reducer;
export let  { ordered, restocked } = IceSlice.actions;
