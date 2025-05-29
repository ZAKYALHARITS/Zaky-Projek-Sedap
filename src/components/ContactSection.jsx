import React from "react";

export default function ContactSectionIndomie() {
  return (
    <div id="contact-container" className="bg-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-red-600 text-center">Hubungi Indomie</h1>
      <p className="text-gray-700 text-center mt-2">Jika ada pertanyaan tentang produk Indomie, hubungi kami!</p>

      <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Formulir Kontak */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-red-400">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Kirim Pertanyaan</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600">Nama</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Masukkan nama Anda" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Masukkan email Anda" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Pertanyaan tentang Indomie</label>
              <textarea className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" rows="4" placeholder="Tulis pertanyaan Anda di sini"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Informasi Indomie */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-red-400">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Kontak Resmi Indomie</h2>
          <p className="text-gray-700">Hubungi kami untuk informasi produk, pengaduan, atau kerjasama bisnis.</p>

          <div className="mt-4">
            <h3 className="text-gray-700 font-medium">Alamat:</h3>
            <p className="text-gray-600">Jl. Indofood Tower No. 1, Jakarta, Indonesia</p>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-700 font-medium">Telepon:</h3>
            <p className="text-gray-600">+62 21-1234-5678</p>
          </div>

          <div className="mt-4">
            <h3 className="text-gray-700 font-medium">Email:</h3>
            <p className="text-gray-600">cs@indomie.co.id</p>
          </div>
        </div>
      </div>

      {/* Peta Lokasi */}
      <div className="mt-10 w-full max-w-5xl">
        <iframe
          title="Lokasi Kantor Indomie"
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.619283632524!2d110.39979931474147!3d-7.803638594372232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579a39e4b3bb%3A0x9b528aad4b6e68eb!2sIndofood%20Tower!5e0!3m2!1sen!2sid!4v1636112946817!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
