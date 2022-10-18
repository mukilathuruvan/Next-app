import React from "react";
import CompoC from "./CompoC";

const CompoB = () => {
    console.log("b")
  return (
    <div>
      <h1>this is B component</h1>
      <CompoC />
    </div>
  );
};

export default CompoB;
