import React from "react";

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      date: "27 / April",
      title: "Varian Indomie Terbaru: Indomie Rasa Ayam Geprek",
      description: "Indomie menghadirkan rasa terbaru yang menggugah selera, Ayam Geprek! Rasakan sensasi pedas dan gurih yang nikmat dengan Indomie Ayam Geprek.",
      image: "/public/img/blog 1.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      date: "28 / April",
      title: "Cara Membuat Indomie dengan Topping Sosis Goreng",
      description: "Kreasikan Indomie dengan topping sosis goreng yang renyah! Simak cara membuat Indomie yang lebih spesial di artikel ini.",
      image: "/public/img/blog 2.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      date: "29 / April",
      title: "Keistimewaan Rasa Indomie Goreng Original",
      description: "Kenapa Indomie Goreng Original selalu jadi pilihan utama? Baca ulasan tentang kenikmatan Indomie Goreng yang telah melegenda di seluruh dunia.",
      image: "/public/img/blog 3.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <section className="py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 tracking-wide text-gray-800">Dari Dunia Indomie</h2>
        <p className="text-center text-gray-500 italic mb-10">Nikmati berbagai resep dan kreasi menarik seputar Indomie</p>

        {/* Grid untuk blog posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="relative bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6">
              {/* Gambar Produk */}
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover mb-6 rounded-lg" />
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{post.description}</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">
                Baca Selengkapnya &raquo;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
