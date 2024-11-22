// PushNotifications.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewNotification = () => {


  const navigate = useNavigate();

  const handleAddNotificationClick = () => {
    navigate("/add-push-notifications");
  };


  // const handleAddNotification = () => {
  //   // Handle the add notification logic here, such as opening a modal or navigating
  //   console.log("Add New Notification clicked");
  // };



  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
     

      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#172554" }}>
      Track Notification Performance
      </h2>

      {/* Track Notification Performance Section */}
      <div className="mt-8">
        
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Open Rate */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <label className="block text-md font-semibold text-gray-800">Open Rate</label>
            <p className="text-gray-600 text-lg">50%</p>
          </div>

          {/* Engagement Rate */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <label className="block text-md font-semibold text-gray-800">Engagement Rate</label>
            <p className="text-gray-600 text-lg">30%</p>
          </div>

          {/* Delivery Status */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <label className="block text-md font-semibold text-gray-800">Delivery Status</label>
            <p className="text-gray-600 text-lg">Delivered to 90% of recipients</p>
          </div>

          {/* Click Rate */}
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <label className="block text-md font-semibold text-gray-800">Click Rate</label>
            <p className="text-gray-600 text-lg">20%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotification;
