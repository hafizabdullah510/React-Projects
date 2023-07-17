import React from "react";
import Header from "../component/Header";
import Siderbar from "../component/Sidebar";
import Navigator from "../component/Navigator";
import CartMain from "../component/CartMain";
import Footer from "../component/Footer";
import { useCartContext } from "../context/cart_context";
const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      <Header />
      <Siderbar />
      {cartItems > 0 && <Navigator currentPage="Cart" />}
      <CartMain />
      <Footer />
    </>
  );
};

export default Cart;
