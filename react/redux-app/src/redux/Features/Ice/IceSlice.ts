import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    iceCount: 10,
    price:200,
}
const iceSlice = createSlice({
    name: "ice",
    initialState,
    reducers: {
      ordered:(state) => {
            state.iceCount--;
        },
        offer:(state,action:PayloadAction<number>) => {
            state.price=action.payload
        }
  }  
})
export default iceSlice.reducer
export const {ordered,offer}=iceSlice.actions
