import React, { useState, useEffect } from "react";
import testimonialsData from "../testimonials.json"; // Mengimpor data dari file JSON
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaShoppingCart } from "react-icons/fa";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonialsData.length);
  };

  const t = testimonialsData[active];

  return (
    <section className="bg-white py-16 px-4 md:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Testimonial main section */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center space-x-8">
            <button onClick={prevTestimonial} className="text-red-400 text-3xl hover:text-red-600 transition transform hover:scale-110">
              &lt;
            </button>

            <div className="flex flex-col items-center transition-opacity duration-1000 ease-in-out opacity-100">
              <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-red-500 shadow-lg" />
              <span className="font-extrabold text-red-700 text-lg">{t.name}</span>
              <span className="text-xs text-yellow-700 font-semibold mb-2">{t.job}</span>
            </div>

            <button onClick={nextTestimonial} className="text-red-400 text-3xl hover:text-red-600 transition transform hover:scale-110">
              &gt;
            </button>
          </div>

          <p className="text-center italic text-gray-700 mt-6 max-w-2xl font-medium transition-opacity duration-1000 ease-in-out opacity-100">"{t.review}"</p>
        </div>

        {/* Grid features section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="border border-red-200 bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
            <svg className="w-8 h-8 mb-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3z" />
              <path d="M8 8h8v8H8V8z" />
            </svg>
            <span className="font-bold text-gray-800 text-center">GRATIS ONGKIR NASIONAL</span>
            <span className="text-gray-500 text-sm text-center mt-1">Ke seluruh Indonesia</span>
          </div>
          <div className="border border-red-200 bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
            <svg className="w-8 h-8 mb-4 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="font-bold text-gray-800 text-center">LAYANAN 24/7</span>
            <span className="text-gray-500 text-sm text-center mt-1">Siap bantu kapan saja</span>
          </div>
          <div className="border border-red-200 bg-white rounded-lg p-8 flex flex-col items-center shadow-md">
            <svg className="w-8 h-8 mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold text-gray-800 text-center">JAMINAN UANG KEMBALI</span>
            <span className="text-gray-500 text-sm text-center mt-1">Kalau tidak puas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
