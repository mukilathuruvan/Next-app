import React,{useContext} from "react";
import { CartContext } from "./Class";
const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <ul>
      {cart.map((item) => (
        <li>
          <h2>{item.vehicle}</h2>
          <button>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
