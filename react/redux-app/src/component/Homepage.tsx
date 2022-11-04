import React from "react";
import CakeView from "../redux/Features/Cake/CakeView";
import IceView from "../redux/Features/Ice/IceView";
import ParkView from "../redux/Features/Park/ParkView";
import Another from "../second/Another";
const Homepage = () => {
  return (
    <div>
      {/* <CakeView />
      <IceView />
      <ParkView /> */}
      <Another />
    </div>
  );
};

export default Homepage;
