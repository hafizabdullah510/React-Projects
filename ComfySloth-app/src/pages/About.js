import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Navigator from "../component/Navigator";
import AboutMain from "../component/AboutMain";
import Footer from "../component/Footer";
const About = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Navigator currentPage="About" />
      <AboutMain />
      <Footer />
    </>
  );
};

export default About;
