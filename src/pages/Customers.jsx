import { useState, useEffect } from 'react';
import customersData from '../data3.json';
import Pagination from '../components/Pagination'; // pastikan path sesuai

const ITEMS_PER_PAGE = 15;

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loyaltyFilter, setLoyaltyFilter] = useState('All');

  useEffect(() => {
    setCustomers(customersData);
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;

  // Filter customers based on search term and loyalty filter
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLoyalty =
      loyaltyFilter === 'All' || customer.loyalty === loyaltyFilter;

    return matchesSearch && matchesLoyalty;
  });

  const currentCustomers = filteredCustomers.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const getLoyaltyColor = (loyalty) => {
    switch (loyalty) {
      case 'Gold':
        return 'text-yellow-500 font-semibold';
      case 'Silver':
        return 'text-gray-500 font-semibold';
      case 'Bronze':
        return 'text-orange-700 font-semibold';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <span className="text-3xl font-semibold text-gray-800">Customers List</span>
      <div className="flex items-center font-medium space-x-2 mt-2">
        <span className="text-gray-500">Dashboard</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-500">Customers</span>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center space-x-4 mt-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={loyaltyFilter}
          onChange={(e) => setLoyaltyFilter(e.target.value)}
        >
          <option value="All">All Loyalty Levels</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">CUSTOMER_ID</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">CUSTOMER_NAME</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">EMAIL</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">PHONE</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">LOYALTY</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentCustomers.map((customer) => (
              <tr key={customer.customer_id} className="hover:bg-gray-100 transition">
                <td className="px-6 py-3 border border-gray-300">{customer.customer_id}</td>
                <td className="px-6 py-3 border border-gray-300">{customer.customer_name}</td>
                <td className="px-6 py-3 border border-gray-300">{customer.email}</td>
                <td className="px-6 py-3 border border-gray-300">{customer.phone}</td>
                <td className={`px-6 py-3 border border-gray-300 ${getLoyaltyColor(customer.loyalty)}`}>
                  {customer.loyalty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
