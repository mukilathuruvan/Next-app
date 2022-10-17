import {createSlice,PayloadAction} from '@reduxjs/toolkit'
type initialType = {
    cakeCount:number
}
const initialState:initialType = {
    cakeCount:10,
}
export const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => {
            state.cakeCount--;
        },
        restocked: (state, action:PayloadAction<number>) => {
            state.cakeCount+= action.payload
        }
    }
})
export default cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions