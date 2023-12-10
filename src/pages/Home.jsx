import React from "react";
import { NavLink } from "react-router-dom";
import prod from "../images/hero.png";

const Home = () => {
  return (
    <div className="hero container">
      <div className="hero_content">
        <h1>From Concept to Comfort</h1>
        <NavLink className="hero btn">Get a quote</NavLink>
      </div>
      <div className="view_projects_container">
        <img src={prod} alt="Product" />
        <img src={prod} alt="Product" />
        <img src={prod} alt="Product" />
        <NavLink className="view_projects btn">View Projects</NavLink>
        <div className="line" />
      </div>
    </div>
  );
};

export default Home;
