import React from "react";

const Child = ({ setCount, count }) => {
  console.log("increament is rendering");
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={setCount}>Add</button>
    </div>
  );
};

export default Child;
