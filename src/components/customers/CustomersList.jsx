import React from "react";
import { useNavigate } from "react-router-dom";

const CustomersList = () => {
  const navigate = useNavigate();
   

  const handlePreviewCustomers = () => {
    navigate("/previewcustomers");
  };

  const handleEditCustomers = () => {
    navigate("/editcustomers");
  };

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-123-4567",
    },
  ];
  return (
    <div id="customer-page">
      <div className="p-7">
        <h2 className="text-4xl font-bold mb-4 text-center">Customer List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3.5 px-4 border">ID</th>
              <th className="py-3.5 px-4 border">Name</th>
              <th className="py-3.5 px-4 border">Email</th>
              <th className="py-3.5 px-4 border">Phone</th>
              <th className="py-3.5 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">{customer.id}</td>
                <td className="py-2 px-4 border">{customer.name}</td>
                <td className="py-2 px-4 border">{customer.email}</td>
                <td className="py-2 px-4 border">{customer.phone}</td>
                <td className="py-2 px-4 border">
                  <button onClick={handleEditCustomers} className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button className="ml-2 text-red-500 hover:underline">
                    Delete
                  </button>
                  <button  onClick={handlePreviewCustomers} className="ml-2 text-green-500 hover:underline">
                    Preview
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

export default CustomersList;
