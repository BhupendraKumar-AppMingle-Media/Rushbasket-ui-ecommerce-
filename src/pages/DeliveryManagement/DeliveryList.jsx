import React, { useState } from "react";
import { FaUserEdit, FaTrash, FaEye } from "react-icons/fa";

const DeliveryList = () => {
  const [deliveryPersonnel, setDeliveryPersonnel] = useState([
    {
      id: "D001",
      name: "John Doe",
      address: "123 Main St, City, Country",
      dateOfJoining: "2023-01-10",
      status: "Active",
      totalDeliveries: 120,
      lastDeliveryDate: "2024-10-31",
      rating: 4.5,
      deliveryStatus: "Online",
      currentRoute: "Route 1",
      estimatedTime: "15 mins",
    },
    {
      id: "D002",
      name: "Jane Smith",
      address: "456 Elm St, City, Country",
      dateOfJoining: "2023-02-15",
      status: "Inactive",
      totalDeliveries: 80,
      lastDeliveryDate: "2024-10-15",
      rating: 4.0,
      deliveryStatus: "Busy",
      currentRoute: "Route 2",
      estimatedTime: "25 mins",
    },
    // Add more delivery personnel here as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id) => {
    setDeliveryPersonnel((prev) =>
      prev.map((person) =>
        person.id === id
          ? { ...person, status: person.status === "Active" ? "Inactive" : "Active" }
          : person
      )
    );
  };

  const viewProfile = (id) => {
    // Implement navigation to detailed profile page
  };

  const editProfile = (id) => {
    // Implement navigation to edit profile page
  };

  const removeFromSystem = (id) => {
    setDeliveryPersonnel((prev) => prev.filter((person) => person.id !== id));
  };

  // Filter personnel based on search criteria
  const filteredPersonnel = deliveryPersonnel.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.totalDeliveries.toString().includes(searchTerm)
  );

  return (
    <div className="delivery-management p-4 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-5 text-center">Delivery List</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search by name, status, or delivery count"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg w-full max-w-md"
        />
      </div>

      <div className="delivery-personnel-list bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Delivery Personnel List</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Delivery ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-left">Date of Joining</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Total Deliveries</th>
              <th className="p-2 text-left">Last Delivery Date</th>
              <th className="p-2 text-left">Rating</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPersonnel.map((person) => (
              <tr key={person.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{person.id}</td>
                <td className="p-2">{person.name}</td>
                <td className="p-2">{person.address}</td>
                <td className="p-2">{person.dateOfJoining}</td>
                <td className={`p-2 font-semibold ${person.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {person.status}
                </td>
                <td className="p-2">{person.totalDeliveries}</td>
                <td className="p-2">{person.lastDeliveryDate}</td>
                <td className="p-2">{person.rating ? person.rating : "N/A"}</td>
                <td className="p-2 space-x-2">
                  <button className="text-blue-500 hover:text-blue-700" onClick={() => viewProfile(person.id)}>
                    <FaEye />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700" onClick={() => editProfile(person.id)}>
                    <FaUserEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700" onClick={() => toggleStatus(person.id)}>
                    {person.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={() => removeFromSystem(person.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPersonnel.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default DeliveryList;
