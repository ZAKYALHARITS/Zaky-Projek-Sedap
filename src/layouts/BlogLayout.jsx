import React from "react";
import NavbarSedap from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer
import BlogPosts from "../components/BlogPosts"; // Komponen untuk daftar postingan blog

export default function BlogLayout() {
  return (
    <div id="blog-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSedap />

      {/* Bagian Konten Blog */}
      <BlogPosts />
      {/* Footer */}
      <Footer />
    </div>
  );
}
