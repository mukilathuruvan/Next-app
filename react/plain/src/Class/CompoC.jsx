import React, { useContext } from "react";
import { NameContext } from "./Context";
const CompoC = () => {
    console.log("C")
  const name = useContext(NameContext);
  return (
    <div>
      <h3>this is C component    {name}</h3>
    </div>
  );
};

export default CompoC;
