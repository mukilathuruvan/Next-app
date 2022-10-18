import React from "react";
import CompoB from "./CompoB";

const CompoA = () => {
    console.log("A")
  return (
    <div>
      <h2>this is A component</h2>
      <CompoB />
    </div>
  );
};

export default CompoA;
