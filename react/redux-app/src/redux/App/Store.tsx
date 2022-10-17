import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../Features/Cake/CakeSlice";
import iceReducer from "../Features/Ice/IceSlice";
import parkReducer from "../Features/Park/ParkSlice";
const Store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    park: parkReducer,
  },
});
export default Store;
export type rootState = ReturnType<typeof Store.getState>;
export type dispatchType = typeof Store.dispatch;
