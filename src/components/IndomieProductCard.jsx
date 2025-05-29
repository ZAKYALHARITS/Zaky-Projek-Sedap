import React, { useState, useEffect } from "react";
import "../assets/components/IndomieProductCard.css";

const products = [
  {
    id: "IND-2025-RNDG",
    name: "Indomie Rendang Limited",
    image: "/public/img/colectionpremium/Indomie Goreng K-Rose.png",
    originalPrice: "Rp 5.000",
    discountedPrice: "Rp 3.500",
    rating: "★★★★★",
    reviews: 24,
    flavor: "Original Rendang",
    netWeight: "85g",
    ingredients: "Wheat flour, palm oil, seasoning, etc.",
    category: "Premium Collection",
    stock: "In Stock",
    halalCertified: true,
    sizeOptions: ["Regular", "Jumbo", "Pack of 5"],
    countdown: { days: 11, hours: 12, minutes: 55, seconds: 37 },
  },
  {
    id: "IND-2025-CHIKN",
    name: "Indomie Goreng Fiery Chikin",
    image: "/public/img/colectionpremium/Indomie Goreng Fiery Chikin.png",
    originalPrice: "Rp 6.000",
    discountedPrice: "Rp 4.500",
    rating: "★★★★☆",
    reviews: 18,
    flavor: "Spicy Chicken",
    netWeight: "90g",
    ingredients: "Wheat flour, chili, chicken extract",
    category: "Premium Collection",
    stock: "Limited Stock",
    halalCertified: true,
    sizeOptions: ["Regular", "Jumbo", "Pack of 5"],
    countdown: { days: 10, hours: 5, minutes: 30, seconds: 15 },
  },
];

const IndomieProductCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const product = products[currentIndex];

  return (
    <div className="indomie-product-card">
      {/* Gambar Produk */}
      <div className="indomie-product-image">
        <img src={product.image} alt={product.name} className="indomie-thumbnail" />
      </div>

      {/* Informasi Produk */}
      <div className="indomie-product-info">
        <h1 className="indomie-product-title">{product.name}</h1>

        <div className="indomie-reviews">
          <span className="indomie-rating">{product.rating}</span>
          <span className="indomie-review-count">{product.reviews} review(s)</span>
          <button className="indomie-add-review">Add your review</button>
        </div>

        <div className="indomie-pricing">
          <span className="indomie-original-price">{product.originalPrice}</span>
          <span className="indomie-discounted-price">{product.discountedPrice}</span>
        </div>

        <div className="indomie-variants">
          <div className="indomie-variant">
            <strong>Size:</strong>
            <select className="indomie-size-select">
              {product.sizeOptions.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </div>
          <div className="indomie-variant">
            <strong>Flavor:</strong>
            <span>{product.flavor}</span>
          </div>
        </div>

        {/* Spesifikasi Produk */}
        <div className="indomie-specs">
          <p>
            <strong>Net Weight:</strong> {product.netWeight}
          </p>
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Stock Status:</strong> <span style={{ color: "green" }}>{product.stock}</span>
          </p>
          <p>
            <strong>Halal Certified:</strong> {product.halalCertified ? "✅ Yes" : "❌ No"}
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="indomie-countdown">
          <div className="indomie-countdown-title">PROMO ENDS IN:</div>
          <div className="indomie-timer">
            <div className="indomie-time-unit">
              <span className="indomie-time-value">{product.countdown.days}</span>
              <span className="indomie-time-label">DAYS</span>
            </div>
            <div className="indomie-time-unit">
              <span className="indomie-time-value">{product.countdown.hours}</span>
              <span className="indomie-time-label">HOURS</span>
            </div>
            <div className="indomie-time-unit">
              <span className="indomie-time-value">{product.countdown.minutes}</span>
              <span className="indomie-time-label">MINUTES</span>
            </div>
            <div className="indomie-time-unit">
              <span className="indomie-time-value">{product.countdown.seconds}</span>
              <span className="indomie-time-label">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndomieProductCard;
