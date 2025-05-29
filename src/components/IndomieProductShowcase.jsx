import React from "react";
import "../assets/components/ProductShowcase.css";

const products = [
  {
    id: 1,
    title: "INDOMIE GORENG ORIGINAL",
    description: "Nikmati rasa klasik yang melegenda",
    price: "From: $1.50",
    image: "/public/img/Indomie Goreng Mie Instan.png",
  },
  {
    id: 2,
    title: "INDOMIE SOTO",
    description: "Lezatnya kuah soto yang kaya rempah",
    price: "From: $1.50",
    image: "/public/img/indomie rasa kaldu udang big.png",
  },
  {
    id: 3,
    title: "INDOMIE AYAM BAWANG",
    description: "Gurih dan nikmat, cocok untuk semua suasana",
    price: "From: $1.50",
    image: "/public/img/Indomie Rasa Ayam Bawang.png",
  },
];

const ProductShowcase = () => (
  <div className="product-showcase-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <div className="product-title">{product.title}</div>
          <div className="product-desc">{product.description}</div>
          <div className="product-price">{product.price}</div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductShowcase;
