import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dispatchType, rootState } from "../../App/Store";
import { ordered, offer } from "./IceSlice";
const IceView = () => {
  const { iceCount, price } = useSelector((state: rootState) => state.ice);
  const dispatch = useDispatch<dispatchType>();
  return (
    <div>
      <h2>count:{iceCount}</h2>
      <h2>price:{price}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice</button>
      <button onClick={() => dispatch(offer(20))}>Put Offer</button>
    </div>
  );
};

export default IceView;
