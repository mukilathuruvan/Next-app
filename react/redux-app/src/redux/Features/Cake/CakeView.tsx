import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState, dispatchType } from "../../App/Store";
import { ordered, restocked } from "./CakeSlice";
const CakeView = () => {
  const dispatch = useDispatch<dispatchType>();
  const cakeCount = useSelector((state: rootState) => state.cake.cakeCount);
  return (
    <div>
      <h2>Cake Count:{cakeCount}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(20))}>Restore</button>
    </div>
  );
};

export default CakeView;
