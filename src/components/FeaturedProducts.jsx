import React, { useEffect, useState } from "react";
import productsData from "../products.json"; // Sesuaikan dengan path file JSON Anda

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    // Menyimpan data produk yang diimpor dari file JSON ke state
    setProducts(productsData);
  }, []);

  // Fungsi untuk membuka modal dan menampilkan gambar yang dipilih
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 tracking-wide text-gray-800">Produk Unggulan</h2>
        <p className="text-center text-gray-500 italic mb-10">Ini adalah Produk Produk Terbaik Yang Kami Punya</p>

        {/* Grid produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col items-center">
              {/* Label NEW */}
              {product.isNew && <span className="absolute top-3 left-3 bg-[#e63946] text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>}
              {/* Gambar produk */}
              <img
                src={product.image}
                alt={product.name}
                className="w-36 h-36 object-contain mb-6 cursor-pointer"
                onClick={() => openModal(product.image)} // Membuka modal saat gambar diklik
              />
              {/* Nama dan harga */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 text-center">
                  <span className="font-medium text-gray-700 text-sm">{product.name}</span>
                  <span className="text-[#e63946]">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </span>
                </div>
                <span className="text-[#e63946] font-bold text-lg mt-2">£{product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Pop-up untuk Gambar */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-lg max-w-2xl w-full">
              <div className="flex justify-end">
                <button onClick={closeModal} className="text-gray-600 text-xl font-bold">
                  &times;
                </button>
              </div>
              <img src={selectedImage} alt="Selected Product" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
