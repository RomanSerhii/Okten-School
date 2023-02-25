import React, { useState } from "react";
import Header from "./Header/Header";
import ProductCard from "./ProductCard/ProductCard";
import "./App.css";
import "./HW1-wrap.css";

const products = [
  {
    title: "Product 1",
    price: "$100",
    description: "Description 1",
    images: [
      {
        src: "https://images.prom.ua/1640408475_w640_h640_muzhskie-krossovki-nike.jpg",
        alt: "image alt text",
      },
    ],
  },
  {
    title: "Product 2",
    price: "$159",
    description: "Description 2",
    images: [
      {
        src: "https://images.prom.ua/3795465719_w640_h640_krossovki-nike-air.jpg",
        alt: "image alt text",
      },
    ],
  },
  {
    title: "Product 3",
    price: "$299",
    description: "Description 3",
    images: [
      {
        src: "https://images.prom.ua/1278835939_krosivki-nike-air.jpg",
        alt: "image alt text",
      },
    ],
  },
  // add more products here
];

function App() {
  const [visibleProductsIndex, setVisibleProductsIndex] = useState(0);

  const removeFirstProduct = () => {
    setVisibleProductsIndex(visibleProductsIndex + 1);
  };
  const showFirstProduct = () => {
    setVisibleProductsIndex(visibleProductsIndex - 1);
  };

  const visibleProducts = products.slice(visibleProductsIndex);

  return (
    <div className="App">
      <h1>My React App</h1>
      <Header />
      <h2>HomeWork 1</h2>
      <div className="hw1_wrap">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button className="btn" onClick={removeFirstProduct}>
        Remove product card
      </button>
      <button className="btn" onClick={showFirstProduct}>
        Show product card
      </button>
      <hr />
    </div>
  );
}

export default App;
