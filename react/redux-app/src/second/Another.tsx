import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Store, { rootState, dispatchType } from "../redux/App/Store";
import { ordered, restocked } from "../redux/Features/Cake/CakeSlice";
const Another = () => {
  const task = useSelector((state: rootState) => state.cake.cakeCount);
  const dispatch: dispatchType = useDispatch();
  return (
    <div>
      {task}
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(10))}>Restock</button>
    </div>
  );
};

export default Another;
