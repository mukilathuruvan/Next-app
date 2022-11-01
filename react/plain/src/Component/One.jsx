import React, { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Three from "./Three";
import Two from "./Two";

const One = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("manfree");
  console.log("parent is rendring");
  const increament = () => {
    setCount(count + 1);
  };

  const change = useCallback(() => {
    setName("coimbatore");
  }, [name]);
    
  const add = (num) => {
    let c = 0;
    for (let i = 0; i <= 900000000; i++) {
      c = i;
    }
    return num * 2;
  };
    const number = useMemo(() => add(count), [count]);
//   const number = add(count);
  return (
    <div>
      <h1>{number}</h1>
      <Two count={count} setCount={increament} />
      <Three name={name} handler={change} />
    </div>
  );
};

export default One;
