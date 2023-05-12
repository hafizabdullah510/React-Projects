import React from "react";
import Header from "../component/Header";
import Navigator from "../component/Navigator";
import Sidebar from "../component/Sidebar";
import StoreProducts from "../component/StoreProducts";
import Footer from "../component/Footer";

const Products = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Navigator currentPage="Products" />
      <StoreProducts />
      <Footer />
    </>
  );
};

export default Products;
