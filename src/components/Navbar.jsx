import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import indomieLogo from "/public/img/Indomie_Logo.png"; // Pastikan path benar

export default function NavbarSedap() {
  const cartItemCount = 5; // Simulasi jumlah barang di keranjang
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Menentukan perubahan warna navbar saat di-scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Top bar */}
      <div className="flex justify-between items-center bg-yellow-50 text-xs px-4 md:px-8 py-1 border-b border-yellow-200">
        <div className="flex flex-wrap gap-4 text-yellow-800 font-medium">
          <span className="cursor-pointer hover:text-yellow-600">BAHASA &#9662;</span>
          <span className="cursor-pointer hover:text-yellow-600">IDR &#9662;</span>
          <span className="cursor-pointer hover:text-yellow-600">AKUN SAYA</span>
          <span className="cursor-pointer hover:text-yellow-600">FAVORIT</span>
          <span className="cursor-pointer hover:text-yellow-600">PEMBAYARAN</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 shadow-md z-50 transition-all ${scrolling ? "bg-red-800" : "bg-red-700"} text-white`}>
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <NavLink to="/" className="text-2xl font-bold text-yellow-300 hover:text-yellow-400 transition">
            SEDAP
          </NavLink>
          <img src={indomieLogo} alt="Indomie Logo" width={50} height={50} />
        </div>

        {/* Menu Burger - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes className="w-6 h-6 text-yellow-300" /> : <FaBars className="w-6 h-6 text-yellow-300" />}
          </button>
        </div>

        {/* Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-xs font-semibold">
          {[
            { path: "/", label: "Beranda" },
            { path: "/products", label: "Produk" },
            { path: "/about", label: "Tentang Kami" },
            { path: "/contact", label: "Kontak" },
            { path: "/blog", label: "Blog" }, // Tambahan baru!
            { path: "/availability", label: "Cek Ketersediaan Produk" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink to={path} className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-yellow-300 transition")}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="relative cursor-pointer" aria-label="Keranjang">
            <FaShoppingCart className="w-5 h-5 text-yellow-300 hover:text-yellow-400 transition" />
            {cartItemCount > 0 && <span className="absolute -top-2 -right-2 bg-white text-xs text-red-700 rounded-full px-1 font-bold">{cartItemCount}</span>}
          </div>

          {/* Search */}
          <div className="cursor-pointer" aria-label="Cari">
            <FaSearch className="w-5 h-5 hover:text-yellow-300 transition" />
          </div>

          {/* Login & Register */}
          <div className="space-x-2 mt-1 md:mt-0">
            <NavLink to="/login" className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300 text-sm">
              Masuk
            </NavLink>
            <NavLink to="/register" className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 text-sm">
              Daftar
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-red-700 text-white p-4 z-40">
          <ul className="space-y-4 text-center">
            {[
              { path: "/", label: "Beranda" },
              { path: "/products", label: "Produk" },
              { path: "/about", label: "Tentang Kami" },
              { path: "/contact", label: "Kontak" },
              { path: "/blog", label: "Blog" }, // Tambahan baru!
              { path: "/availability", label: "Cek Ketersediaan Produk" },
            ].map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={({ isActive }) => (isActive ? "text-yellow-300" : "hover:text-yellow-300 transition")} onClick={() => setMenuOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tambahkan padding agar konten tidak tertutup oleh navbar */}
      <div className="pt-16"></div>
    </div>
  );
}
