import React from "react";

const ChildTwo = ({ name }: { name: string }) => {
  console.log("two is rendering");
  return (
    <div>
      <h2>showing name from two:{name}</h2>
    </div>
  );
};

export default React.memo(ChildTwo);
