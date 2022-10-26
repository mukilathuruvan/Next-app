import React from "react";

const Childone = ({ count }: { count: number }) => {
  console.log("one is rendering");
  return (
    <div>
      <h2>showing count one :{count}</h2>
    </div>
  );
};

export default Childone;
