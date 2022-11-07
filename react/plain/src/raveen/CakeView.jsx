import { useState } from "react";
import { useSelector } from "react-redux";
import { order, restocked, present } from "./CakeSlice";
import { dispatch } from "./Store";
import { ordered } from "./iceStream/IceSlice";
const CakeView = () => {
  const cake = useSelector((state) => state.cake);
  const ice = useSelector((state) => state.ice);
  console.log("rendering");
  return (
    <>
      {" "}
      <div>
        <h2>Count :{cake.count}</h2>
        <h3>Price :{cake.price}</h3>
        <button onClick={() => dispatch(order(2))}>Order</button>
        <button onClick={() => dispatch(restocked(100))}>Restock</button>
        <button onClick={() => dispatch(present())}>FillFull</button>
      </div>
      <div>
        <h2>Ice :{ice.count}</h2>
        <button onClick={() => dispatch(ordered(1))}>Order Ice</button>
      </div>
    </>
  );
};

export default CakeView;
