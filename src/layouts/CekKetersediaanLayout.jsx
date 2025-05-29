import React from "react";
import NavbarSedap from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer
import CekKetersediaanProduk from "../components/CekKetersediaanProduk"; // Komponen pengecekan produk

export default function CekKetersediaanLayout() {
  return (
    <div id="cek-ketersediaan-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSedap />

      {/* Bagian utama */}
      <div className="flex-1 py-10">
        <CekKetersediaanProduk />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
