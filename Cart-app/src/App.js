import React, { useState } from "react";
import CartBag from "./component/CartBag";
import Navbar from "./component/Navbar";
import { useGlobalContext } from "./context";
import Loading from "./component/Loading";
function App() {
  const { loading } = useGlobalContext();
  return (
    <>
      {loading && <Loading />}
      {!loading && <Navbar />}
      {!loading && <CartBag />}
    </>
  );
}

export default App;
