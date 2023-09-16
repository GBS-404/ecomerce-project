import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./pages/store";

const Content = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Store />}></Route>
      </Routes>
    </Router>
  );
};

export default Content;
