import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-red-400 pb-10">
        {/* Tentang Indomie */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-yellow-400 pl-2 mb-4">TENTANG INDOMIE</h3>
          <p className="mb-2">PT Indofood CBP Sukses Makmur Tbk – Divisi Noodle</p>
          <p className="mb-2">Jl. Jend. Sudirman Kav. 76-78, Jakarta 12910</p>
          <p className="mb-2">📞 (021) 5795 8822</p>
          <p className="mb-2">✉️ info@indomie.com</p>
        </div>

        {/* Produk Kami */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-yellow-400 pl-2 mb-4">PRODUK KAMI</h3>
          <ul className="space-y-2">
            <li>Indomie Goreng</li>
            <li>Indomie Kuah</li>
            <li>Indomie Real Meat</li>
            <li>Indomie Hype Abis</li>
            <li>Indomie Premium Collection</li>
          </ul>
        </div>

        {/* Informasi Perusahaan */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-yellow-400 pl-2 mb-4">INFORMASI</h3>
          <ul className="space-y-2">
            <li>Tentang Kami</li>
            <li>Karier</li>
            <li>Berita & Event</li>
            <li>CSR</li>
            <li>Kontak</li>
          </ul>
        </div>

        {/* Layanan Konsumen */}
        <div>
          <h3 className="text-lg font-bold border-l-4 border-yellow-400 pl-2 mb-4">LAYANAN KONSUMEN</h3>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Kritik & Saran</li>
            <li>Privasi & Kebijakan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </div>

      {/* Footer Bawah */}
      <div className="mt-8 text-center text-sm text-red-200">
        <p>
          © {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">Indomie Indonesia</span>. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6 text-white text-lg">
          {/* Ikon Sosial Media dengan Link */}
          <a href="https://www.facebook.com/Indomie/?locale=ja_KS" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/indomie" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/indomie/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/user/Indomie" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
