import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/store";
import Cart from "./pages/Cart";

const Content = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/ecomerce-project" element={<Store />}></Route>
        <Route
          path="https://gbs-404.github.io/ecomerce-project/"
          element={<Store />}
        />
        <Route path="https://gbs-404.github.io/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Content;
