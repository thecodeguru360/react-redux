import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux";

const Product = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {item.name}{" "}
      <button onClick={() => dispatch(addToCart(item))}>Add to Cart</button>
    </div>
  );
};

export default Product;
