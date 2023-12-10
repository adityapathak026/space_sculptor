import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navLinks } from "../constants";
import logo from "../images/ss_logo.png";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);

  const handleMobileView = () => setMobileView(!mobileView);

  return (
    <header className={`header_container ${mobileView ? "active" : "" }`}>
      <div className="logo_container">
        <img src={logo} className="logo" />
      </div>

      {/* Mobile Navbar */}
      <div className="desktop nav_links">
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
      {!mobileView ? (
        <IoMdMenu className="menu" onClick={handleMobileView} />
      ) : (
        <IoMdClose className="menu close" onClick={handleMobileView} />
      )}

      {/* Mobile Navbar */}
     {mobileView && <div className="mobile nav_links">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            {link.name}
          </NavLink>
        ))}
      </div>}
    </header>
  );
};

export default Header;
