import React from "react";
import { categories } from "../constants";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <div className="products container">
      <div className="products">
        {categories.map((category) => (
          <NavLink
            to={`/categories/${category.cat}`}
            key={category.id}
            className="prod_content"
          >
            <img src={category.img} alt="Products" />
            <span className="prod_category">{category.cat}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
