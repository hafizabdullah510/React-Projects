import React from "react";
import FeaturedProducts from "../component/FeaturedProducts";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Hero from "../component/Hero";
import Mission from "../component/Mission";
import NewsLetter from "../component/NewsLetter";
import Sidebar from "../component/Sidebar";
const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <FeaturedProducts />
      <Mission />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
