import React from "react";
import Header from "../component/Header";
import SinglePro from "../component/SinglePro";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  return (
    <>
      <Header />
      <SinglePro id={useParams().id} />
    </>
  );
};

export default SingleProduct;
