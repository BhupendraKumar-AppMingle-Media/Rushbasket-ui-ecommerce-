


import { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { FaEye } from "react-icons/fa";

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

          const handleEditNotification = () => {
            navigate("/edit-push-notifications");
          };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-2">
      {/* <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#172554" }}>
        Push Notification 
      </h2> */}

<h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Push</p>
  <p className="inline text-[#EF8120]">Notification</p>
  
</h1>

      {/* Add Notification Button */}
      <button
        onClick={() => navigate("/add-push-notifications")}
        className="px-4 py-2 bg-[#172554] text-white rounded-md shadow-md hover:bg-[#EF8120] transition duration-200 mb-6"
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
              <th className="px-6 py-3 border-b text-left  font-semibold">Audience</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Date/Time</th>
              <th className="px-6 py-3 border-b text-left  font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification._id} className="hover:bg-[#fff4ea] transition duration-200">
                <td className="px-6 py-1 border-b ">{notification.title}</td>
                <td className="px-6 py-1 border-b ">{notification.message}</td>
                <td className="px-6 py-1 border-b ">{notification.sentTo}</td>
                <td className="px-6 py-1 border-b ">{notification.dateTime}</td>

                {/* <td className="px-6 py-4 border-b text-center">
                  <FaEye
                    onClick={handleViewClick}
                    className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
                  />
                </td> */}

              <td className="px-6 py-4 border-b text-center flex justify-around">
                <button
                  onClick={handleEditNotification}
                  className="text-blue-500 hover:text-blue-700 transition duration-200"
                >
                  Edit
                </button>
               
               

                <button
                  onClick={() => console.log("Delete:", notification._id)}
                  className="text-red-500 hover:text-red-700 transition duration-200  m-2"
                >
                  <MdDelete   Delete/>

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

export default PushNotifications;

