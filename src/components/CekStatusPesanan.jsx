import React, { useState } from "react";
import orders from "../orders.json"; // Sesuaikan path-nya

export default function CekStatusPesanan() {
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    // Validasi
    if (!email.trim() || !orderId.trim()) {
      setError("Semua field wajib diisi.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    if (!/^\d+$/.test(orderId)) {
      setError("Nomor pesanan harus berupa angka.");
      return;
    }

    const order = orders.find((o) => o.email === email && o.order_id === parseInt(orderId));

    if (order) {
      setHasil({ found: true, ...order });
    } else {
      setHasil({ found: false });
    }
  };

  const statusStyle = {
    diproses: "text-yellow-600 bg-yellow-50 border-yellow-300",
    dikirim: "text-blue-600 bg-blue-50 border-blue-300",
    selesai: "text-green-600 bg-green-50 border-green-300",
    dibatalkan: "text-red-600 bg-red-50 border-red-300",
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">📦 Cek Status Pesanan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        <input type="text" placeholder="Masukkan Nomor Pesanan (Order ID)" value={orderId} onChange={(e) => setOrderId(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded" />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Cek Status
        </button>
      </form>

      {hasil && hasil.found && (
        <div className={`mt-6 p-4 border rounded ${statusStyle[hasil.status]}`}>
          ✅ Pesanan atas nama <strong>{hasil.nama_pemesan}</strong> dengan ID <strong>{hasil.order_id}</strong> sedang dalam status <strong>{hasil.status}</strong>.
        </div>
      )}

      {hasil && !hasil.found && <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded text-red-800">❌ Data pesanan tidak ditemukan. Periksa kembali email dan nomor pesanan Anda.</div>}
    </div>
  );
}
