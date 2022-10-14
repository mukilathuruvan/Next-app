import React, { useState } from "react";
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import three from "./img/three.jpg";
import four from "./img/four.jpg";
const ProductPage = () => {
  const [active, setActive] = useState<null | string>(null);
  const handleClick = (src: string) => {
    setActive(src);
  };
  return (
    <div>
      <div className="main-img">
        {active ? <img src={active} alt="" /> : <h3>Nothing to Show</h3>}
      </div>
      <div className="sub-img-container">
        <img src={one} alt="" onClick={() => handleClick(one)} />
        <img src={two} alt="" onClick={() => handleClick(two)} />
        <img src={three} alt="" onClick={() => handleClick(three)} />
        <img src={four} alt="" onClick={() => handleClick(four)} />
      </div>
    </div>
  );
};

export default ProductPage;
