import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryManagement = () => {
  return (
    <div className="p-6 bg-gray-100 h-screen">
      <h1 className="text-3xl font-semibold  mb-8">Delivery Management</h1>
      <nav className="space-y-4 mb-8">
        <Link to="/assign-deliveries" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Assign/Unassign Deliveries
        </Link>
        {/* <Link to="/search-personnel" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Search and Filter Delivery Personnel
        </Link> */}
        <Link to="/performance-dashboard" className="block p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
          Performance Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default DeliveryManagement;
