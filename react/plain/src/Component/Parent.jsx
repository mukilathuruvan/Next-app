import { Immer, setAutoFreeze } from "immer";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Parent = () => {
  const [name, setName] = useState("cbe");
  const [age, setAge] = useState(0);
  const [number, setNumber] = useState(0);
  const original = useMemo(
    () => ({
      name,
      age,
    }),
    [name, age]
  );
  // const original = { name, age };

  useEffect(() => {
    console.log("object is changing");
  }, [original]);

  const changeName = () => {
    setName(name === "manfree" ? "cbe" : "manfree");
  };
  return (
    <div>
      {original.name}
      {number}
      <button onClick={changeName}>Change Name</button>
      <button onClick={() => setNumber(number + 1)}>number</button>
    </div>
  );
};

export default Parent;
