import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Navigator from "../component/Navigator";
import SingleMain from "../component/SingleMain";
import Footer from "../component/Footer";
import { useAppContext } from "../context/app_context";

const SingleProduct = () => {
  const { single_product } = useAppContext();

  return (
    <>
      <Header />
      <Sidebar />
      <Navigator currentPage={single_product.name} secPage="Products" />
      <SingleMain />
      <Footer />
    </>
  );
};

export default SingleProduct;
