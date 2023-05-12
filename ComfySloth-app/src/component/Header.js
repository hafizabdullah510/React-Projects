import React from "react";
import logo from "../../src/utils/Home Icons/logo.svg";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { links } from "../utils/utils";
import { useAppContext } from "../context/app_context";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
const Header = () => {
  const { total_cart } = useCartContext();
  const { setIsSidebar } = useAppContext();
  console.log(total_cart);
  return (
    <nav className="header-cont">
      <div className="inner-cont">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </Link>
        <FaBars className="fa-bars" onClick={() => setIsSidebar(true)} />
        <div className="nav-lc">
          <ul className="nav-l">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <Link key={id} to={url} className="ul-l">
                  <div className="link">
                    {text}
                    <div className="link-u"></div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="nav-cart-c">
          <Link className="cart-txt-c" to="/cart">
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
    </nav>
  );
};

export default Header;
