import React from "react";
import { NavLink } from "react-router-dom";
import about from '../images/about.png'

const About = () => {
  return (
    <div className="about container">
      <div className="about_content_container">
        <img src={about} alt="About" />
        
        <div className="about_content">
          <h1>We combine curiosity with service driven attitude</h1>
          <span>
            Passionate design, client-focused, and sustainability-driven,
            crafting one-of-a-kind, impeccably detailed interiors with
            creativity and quality craftsmanship.
          </span>
          <NavLink className="discover_btn">Discover Now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
