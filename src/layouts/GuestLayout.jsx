import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import BlogPosts from "../components/BlogPosts";
import NewArrivals from "../components/NewArrivals";
import IndomieProductShowcase from "../components/IndomieProductShowcase";
import CekKetersediaanProduk from "../components/CekKetersediaanProduk";
import CekPoinSedap from "../components/CekPoinSedap";
import CekStatusPesanan from "../components/CekStatusPesanan";
import CekMember from "../components/CekMember"; // Pastikan ini sesuai dengan lokasi komponen
import IndomieProductCard from "../components/IndomieProductCard"; // Menambahkan komponen CartItems
import "../assets/components/GuestLayout.css";

export default function GuestLayout({ children }) {
  return (
    <div id="app-container" className="min-h-screen flex flex-col bg-gray-100">
      <div id="layout-wrapper" className="flex-1">
        <Navbar />
        <HeroSection />

        {/* Section Produk */}
        <section className="section bg-white py-12">
          <div className="container mx-auto">
            <IndomieProductShowcase />
            <NewArrivals />
            <FeaturedProducts />
          </div>
        </section>

        {/* Keranjang Belanja */}
        <section className="section bg-white py-12">
          <div className="container mx-auto">
            <IndomieProductCard />
          </div>
        </section>

        {/* Section Informasi */}
        <section className="section bg-gray-50 py-12">
          <div className="container mx-auto">
            <AboutSection />
            <BlogPosts />
          </div>
        </section>

        {/* Section Utility */}
        <section className="section bg-white py-12">
          <div className="container mx-auto">
            {/* <CekKetersediaanProduk /> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {children}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
