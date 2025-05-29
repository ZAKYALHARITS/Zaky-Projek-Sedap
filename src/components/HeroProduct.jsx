import React from "react";

export default function HeroIndomie() {
  return (
    <section className="relative w-full min-h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://compas.co.id/wp-content/uploads/2022/02/Artikel-Landscape-18Feb.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24 flex items-center justify-center text-center text-white">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">NIKMATI INDOMIE</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">RASA YANG TERJAMIN</h2>
          <p className="text-lg sm:text-xl mb-6">Cicipi berbagai varian rasa yang membuat setiap momen jadi lebih spesial.</p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-all">LIHAT KOLEKSI</button>
        </div>
      </div>
    </section>
  );
}
