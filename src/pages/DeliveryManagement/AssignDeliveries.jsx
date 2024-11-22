import React, { useState } from 'react';

const AssignDeliveries = () => {
  const [deliveries, setDeliveries] = useState([
    { id: 1, assignedTo: "John Doe", status: "Assigned" },
    { id: 2, assignedTo: "Jane Smith", status: "Unassigned" },
    { id: 3, assignedTo: "Alex Johnson", status: "Assigned" },
  ]);

  const handleAssignUnassign = (id) => {
    setDeliveries((prev) =>
      prev.map((delivery) =>
        delivery.id === id ? { ...delivery, status: delivery.status === "Assigned" ? "Unassigned" : "Assigned" } : delivery
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Assign/Unassign Deliveries</h2>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery.id} className="p-4 bg-gray-50 rounded-lg shadow-md mb-4 flex justify-between">
            <div>
              <p className="text-lg font-medium">{delivery.assignedTo}</p>
              <p className="text-sm text-gray-500">Status: {delivery.status}</p>
            </div>
            <button
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
              onClick={() => handleAssignUnassign(delivery.id)}
            >
              {delivery.status === "Assigned" ? "Unassign" : "Assign"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignDeliveries;
