import React from "react";
import NavbarSedap from "../components/Navbar"; // Mengimpor Navbar
import Footer from "../components/Footer"; // Mengimpor Footer
import ContactSection from "../components/ContactSection"; // Mengimpor Footer

export default function KontakLayout() {
  return (
    <div id="kontak-container" className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarSedap />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
