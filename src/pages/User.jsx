import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination'; // pastikan path sesuai

const ITEMS_PER_PAGE = 15;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [cityFilter, setCityFilter] = useState('All');
  const [ageFilter, setAgeFilter] = useState('All');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  // Ambil daftar unik city dari data users
  const cityOptions = [
    ...new Set(users.map((user) => user.address?.city).filter(Boolean)),
  ];

  // Filter users based on search, gender, city, and age filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender =
      genderFilter === 'All' || user.gender.toLowerCase() === genderFilter.toLowerCase();
    const matchesCity =
      cityFilter === 'All' || user.address?.city === cityFilter;

    let matchesAge = true;
    if (ageFilter !== 'All') {
      if (ageFilter === '<20') matchesAge = user.age < 20;
      else if (ageFilter === '20-29') matchesAge = user.age >= 20 && user.age <= 29;
      else if (ageFilter === '30-39') matchesAge = user.age >= 30 && user.age <= 39;
      else if (ageFilter === '40-49') matchesAge = user.age >= 40 && user.age <= 49;
      else if (ageFilter === '50+') matchesAge = user.age >= 50;
    }

    return matchesSearch && matchesGender && matchesCity && matchesAge;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <span className="text-3xl font-semibold text-gray-800">Users List</span>
      <div className="flex items-center font-medium space-x-2 mt-2">
        <span className="text-gray-500">Dashboard</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-500">Users</span>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center space-x-4 mt-4 flex-wrap">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={genderFilter}
          onChange={(e) => {
            setGenderFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={cityFilter}
          onChange={(e) => {
            setCityFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Cities</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <select
          className="p-2 border border-gray-300 rounded-md"
          value={ageFilter}
          onChange={(e) => {
            setAgeFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Ages</option>
          <option value="<20">{'<20'}</option>
          <option value="20-29">20-29</option>
          <option value="30-39">30-39</option>
          <option value="40-49">40-49</option>
          <option value="50+">50+</option>
        </select>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">ID</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">NAME</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">EMAIL</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">PHONE</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">AGE</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">GENDER</th>
              <th className="px-6 py-3 text-left uppercase font-semibold text-sm border border-gray-300">CITY</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 transition">
                <td className="px-6 py-3 border border-gray-300">{user.id}</td>
                <td className="px-6 py-3 border border-gray-300">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-6 py-3 border border-gray-300">{user.email}</td>
                <td className="px-6 py-3 border border-gray-300">{user.phone}</td>
                <td className="px-6 py-3 border border-gray-300">{user.age}</td>
                <td className="px-6 py-3 border border-gray-300 capitalize">{user.gender}</td>
                <td className="px-6 py-3 border border-gray-300">{user.address?.city}</td>
              </tr>
            ))}
            {currentUsers.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
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
