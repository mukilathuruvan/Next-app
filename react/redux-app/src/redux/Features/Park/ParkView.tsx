import { useDispatch, useSelector } from "react-redux";
import { rootState, dispatchType } from "../../App/Store";
import { getBike, getCar, putBike } from "./ParkSlice";
import { useState } from "react";
const ParkView = () => {
  const { bike, car } = useSelector((s: rootState) => s.park);
  const dispatch = useDispatch<dispatchType>();
  const [count, setCount] = useState<string | null>(null);
  return (
    <div>
      <h2>Bike Count:{bike}</h2>
      <h3>Car Count:{car}</h3>
      <h3>{count || <h4>showing hide</h4>}</h3>
      <button onClick={() => setCount("Dhatcha".toUpperCase())}>Value</button>
      <button onClick={() => setCount(null)}>Null</button>
      <button onClick={() => dispatch(getBike(5))}>get bike</button>
      <button onClick={() => dispatch(putBike(5))}>Put Bike</button>
      <button onClick={() => dispatch(getCar(4))}>Get Car</button>
    </div>
  );
};

export default ParkView;
