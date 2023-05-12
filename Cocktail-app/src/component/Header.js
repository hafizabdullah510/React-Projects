import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/images/logo.svg";
const Header = () => {
  return (
    <div className="outer-cont">
      <div className="header-cont">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="header-links-cont">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/about" className="header-link">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
