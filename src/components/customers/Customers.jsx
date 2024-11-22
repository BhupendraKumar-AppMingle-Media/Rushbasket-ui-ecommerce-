import React, { useState } from "react";
import { FaTrophy, FaSearch, FaDownload, FaGift, FaChartBar } from "react-icons/fa";
import { FiUserPlus, FiUserX } from "react-icons/fi";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([
    {
      rank: 1,
      name: "John Doe",
      totalSpent: 15000,
      orders: 10,
      avgOrderValue: 1500,
      lastOrder: "2024-10-01",
    },
    {
      rank: 2,
      name: "Jane Smith",
      totalSpent: 12000,
      orders: 8,
      avgOrderValue: 1500,
      lastOrder: "2024-09-25",
    },
    // Add more customers as needed
  ]);

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleExportData = () => {
    // Implement CSV/Excel export functionality
  };

  const sendRewards = () => {
    // Implement reward sending functionality
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Customer Leaderboard</h1>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Registered Users</p>
            <p className="text-2xl font-semibold">5,230</p>
          </div>
          <FaChartBar className="text-blue-500 text-4xl" />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-gray-500">Active Buyers</p>
            <p className="text-2xl font-semibold">2,310</p>
          </div>
          <FaChartBar className="text-green-500 text-4xl" />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-gray-500">Top Buyer Trends</p>
            <p className="text-2xl font-semibold">+15%</p>
          </div>
          <FaChartBar className="text-yellow-500 text-4xl" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button onClick={sendRewards} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 flex items-center">
            <FaGift className="mr-2" /> Send Rewards
          </button>
          <button onClick={handleExportData} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 flex items-center">
            <FaDownload className="mr-2" /> Export Leaderboard
          </button>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by name or email"
            className="p-2 focus:outline-none"
          />
          <button className="px-4 bg-gray-200 text-gray-600">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="table-auto w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left font-semibold w-20">Rank</th>
              <th className="p-3 text-left font-semibold">Customer Name</th>
              <th className="p-3 text-left font-semibold">Total Spent (INR)</th>
              <th className="p-3 text-left font-semibold">Number of Orders</th>
              <th className="p-3 text-left font-semibold">Average Order Value</th>
              <th className="p-3 text-left font-semibold">Last Order Date</th>
              <th className="p-3 text-left font-semibold w-32">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers
              .filter((customer) => customer.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((customer, index) => (
                <tr key={index} className="hover:bg-gray-100 border-b">
                  <td className="p-3 text-center font-semibold">{customer.rank}</td>
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3">₹{customer.totalSpent.toLocaleString()}</td>
                  <td className="p-3">{customer.orders}</td>
                  <td className="p-3">₹{customer.avgOrderValue.toLocaleString()}</td>
                  <td className="p-3">{customer.lastOrder}</td>
                  <td className="p-3 flex space-x-2 items-center justify-center">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiUserPlus />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FiUserX />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
