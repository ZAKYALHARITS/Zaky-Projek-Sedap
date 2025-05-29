import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Bagian 1: Tentang Indomie */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img src="/public/img/about indomie.png" alt="Tentang Indomie" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Tentang Sedap</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <span className="font-semibold text-[#e63946]">Sedap</span> diproduksi oleh Indofood, pelopor mie instan di Indonesia dan salah satu produsen mie instan terbesar di dunia. Mie instan kami hadir dalam berbagai varian, mulai
              dari rasa kuah klasik hingga varian goreng yang paling populer.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">Tersedia di berbagai negara di seluruh dunia, dengan kapasitas produksi miliaran bungkus per tahun, tidak heran jika Sedap menjadi rasa favorit banyak orang.</p>
          </div>
        </div>

        {/* Bagian 2: Sejarah */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <img src="/public/img/indomie history.png" alt="Sejarah Sedap" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sejarah Kami</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Merek mie instan Sedap pertama kali diluncurkan pada tahun 1972 dengan varian rasa ayam. Pada tahun 1982, kami menghadirkan **Mi Goreng**, varian mie kering pertama yang terinspirasi dari mie goreng tradisional Indonesia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kerja keras, ketekunan, dan inovasi adalah faktor utama yang membuat Sedap berkembang menjadi salah satu mie instan pilihan utama di Indonesia. Setelah puluhan tahun, kami tetap memegang teguh nilai-nilai tersebut dan
              mempertahankan reputasi kami.
            </p>
          </div>
        </div>

        {/* Bagian Nilai Kami */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Kualitas", description: "Kami menggunakan bahan berkualitas tinggi dan menjaga standar produksi yang ketat." },
              { title: "Inovasi", description: "Terus mengembangkan produk baru untuk memenuhi kebutuhan konsumen." },
              { title: "Harga Terjangkau", description: "Memberikan kualitas premium dengan harga yang bisa dinikmati semua orang." },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kapasitas Produksi */}
        <div className="bg-[#f8f9fa] rounded-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Kapasitas Produksi Kami</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "50+", label: "Tahun Pengalaman" },
              { value: "19M+", label: "Bungkus per Tahun" },
              { value: "30+", label: "Varian Rasa" },
              { value: "100+", label: "Negara Tersedia" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-[#e63946] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
