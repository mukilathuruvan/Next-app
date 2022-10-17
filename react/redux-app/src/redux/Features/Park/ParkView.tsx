import { useDispatch, useSelector } from "react-redux";
import { rootState, dispatchType } from "../../App/Store";
import { getBike, getCar, putBike } from "./ParkSlice";
const ParkView = () => {
  const { bike, car } = useSelector((s: rootState) => s.park);
  const dispatch = useDispatch<dispatchType>();
  return (
    <div>
      <h2>Bike Count:{bike}</h2>
      <h3>Car Count:{car}</h3>
      <button onClick={() => dispatch(getBike(5))}>get bike</button>
          <button onClick={() => dispatch(putBike(5))}>Put Bike</button>
          <button onClick={()=>dispatch(getCar(4))}>Get Car</button>
    </div>
  );
};

export default ParkView;
