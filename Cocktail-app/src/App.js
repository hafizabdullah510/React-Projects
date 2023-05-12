import { useState } from "react";
import Header from "./component/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
