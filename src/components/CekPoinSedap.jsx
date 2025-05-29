import React, { useState } from "react";
import reward from "../reward.json"; // pastikan path ini benar

export default function CekPoinSedap() {
  const [nomorHP, setNomorHP] = useState("");
  const [error, setError] = useState("");
  const [hasil, setHasil] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setHasil(null);

    // Validasi input
    if (!nomorHP.trim()) {
      setError("Nomor HP tidak boleh kosong.");
      return;
    }

    if (!/^\d{10,}$/.test(nomorHP)) {
      setError("Nomor HP minimal 10 digit angka.");
      return;
    }

    // Langsung gunakan data import reward.json
    const pelanggan = reward.find((p) => p.nomor_hp === nomorHP);

    if (pelanggan) {
      setHasil({ found: true, ...pelanggan });
    } else {
      setHasil({ found: false });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-red-700 mb-4">🎁 Cek Poin Reward Sedap</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Masukkan Nomor HP" value={nomorHP} onChange={(e) => setNomorHP(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-yellow-300" />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-300">
          Cek Poin
        </button>
      </form>

      {hasil && hasil.found && (
        <div className="mt-6 p-4 bg-green-50 border border-green-300 rounded text-green-800">
          <p>
            🎉 Selamat <strong>{hasil.nama}</strong>, Anda memiliki <strong>{hasil.poin}</strong> poin.
          </p>
          <p>
            Status Member: <strong>{hasil.status_member}</strong>
          </p>
          <p className="mt-2">Tukarkan segera dengan hadiah menarik!</p>
        </div>
      )}

      {hasil && !hasil.found && <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded text-red-800">❌ Nomor HP tidak terdaftar di sistem reward Sedap.</div>}
    </div>
  );
}
