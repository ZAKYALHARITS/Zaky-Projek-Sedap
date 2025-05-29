import React from "react";
import NavbarSedap from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer
import AboutSection from "../components/AboutSection"; // Mengimpor Footer

export default function AboutUsLayout() {
  return (
    <div id="about-us-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSedap />
      <AboutSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
