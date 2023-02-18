import React from "react";
import "./ProductCard.css";

export const ProductCard = (props) => {
  return (
    <div className="productCard">
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <h3>{props.description}</h3>
    </div>
  );
};

export default ProductCard;
