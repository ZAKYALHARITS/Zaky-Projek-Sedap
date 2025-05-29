import React, { useState } from "react";
import produkList from "../produk.json";
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaSearch } from "react-icons/fa";

export default function CekKetersediaanProduk() {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const cekProduk = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    if (!searchTerm.trim()) {
      setError("Silakan masukkan kode atau nama produk.");
      return;
    }

    const produkDitemukan = produkList.find((p) => p.kode_produk.toLowerCase() === searchTerm.trim().toLowerCase() || p.nama_produk.toLowerCase().includes(searchTerm.trim().toLowerCase()));

    if (!produkDitemukan) {
      setHasil({ status: "not_found" });
    } else if (produkDitemukan.stok > 0) {
      setHasil({ status: "tersedia", produk: produkDitemukan });
    } else {
      setHasil({ status: "habis", produk: produkDitemukan });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">Cek Ketersediaan Produk</h2>

      {/* Form Pencarian Produk */}
      <form onSubmit={cekProduk} className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Cari produk (kode/nama)" className="w-full focus:outline-none" />
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full">
          Cek Produk
        </button>
      </form>

      {/* Hasil Pengecekan */}
      {hasil && (
        <div className="mt-6 p-4 rounded shadow-inner border">
          {hasil.status === "tersedia" && (
            <div className="text-green-700">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                <span>
                  ✅ Produk <strong>{hasil.produk.nama_produk}</strong> tersedia!
                </span>
              </div>
              <p>
                Harga: <strong>Rp{hasil.produk.harga.toLocaleString()}</strong>
              </p>
              <p>
                Stok tersisa: <strong>{hasil.produk.stok}</strong>
              </p>
            </div>
          )}
          {hasil.status === "habis" && (
            <div className="text-yellow-700">
              <div className="flex items-center gap-2">
                <FaExclamationTriangle className="text-yellow-600" />
                <span>
                  ⚠️ Produk <strong>{hasil.produk.nama_produk}</strong> sedang habis.
                </span>
              </div>
              <p className="mt-2 text-gray-500">Mohon maaf, stok produk ini sementara kosong.</p>
            </div>
          )}
          {hasil.status === "not_found" && (
            <div className="text-red-600 flex items-center gap-2">
              <FaTimesCircle />
              <span>❌ Kode atau nama produk tidak ditemukan.</span>
            </div>
          )}
        </div>
      )}

      {/* Daftar Semua Produk */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Daftar Produk Indomie</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="border border-gray-300 p-2">Kode Produk</th>
                <th className="border border-gray-300 p-2">Nama Produk</th>
                <th className="border border-gray-300 p-2">Harga</th>
                <th className="border border-gray-300 p-2">Stok</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {produkList.map((produk) => (
                <tr key={produk.kode_produk} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-center">{produk.kode_produk}</td>
                  <td className="border border-gray-300 p-2">{produk.nama_produk}</td>
                  <td className="border border-gray-300 p-2 text-center">Rp{produk.harga.toLocaleString()}</td>
                  <td className="border border-gray-300 p-2 text-center">{produk.stok}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    {produk.stok > 0 ? (
                      <span className="text-green-600 flex items-center justify-center gap-2">
                        <FaCheckCircle />
                        <span>Tersedia</span>
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center justify-center gap-2">
                        <FaTimesCircle />
                        <span>Habis</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
