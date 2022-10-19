import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);

const Class = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
      setCart([...cart, item]);
      console.log(cart)
  };
  const value = { cart, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default Class;
