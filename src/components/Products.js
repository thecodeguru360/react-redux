import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const cart = useSelector((state) => state.cartItems);

  const data = [
    {
      name: "Product 1",
      id: 1,
      price: 3.44,
    },
    {
      name: "Product 2",
      id: 2,
      price: 50.44,
    },
    {
      name: "Product 3",
      id: 3,
      price: 10.99,
    },
  ];

  const [products, setProducts] = useState(data);

  useEffect(() => {
    setProducts(
      products.map((product, i) => {
        return {
          ...product,
          inCart:
            cart.findIndex((p) => p.id === product.id) > -1 ? true : false,
        };
      })
    );
    console.log(products);

    // console.log(cart);
    // setProducts(data);
  }, [cart]);

  return (
    <div>
      {products.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </div>
  );
};

export default Products;
