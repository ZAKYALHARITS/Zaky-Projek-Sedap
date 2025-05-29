import React, { useState } from "react";
import products from "../assets/products.json"; // Import the products data

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gridType, setGridType] = useState("grid-cols-4");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Jumlah produk per halaman

  // Filter produk berdasarkan kategori
  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  // Logika untuk memecah produk menjadi beberapa halaman
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total halaman yang tersedia
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <section className="bg-white py-16 px-4 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 bg-gray-100 p-6 rounded-lg shadow-lg mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold mb-6">Categories</h3>
          <ul>
            <li>
              <button onClick={() => setSelectedCategory("All")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                All Products
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("Goreng")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                Goreng
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("Kuah")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                Kuah
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("Jumbo")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                Jumbo
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("Premium")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                Premium
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("Kuliner Indonesia")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                Kuliner Indonesia
              </button>
            </li>
            <li>
              <button onClick={() => setSelectedCategory("HypeAbis")} className="w-full text-left py-3 px-4 hover:bg-gray-200 rounded-md mb-2">
                HypeAbis
              </button>
            </li>
          </ul>
        </div>

        {/* Produk Grid */}
        <div className="w-full md:w-3/4">
          {/* Switch Grid Type */}
          <div className="flex justify-between mb-6">
            <div>
              <button onClick={() => setGridType("grid-cols-4")} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Normal Grid
              </button>
              <button onClick={() => setGridType("grid-cols-1")} className="bg-blue-500 text-white px-6 py-3 rounded-lg ml-4 hover:bg-blue-600">
                Detail Grid
              </button>
            </div>
          </div>

          {/* Grid produk */}
          <div className={`grid ${gridType} gap-8`}>
            {currentProducts.map((product) => (
              <div key={product.id} className="relative bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col items-center">
                {/* Label NEW */}
                {product.isNew && <span className="absolute left-0 top-0 bg-[#7eb4c7] text-white text-xs font-semibold px-3 py-1 rounded-br-lg">NEW</span>}

                {/* Gambar produk dan Deskripsi jika Detail Grid */}
                {gridType === "grid-cols-1" ? (
                  <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Gambar Produk */}
                    <img src={product.image} alt={product.name} className="w-72 h-72 object-contain mb-6 md:mb-0" />

                    {/* Deskripsi Produk, Rating, Harga, Tombol Add to Cart */}
                    <div className="text-center md:text-left md:ml-8 w-full md:w-1/2">
                      <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-600 mt-4">{product.description}</p>
                      <div className="flex items-center justify-center md:justify-start mt-4">
                        {/* Rating */}
                        <div className="flex items-center">
                          <span className="text-yellow-500">★</span>
                          <span className="text-gray-700 ml-2">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-[#7eb4c7] font-bold text-xl">Rp{(product.price * 15000).toFixed(0)}</span>
                      </div>
                      <button className="mt-6 bg-black text-white py-2 px-8 rounded-lg hover:bg-gray-700">Add to Cart</button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Grid Normal: Gambar Produk dan Nama */}
                    <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                    <div className="w-full flex flex-col items-center">
                      <div className="flex items-center w-full justify-center gap-1">
                        <span className="italic text-gray-700 text-base">{product.name}</span>
                      </div>
                      <span className="text-[#7eb4c7] font-bold text-lg mt-1">Rp{(product.price * 15000).toFixed(0)}</span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-4 disabled:bg-gray-300">
              Previous
            </button>
            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4 disabled:bg-gray-300">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
