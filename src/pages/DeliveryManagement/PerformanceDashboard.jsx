import React from 'react';

const PerformanceDashboard = () => {
  const personnelData = [
    { name: "John Doe", active: true, deliveries: 5, rating: 4.5 },
    { name: "Jane Smith", active: false, deliveries: 3, rating: 4.0 },
    { name: "Alex Johnson", active: true, deliveries: 2, rating: 3.5 },
  ];

  const totalDeliveries = personnelData.reduce((sum, person) => sum + person.deliveries, 0);
  const avgDeliveries = (totalDeliveries / personnelData.length).toFixed(1);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Performance Dashboard</h2>
      <div className="p-4 bg-blue-100 rounded-lg mb-4">
        <p className="text-lg">Total Deliveries: {totalDeliveries}</p>
        <p className="text-lg">Average Deliveries per Person: {avgDeliveries}</p>
      </div>
      <h3 className="text-xl font-semibold mb-4">Personnel Feedback and Ratings</h3>
      <ul>
        {personnelData.map((person, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-md mb-4">
            <p className="text-lg font-medium">{person.name}</p>
            <p className="text-sm text-gray-500">Deliveries: {person.deliveries}</p>
            <p className="text-sm text-gray-500">Rating: {person.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformanceDashboard;
