import React from "react";
import { useContext } from "react";
import { CartContext } from "./Class";

const Bike = () => {
  const { addToCart } = useContext(CartContext);
  const value = {
    vehicle: "Bike",
    model: 2022,
    brand: "Honda",
  };
  return (
    <div>
      <h2>{value.vehicle}</h2>
      <button onClick={() => addToCart(value)}>Add to Cart</button>
    </div>
  );
};

export default Bike;
