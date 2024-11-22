import React, { useState } from "react";
import { format } from "date-fns"; // For date formatting

const BuyerListCustomers = () => {
  // Dummy buyers data
  const [buyers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      ordersPlaced: 5,
      totalAmountSpent: 1500.75,
      lastPurchaseDate: "2024-10-10",
      preferredPaymentMethod: "Credit Card",
    },
    {
      id: 2,
      name: "Bob Smith",
      ordersPlaced: 3,
      totalAmountSpent: 950.5,
      lastPurchaseDate: "2024-09-15",
      preferredPaymentMethod: "PayPal",
    },
  ]);

  // Flag high-value customer (example functionality)
  const handleFlagCustomer = (customerId) => {
    console.log("Flagging customer ID:", customerId);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Buyer List - Customers with Purchases
      </h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Number of Orders Placed</th>
              <th className="py-3 px-6 text-left">Total Amount Spent</th>
              <th className="py-3 px-6 text-left">Last Purchase Date</th>
              <th className="py-3 px-6 text-left">Preferred Payment Method</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {buyers.map((buyer) => (
              <tr key={buyer.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{buyer.name}</td>
                <td className="py-3 px-6 text-left">{buyer.ordersPlaced}</td>
                <td className="py-3 px-6 text-left">{`₹${buyer.totalAmountSpent.toFixed(2)}`}</td>
                <td className="py-3 px-6 text-left">
                  {buyer.lastPurchaseDate ? format(new Date(buyer.lastPurchaseDate), "dd/MM/yyyy") : "N/A"}
                </td>
                <td className="py-3 px-6 text-left">
                  {buyer.preferredPaymentMethod || "N/A"}
                </td>
                <td className="py-3 px-6 text-center flex space-x-2 justify-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => console.log("Viewing order history for", buyer.name)}
                  >
                    View Order History
                  </button>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    onClick={() => console.log("Sending promotional offer to", buyer.name)}
                  >
                    Send Offer
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    onClick={() => handleFlagCustomer(buyer.id)}
                  >
                    Flag High-Value
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

export default BuyerListCustomers;
