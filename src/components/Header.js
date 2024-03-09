import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { PiShoppingCartFill } from "../utils/icons";
import { navLinks } from "../constants";
import logo from "../images/ss_logo.png";
import Cart from "./Cart";
import useModal from "../hooks/useModal";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const { openModal, handleOpen, handleClose } = useModal();

  const handleMobileView = () => setMobileView(!mobileView);

  const getCartDetails = () => {};

  return (
    <>
      <header className={`header_container ${mobileView ? "active" : ""}`}>
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
          <span
            className="cart_count"
            onClick={() => {
              handleOpen();
              getCartDetails();
            }}
          >
            <PiShoppingCartFill />
            <strong>{0}</strong>
          </span>
        </div>
        {!mobileView ? (
          <IoMdMenu className="menu" onClick={handleMobileView} />
        ) : (
          <IoMdClose className="menu close" onClick={handleMobileView} />
        )}

        {/* Mobile Navbar */}
        {mobileView && (
          <div className="mobile nav_links">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "active link" : "link"
                }
                onClick={() => setMobileView(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <span
              className="cart_count"
              onClick={() => {
                handleOpen();
                getCartDetails();
              }}
            >
              <PiShoppingCartFill />
            </span>
          </div>
        )}
      </header>
      <Cart
        openModal={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </>
  );
};

export default Header;
