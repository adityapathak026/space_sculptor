import React from "react";
import { products } from "../constants";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div className="products container">
      <div className="products">
        {products.map((product) => (
          <NavLink
            to="/products/modular_kitchen"
            key={product.id}
            className="prod_content"
          >
            <img src={product.img} alt="Products" />
            <span className="prod_category">{product.category}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Products;
