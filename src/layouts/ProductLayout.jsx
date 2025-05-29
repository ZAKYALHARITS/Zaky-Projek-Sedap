import React from "react";
import NavbarSedap from "../components/Navbar"; // Mengimpor NavbarSedap
import Products from "../components/Products"; // Mengimpor komponen Products
import Footer from "../components/Footer";
import HeroProduct from "../components/HeroProduct";

export default function ProductLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex flex-col">
      <div id="layout-wrapper" className="flex-1">
        <NavbarSedap />
        <HeroProduct />
        <div id="product-section" className="py-10">
          <Products /> {/* Menampilkan produk dari komponen Products */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
