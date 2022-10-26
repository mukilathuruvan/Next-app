import React, { useMemo, useState } from "react";
import Childone from "./Childone";
import ChildTwo from "./ChildTwo";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("manfree");
  console.log("parent is rendering");
  const person = useMemo(() => ({ naam: name }), [name]);
  return (
    <div>
      <Childone count={count} />
      <ChildTwo name={person.naam} />
      <button onClick={() => setCount(count + 1)}>click</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Parent;
