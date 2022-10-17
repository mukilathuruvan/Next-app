import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialType = {
    car: number;
    bike:number
}
const initialState:initialType = {
    car: 10,
    bike:30
}
type actype=PayloadAction<number>
const ParkSlice = createSlice({
    name: "park", initialState, reducers: {
        getCar:(state:initialType,action:actype) => {
            state.car-=action.payload
        },
        getBike:(state:initialType,action:actype) => {
            state.bike-=action.payload
        },
        putBike:(state,action:actype) => {
            state.bike+=action.payload
        }
    }
})
export default ParkSlice.reducer;
export const {getCar,getBike,putBike}=ParkSlice.actions