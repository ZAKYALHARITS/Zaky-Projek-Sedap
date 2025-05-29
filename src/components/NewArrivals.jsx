import React, { useState } from "react";

const indomieCollectionPremium = [
  {
    id: 1,
    name: "Indomie Goreng K-Rose",
    price: "Rp 25.000",
    image: "/public/img/colectionpremium/Indomie Goreng K-Rose.png",
    isNew: true,
    description: "Sensasi mi goreng premium dengan cita rasa mewah dan bahan berkualitas tinggi",
  },
  {
    id: 2,
    name: "Indomie Goreng Fiery Chikin",
    price: "Rp 30.000",
    image: "/public/img/colectionpremium/Indomie Goreng Fiery Chikin.png",
    isNew: true,
    description: "Mi goreng istimewa dengan aroma truffle yang menggugah selera",
  },
  {
    id: 3,
    name: "Indomie Spicy Ramyeon",
    price: "Rp 27.500",
    image: "/public/img/colectionpremium/Indomie Spicy Ramyeon.png",
    isNew: false,
    description: "Kombinasi rasa lada hitam yang kuat dengan tekstur mi yang lebih premium",
  },
  {
    id: 4,
    name: "Indomie Tori Miso Ramen",
    price: "Rp 35.000",
    image: "/public/img/colectionpremium/Indomie Tori Miso Ramen.png",
    isNew: true,
    description: "Mi goreng premium dengan sentuhan daging wagyu yang lembut dan beraroma khas",
  },
  {
    id: 5,
    name: "Indomie Takoyaki Ramen",
    price: "Rp 28.500",
    image: "/public/img/colectionpremium/Indomie Takoyaki Ramen.png",
    isNew: false,
    description: "Kombinasi mi lezat dengan rasa jamur premium dan bumbu pilihan",
  },
  {
    id: 6,
    name: "Indomie Shoyu Ramen",
    price: "Rp 26.000",
    image: "/public/img/colectionpremium/Indomie Shoyu Ramen.png",
    isNew: false,
    description: "Mi goreng dengan aroma mentega bawang putih yang menggugah selera",
  },
  {
    id: 7,
    name: "Indomie Curly Noodle Salted Egg",
    price: "Rp 29.000",
    image: "/public/img/colectionpremium/Indomie Curly Noodle Salted Egg.png",
    isNew: true,
    description: "Mi dengan rasa kimchi pedas yang khas dan autentik",
  },
  {
    id: 8,
    name: "Indomie Keriting Goreng Rasa Spesial",
    price: "Rp 31.500",
    image: "/public/img/colectionpremium/Indomie Keriting Goreng Rasa Spesial.png",
    isNew: false,
    description: "Mi dengan saus carbonara creamy yang kaya rasa",
  },
  {
    id: 9,
    name: "Indomie Keriting Goreng Rasa Ayam Panggang",
    price: "Rp 32.000",
    image: "/public/img/colectionpremium/Indomie Keriting Goreng Rasa Ayam Panggang.png",
    isNew: true,
    description: "Mi dengan cita rasa tom yum Thailand yang segar dan pedas",
  },
  {
    id: 10,
    name: "Indomie Keriting Goreng Rasa Ayam Cabe Rawit",
    price: "Rp 33.000",
    image: "/public/img/colectionpremium/Indomie Keriting Goreng Rasa Ayam Cabe Rawit.png",
    isNew: false,
    description: "Mi dengan saus Szechuan yang pedas dan kaya rempah",
  },
];

const IndomieCollectionPremium = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  // Menampilkan hanya 3 produk pertama jika belum diklik
  const visibleProducts = showAllProducts ? indomieCollectionPremium : indomieCollectionPremium.slice(0, 3);

  return (
    <section
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(to bottom, #ffffff, #ffffff)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            fontWeight: "800",
            fontSize: "2.5rem",
            color: "#e30613",
            marginBottom: "12px",
            letterSpacing: "1px",
          }}
        >
          INDO<span style={{ color: "#000" }}>MIE COLLECTION PREMIUM</span>
        </h2>

        <p
          style={{
            fontStyle: "italic",
            color: "#666",
            marginBottom: "40px",
            fontSize: "1.1rem",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Nikmati pengalaman mi premium dengan bahan terbaik dan rasa istimewa
        </p>

        {/* Produk yang tampil */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px", marginTop: "32px" }}>
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "0",
                position: "relative",
                boxShadow: "0 10px 30px rgba(227, 6, 19, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
                border: "1px solid #f0f0f0",
              }}
            >
              {product.isNew && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#e30613",
                    color: "white",
                    fontSize: "0.9rem",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    zIndex: "2",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  LIMITED EDITION
                </div>
              )}

              <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto", objectFit: "contain", transition: "transform 0.5s ease" }} />
              </div>

              <div style={{ padding: "24px 20px", textAlign: "left" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#222", marginBottom: "8px", minHeight: "64px" }}>{product.name}</h3>

                <p style={{ color: "#666", fontSize: "0.95rem", marginBottom: "16px", minHeight: "60px", lineHeight: "1.5" }}>{product.description}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px" }}>
                  <div style={{ color: "#e30613", fontWeight: "800", fontSize: "1.3rem" }}>{product.price}</div>

                  <button
                    style={{
                      backgroundColor: "#e30613",
                      color: "white",
                      border: "none",
                      padding: "10px 24px",
                      borderRadius: "30px",
                      fontWeight: "700",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontSize: "0.9rem",
                    }}
                  >
                    ORDER NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol untuk melihat semua produk */}
        <div style={{ marginTop: "60px", display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#e30613",
              border: "2px solid #e30613",
              padding: "12px 36px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "1rem",
            }}
            onClick={() => setShowAllProducts(!showAllProducts)}
          >
            {showAllProducts ? "SHOW LESS" : "VIEW ALL PREMIUM PRODUCTS"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndomieCollectionPremium;
