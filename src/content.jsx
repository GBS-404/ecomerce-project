import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Cart from "./pages/Cart";
import { Product } from "./pages/Product";

const Content = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/ecomerce-project/" element={<Store />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </Router>
  );
};

export default Content;
