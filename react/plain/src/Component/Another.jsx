import React from "react";

const Another = ({handler}) => {
  console.log("decreament is rendering");
  return (
    <div>
      <button onClick={handler}>Dec</button>
    </div>
  );
};

export default Another;
