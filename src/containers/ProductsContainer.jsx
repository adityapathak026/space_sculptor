import React from "react";
import Products from "../components/Products";
import { products } from "../constants";

const ProductsContainer = () => {
  return (
    <div className="product-container">
      {products?.map((prod) => (
        <Products
          key={prod?.id}
          product={prod}
        />
      ))}
    </div>
  );
};

export default ProductsContainer;
