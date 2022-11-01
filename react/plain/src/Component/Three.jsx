import React from "react";

const Three = ({ name, handler }) => {
  console.log("three is rendering");
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={handler}>Name</button>
    </div>
  );
};

export default React.memo(Three);
