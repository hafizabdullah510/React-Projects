import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { totalItems } = useGlobalContext();
  return (
    <div className="outer-cont">
      <div className="inner-cont">
        <h2>UseReducer</h2>
        <div className="cart-img-cont">
          <FaCartPlus className="cart-img" />
          <div className="cart-amount">{totalItems}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
