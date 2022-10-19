// import React, { useMemo } from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const Parent = () => {
//   const [name, setName] = useState("cbe");
//   const [age, setAge] = useState(0);
//   const [number, setNumber] = useState(0);
//   const original = useMemo(
//     () => ({
//       name,
//       age,
//     }),
//     [name, age]
//   );
// const original = { name, age };

//   useEffect(() => {
//     console.log("object is changing");
//   }, [original]);

//   const changeName = () => {
//     setName(name === "manfree" ? "cbe" : "manfree");
//   };
//   return (
//     <div>
//       {original.name}
//       {number}
//       <button onClick={changeName}>Change Name</button>
//       <button onClick={() => setNumber(number + 1)}>number</button>
//     </div>
//   );
// };

// export default Parent;
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Another from "./Another";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const add = () => {
    setAge(age + 1);
  };
  const remove = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  useEffect(() => {
    console.log("removing is logging");
  }, [remove]);
  return (
    <div>
      <h5>{count}</h5>
      <h2>{age}</h2>
      this is parent compo
      <Child count={count} setCount={add} />
      <Another handler={remove} />
    </div>
  );
};

export default Parent;
