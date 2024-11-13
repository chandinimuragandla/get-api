import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

function ProductDetails() {
  const location = useLocation();
  const { id } = location.state || {};
  const [product, setProduct] = useState(null);

  
  const fetchProductDetails = async () => {
    if (!id) return;
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div className="container">
      <Link to="/" className="btn btn-secondary mb-4">
        Back to Categories
      </Link>
      {product ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p className="text-muted">{product.category}</p>
            <h4 className="text-danger">${product.price}</h4>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        <p className="text-danger">Product not found. Please go back and select another product.</p>
      )}
    </div>
  );
}

export default ProductDetails;
