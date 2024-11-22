// // PushNotifications.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaEye } from "react-icons/fa"; // Importing the view icon

// const PushNotifications = () => {
//   const navigate = useNavigate();

//   // Sample data for notifications
//   const notifications = [
//     {
//       id: 1,
//       title: "New Feature Update",
//       message: "Check out the latest feature!",
//       targetAudience: "All Users",
//       dateTime: "2024-10-28 10:00 AM",
//     },
//     {
//       id: 2,
//       title: "Maintenance Notice",
//       message: "Scheduled maintenance on 10/29",
//       targetAudience: "Active Users",
//       dateTime: "2024-10-29 2:00 PM",
//     },
//     {
//       id: 2,
//       title: "Maintenance Notice",
//       message: "Scheduled maintenance on 10/29",
//       targetAudience: "Active Users",
//       dateTime: "2024-10-29 2:00 PM",
//     },
//     {
//       id: 2,
//       title: "Maintenance Notice",
//       message: "Scheduled maintenance on 10/29",
//       targetAudience: "Active Users",
//       dateTime: "2024-10-29 2:00 PM",
//     },
//     {
//       id: 2,
//       title: "Maintenance Notice",
//       message: "Scheduled maintenance on 10/29",
//       targetAudience: "Active Users",
//       dateTime: "2024-10-29 2:00 PM",
//     },
//   ];

//   // Navigate to the view notification page
//   const handleViewClick = () => {
//     navigate("/view-push-notifications");
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-6">
//       <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#172554" }}>
//         Push Notification Management
//       </h2>

//       {/* Add Notification Button */}
//       <button
//         onClick={() => navigate("/add-push-notifications")}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 mb-6"
//         style={{ backgroundColor: "#172554" }} >
//         + Add New Notification
//       </button>

//       {/* Notifications Table */}
//       <div className="overflow-x-auto mt-8">
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//           <thead className="bg-blue-100">
//             <tr>
//               <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Title</th>
//               <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Message</th>
//               <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Target Audience</th>
//               <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">Date/Time</th>
//               <th className="px-6 py-3 border-b text-left text-gray-700 font-semibold">View Performance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {notifications.map((notification) => (
//               <tr key={notification.id} className="hover:bg-blue-50 transition duration-200">
//                 <td className="px-6 py-4 border-b text-gray-600">{notification.title}</td>
//                 <td className="px-6 py-4 border-b text-gray-600">{notification.message}</td>
//                 <td className="px-6 py-4 border-b text-gray-600">{notification.targetAudience}</td>
//                 <td className="px-6 py-4 border-b text-gray-600">{notification.dateTime}</td>
//                 <td className="px-6 py-4 border-b text-center">
//                   <FaEye
//                     onClick={handleViewClick}
//                     className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PushNotifications;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";

const PushNotifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pushNotification");
        setNotifications(response.data); // Assuming response.data is an array of notifications
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  // Navigate to the view notification page
  const handleViewClick = () => {
    navigate("/view-push-notifications");
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-2">
      <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#172554" }}>
        Push Notification 
      </h2>

      {/* Add Notification Button */}
      <button
        onClick={() => navigate("/add-push-notifications")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-200 mb-6"
        style={{ backgroundColor: "#172554" }}
      >
        + New Notification
      </button>

      {/* Notifications Table */}
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-blue-100">
            <tr   style={{backgroundColor:'#86C3D7'}}>
              <th className="px-6 py-3 border-b text-left  font-semibold">Title</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Message</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Target Audience</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Date/Time</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification._id} className="hover:bg-[#fff4ea] transition duration-200">
                <td className="px-6 py-4 border-b ">{notification.title}</td>
                <td className="px-6 py-4 border-b ">{notification.message}</td>
                <td className="px-6 py-4 border-b ">{notification.sentTo}</td>
                <td className="px-6 py-4 border-b ">{notification.dateTime}</td>
                <td className="px-6 py-4 border-b text-center">
                  <FaEye
                    onClick={handleViewClick}
                    className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PushNotifications;

