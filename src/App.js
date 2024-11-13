import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="/" element={<CategoryPage />} />
        <Route path="/productdetails" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;


