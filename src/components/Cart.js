import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux";

const Cart = () => {
  const [totalPrice, setTotal] = useState(0);
  const [productCount, setCount] = useState(0);
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(
      cart
        .reduce((acc, p) => {
          return acc + p.price * p.quantity;
        }, 0)
        .toFixed(2)
    );
    setCount(
      cart.reduce((acc, p) => {
        return acc + p.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <div>
      <h3>Cart({productCount})</h3>
      <ul>
        {cart.map((p) => (
          <li key={p.id}>
            {p.quantity} X {p.name}{" "}
            <button onClick={() => dispatch(removeFromCart(p.id))}>X</button>{" "}
          </li>
        ))}
      </ul>
      <div>
        <b>Total :</b> {totalPrice}
      </div>
    </div>
  );
};

export default Cart;
