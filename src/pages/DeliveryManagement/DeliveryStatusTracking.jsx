import React, { useState, useEffect } from 'react';

const DeliveryStatusTracking = () => {
  const [deliveryPersonnel, setDeliveryPersonnel] = useState([
    { id: 1, name: "John Doe", status: "Online", location: "Downtown", estimatedTime: "20 mins" },
    { id: 2, name: "Jane Smith", status: "Busy", location: "Uptown", estimatedTime: "15 mins" },
    { id: 3, name: "Alex Johnson", status: "Offline", location: "-", estimatedTime: "-" },
  ]);

  const [activeDeliveries, setActiveDeliveries] = useState([
    { id: 101, route: "Store A to Customer X", deliveryPerson: "John Doe", eta: "20 mins" },
    { id: 102, route: "Store B to Customer Y", deliveryPerson: "Jane Smith", eta: "15 mins" },
  ]);

  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h2 className="text-3xl font-semibold text-blue-800 mb-4">Delivery Status Tracking</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Delivery Personnel Status */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Delivery Personnel Status</h3>
          <ul className="space-y-4">
            {deliveryPersonnel.map((person) => (
              <li key={person.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                <div>
                  <p className="text-lg font-medium text-gray-700">{person.name}</p>
                  <p className={`text-sm font-semibold ${
                    person.status === "Online" ? "text-green-500" :
                    person.status === "Busy" ? "text-yellow-500" : 
                    "text-red-500"
                  }`}>
                    Status: {person.status}
                  </p>
                  <p className="text-gray-600 text-sm">Location: {person.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">ETA: {person.estimatedTime}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Active Deliveries */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Active Deliveries</h3>
          <ul className="space-y-4">
            {activeDeliveries.map((delivery) => (
              <li key={delivery.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <p className="text-lg font-medium text-gray-700">Route: {delivery.route}</p>
                <p className="text-sm text-gray-600">Assigned to: {delivery.deliveryPerson}</p>
                <p className="text-sm text-gray-500">Estimated Time: {delivery.eta}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatusTracking;
