import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./CakeSlice";
const Store = configureStore({
  reducer: {
    cake: CakeReducer,
  },
});
export const dispatch = Store.dispatch;
export default Store;
