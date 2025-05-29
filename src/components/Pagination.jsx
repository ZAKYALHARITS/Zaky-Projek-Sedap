// Pagination.js
export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];
  
    // Logic untuk menampilkan nomor halaman seperti pada gambar
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
  
    return (
      <div className="flex items-center justify-center mt-6 space-x-2">
        <button
          className="px-2 py-1 rounded disabled:text-gray-400"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map((num, idx) =>
          num === '...' ? (
            <span key={idx} className="px-2 py-1 text-gray-500">...</span>
          ) : (
            <button
              key={idx}
              className={`px-3 py-1 rounded ${currentPage === num ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-200'}`}
              onClick={() => onPageChange(num)}
            >
              {num}
            </button>
          )
        )}
        <button
          className="px-2 py-1 rounded disabled:text-gray-400"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  }
  