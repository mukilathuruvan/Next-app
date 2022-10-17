import React from "react";
import CakeView from "../redux/Features/Cake/CakeView";
import IceView from "../redux/Features/Ice/IceView";
import ParkView from "../redux/Features/Park/ParkView";
const Homepage = () => {
  return (
    <div>
      <CakeView />
      <IceView />
      <ParkView />
    </div>
  );
};

export default Homepage;
