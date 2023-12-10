import React from "react";
import { navLinks, year } from "../constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
     <div className="footer_nav_links">
     {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) => (isActive ? "active link" : "link")}
        >
          {link.name}
        </NavLink>
      ))}
     </div>
      <span>Copyright spacesculptor.in {year}</span>
    </div>
  );
};

export default Footer;
