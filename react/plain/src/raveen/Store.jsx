import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./CakeSlice";
import IceReducer from "./iceStream/IceSlice";
const Store = configureStore({
  reducer: {
    cake: CakeReducer,
    ice: IceReducer,
  },
});
export const dispatch = Store.dispatch;
export default Store;
