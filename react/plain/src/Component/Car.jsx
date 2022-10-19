import React from "react";
import { useContext } from "react";
import { CartContext } from "./Class";
const Car = () => {
  const {addToCart} =useContext(CartContext)
  const value = {
    vehicle: "car",
    brand: "audi",
    model: 2022,
  };
  return (
    <>
          <h2>{value.vehicle}</h2>
          <button onClick={()=>addToCart(value)}>Add to Cart</button>
    </>
  );
};

export default Car;
