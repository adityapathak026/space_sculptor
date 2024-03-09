import React from "react";
import { NavLink } from "react-router-dom";

const Products = ({product}) => {
  return (

    
    <div className="product-card">
       <NavLink to={`/productDetails/${product?.name}`} > 
       <img className="product-image" src={product.image} alt={product.name} />
   </NavLink>
     
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <div className="product-info">
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
