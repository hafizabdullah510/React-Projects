import React from "react";
import logo from "../../src/utils/Home Icons/logo.svg";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { useAppContext } from "../context/app_context";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { links } from "../utils/utils";
const Sidebar = () => {
  const { setIsSidebar, isSidebar } = useAppContext();
  const { total_cart } = useCartContext();

  return (
    <div className={`${isSidebar ? "sidebar-c show-sidebar" : "sidebar-c"}`}>
      <div className="sidebar-ic">
        <div className="sidebar-h">
          <img className="sidebar-logo" src={logo} alt="logo" />
          <FaTimes className="fa-times" onClick={() => setIsSidebar(false)} />
        </div>
      </div>
      <div className="sidebar-lc">
        <ul className="sidebar-ll">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <Link to={url} key={id} className="sidebar-Link">
                <li
                  className="sidebar-link"
                  key={id}
                  onClick={() => setIsSidebar(false)}
                >
                  {text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="cart-c">
        <Link
          className="cart-txt-c"
          to="/cart"
          onClick={() => setIsSidebar(false)}
        >
          <h5 className="cart-txt">Cart</h5>
          <div className="cart-icon">
            <FaShoppingCart className="cart-ic" />
            <div className="cart-amount">{total_cart}</div>
          </div>
        </Link>

        <div className="login-txt-c">
          <h5 className="login-txt">Login</h5>
          <div className="login-icon">
            <BsFillPersonPlusFill className="login-ic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
