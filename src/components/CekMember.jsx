import React, { useState } from "react";
import members from "../members.json";

export default function CekMember() {
  const [email, setEmail] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setHasil(null);

    // Validasi
    if (!email.trim()) {
      setError("Email tidak boleh kosong.");
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    const member = members.find((m) => m.email.toLowerCase() === email.toLowerCase());

    if (member) {
      setHasil({ found: true, ...member });
    } else {
      setHasil({ found: false });
    }
  };

  const getMemberStyle = (tipe) => {
    switch (tipe) {
      case "silver":
        return "text-gray-700 bg-gray-100 border-gray-300";
      case "gold":
        return "text-yellow-800 bg-yellow-100 border-yellow-300";
      case "platinum":
        return "text-purple-800 bg-purple-100 border-purple-300";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">🧾 Cek Keanggotaan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Masukkan Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-indigo-300" />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
          Cek Member
        </button>
      </form>

      {hasil && hasil.found && (
        <div className={`mt-6 p-4 border rounded ${getMemberStyle(hasil.tipe_member)}`}>
          🧾 Selamat datang, <strong>{hasil.nama}</strong>! Anda adalah member <strong>{hasil.tipe_member.toUpperCase()}</strong>.
        </div>
      )}

      {hasil && !hasil.found && <div className="mt-6 p-4 bg-red-50 border border-red-300 rounded text-red-800">❌ Email tidak terdaftar sebagai member.</div>}
    </div>
  );
}
