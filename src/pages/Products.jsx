import React from "react";

// Data produk (bisa dari API/JSON)
const products = [
  {
    id: 1,
    name: "Sacrificial Chair Design",
    price: 170.0,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=cover&w=400&q=80",
    isNew: true,
  },
  {
    id: 2,
    name: "Sacrificial Chair Design",
    price: 170.0,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=400&q=80",
    isNew: false,
  },
  {
    id: 3,
    name: "Sacrificial Chair Design",
    price: 170.0,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=400&q=80",
    isNew: true,
  },
  {
    id: 4,
    name: "Sacrificial Chair Design",
    price: 170.0,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=400&q=80",
    isNew: false,
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 px-4 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 tracking-wide">FEATURED PRODUCTS</h2>
        <p className="text-center text-gray-500 italic mb-10">Claritas est etiam processus dynamicus, qui sequitur.</p>

        {/* Grid produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative bg-gray-50 rounded shadow hover:shadow-lg transition p-8 flex flex-col items-center">
              {/* Label NEW */}
              {product.isNew && <span className="absolute left-0 top-0 bg-[#7eb4c7] text-white text-xs font-semibold px-3 py-1 rounded-br-lg">NEW</span>}
              {/* Gambar produk */}
              <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-8" />
              {/* Nama dan harga */}
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center w-full justify-center gap-1">
                  <span className="italic text-gray-700 text-base">{product.name}</span>
                  <span className="ml-2 text-gray-400">
                    {/* Icon keranjang */}
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </span>
                </div>
                <span className="text-[#7eb4c7] font-bold text-lg mt-1">£{product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
