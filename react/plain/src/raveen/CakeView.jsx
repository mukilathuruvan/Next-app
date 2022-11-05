import { useState } from "react";
import { useSelector } from "react-redux";
import { order, restocked, present } from "./CakeSlice";
import { dispatch } from "./Store";
const CakeView = () => {
  const value = useSelector((state) => state.cake);
  return (
    <div>
      <h2>Count :{value.count}</h2>
      <h3>Price :{value.price}</h3>
      <button onClick={() => dispatch(order(2))}>Order</button>
      <button onClick={() => dispatch(restocked(100))}>Restock</button>
      <button onClick={() => dispatch(present())}>FillFull</button>
    </div>
  );
};

export default CakeView;
