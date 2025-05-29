import React, { useState, useEffect } from "react";
import "../assets/components/CartItems.css";

const cartItems = [
  {
    id: 1,
    name: "Indomie Goreng K-Rose",
    quantity: 2,
    price: 25000,
    image: "/public/img/colectionpremium/Indomie Goreng K-Rose.png",
  },
  {
    id: 2,
    name: "Indomie Goreng Fiery Chikin",
    quantity: 1,
    price: 30000,
    image: "/public/img/colectionpremium/Indomie Goreng Fiery Chikin.png",
  },
  {
    id: 3,
    name: "Indomie Spicy Ramyeon",
    quantity: 3,
    price: 27500,
    image: "/public/img/colectionpremium/Indomie Spicy Ramyeon.png",
  },
];

const shippingCost = 10000;
const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost;

const CartItems = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk mengganti slide otomatis setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cartItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ul className="cart-list">
      <li key={cartItems[currentIndex].id}>
        <a href="#." className="photo">
          <img src={cartItems[currentIndex].image} className="cart-thumb" alt={cartItems[currentIndex].name} />
        </a>
        <h6>
          <a href="#.">{cartItems[currentIndex].name}</a>
        </h6>
        <p>
          Qty: {cartItems[currentIndex].quantity} <span className="price">Rp {cartItems[currentIndex].price.toLocaleString()}</span>
        </p>
      </li>

      <li className="total clearfix">
        <div className="pull-right">
          <strong>Shipping</strong>: Rp {shippingCost.toLocaleString()}
        </div>
        <div className="pull-left">
          <strong>Total</strong>: Rp {totalPrice.toLocaleString()}
        </div>
      </li>

      <li className="cart-btn">
        <a href="#." className="active">
          VIEW CART
        </a>
        <a href="#.">CHECKOUT</a>
      </li>
    </ul>
  );
};

export default CartItems;
