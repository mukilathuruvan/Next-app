import React, { useState } from "react";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Del</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Header;
