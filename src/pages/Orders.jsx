import React, { useState } from "react";
import data2 from "../data2.json";
import PageHeader from "../components/PageHeader";
import AddButton from "../components/AddButton";

// Komponen Pagination (bisa gunakan yang sebelumnya)
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
  }

  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button className="px-2 py-1 rounded disabled:text-gray-400" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        &lt;
      </button>
      {pageNumbers.map((num, idx) =>
        num === "..." ? (
          <span key={idx} className="px-2 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button key={idx} className={`px-3 py-1 rounded ${currentPage === num ? "bg-blue-500 text-white" : "bg-white text-blue-500 border border-blue-200"}`} onClick={() => onPageChange(num)}>
            {num}
          </button>
        )
      )}
      <button className="px-2 py-1 rounded disabled:text-gray-400" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        &gt;
      </button>
    </div>
  );
}

function Orders() {
  const breadcrumb = ["Orders", " / ", "Orders List"];
  const ITEMS_PER_PAGE = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const totalPages = Math.ceil(data2.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;

  // Filter orders based on search term and status filter
  const filteredOrders = data2.filter((order) => {
    const matchesSearch = Object.values(order).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "All" || order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const currentData = filteredOrders.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const getStatusTextColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "text-yellow-600 font-semibold";
      case "completed":
        return "text-green-600 font-semibold";
      case "cancelled":
        return "text-red-600 font-semibold";
      case "in progress":
        return "text-blue-600 font-semibold";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader title="Orders List" breadscrumb={breadcrumb} children={<AddButton name="add-button" label="Add Orders" />} />

      {/* Search and Filter Section */}
      <div className="flex items-center space-x-4 mt-4">
        <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="Search by order details" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <select className="p-2 border border-gray-300 rounded-md" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
          <option value="in progress">In Progress</option>
        </select>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-green-600 text-white">
              {Object.keys(data2[0]).map((key) => (
                <th key={key} className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-100 transition">
                {Object.entries(item).map(([key, value], i) => {
                  const isStatusColumn = key.toLowerCase() === "status";
                  const textColor = isStatusColumn ? getStatusTextColor(value) : "text-gray-800";
                  return (
                    <td key={i} className={`px-6 py-3 border border-gray-300 ${textColor}`}>
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}

export default Orders;
