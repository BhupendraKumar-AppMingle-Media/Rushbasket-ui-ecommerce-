// // AddNotification.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AddNotification = ({ onClose }) => {
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [targetAudience, setTargetAudience] = useState("All Users");
//   const [scheduleTime, setScheduleTime] = useState("");
//   const [sendInstantly, setSendInstantly] = useState(true);

  
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle the notification submission here

//     // Reset fields and close the form
//     setTitle("");
//     setMessage("");
//     setTargetAudience("All Users");
//     setScheduleTime("");
//     setSendInstantly(true);
//     onClose();
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
//       <h3 className="text-xl font-semibold mb-4">Create New Notification</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
        
//         {/* Title */}
//         <div>
//           <label className="block text-lg font-semibold text-gray-800">Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Notification Title"
//             required
//           />
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block text-lg font-semibold text-gray-800">Message</label>
//           <textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             placeholder="Notification Message"
//             required
//           />
//         </div>

//         {/* Target Audience */}
//         <div>
//           <label className="block text-lg font-semibold text-gray-800">Target Audience</label>
//           <select
//             value={targetAudience}
//             onChange={(e) => setTargetAudience(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           >
//             <option>All Users</option>
//             <option>Active Users</option>
//             <option>Specific User Groups</option>
//           </select>
//         </div>

//         {/* Schedule Notification */}
//         <div>
//           <label className="block text-lg font-semibold text-gray-800">Schedule Notification</label>
//           <div className="flex items-center space-x-4">
//             <input
//               type="datetime-local"
//               value={scheduleTime}
//               onChange={(e) => setScheduleTime(e.target.value)}
//               className="p-2 border border-gray-300 rounded-md"
//               disabled={sendInstantly}
//             />
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={sendInstantly}
//                 onChange={() => setSendInstantly(!sendInstantly)}
//                 className="mr-2"
//               />
//               <label>Send Instantly</label>
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="px-4 py-2  text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
//           style={{ backgroundColor: "#172554" }}  >
//           Send Notification
//         </button>

//         {/* Close Button */}
//         <button
//           type="button"
//           onClick={handleBack}
//           className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-200"
//         >
//           Back
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddNotification;


import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddNotification = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [targetAudience, setTargetAudience] = useState("All Users");
  const [scheduleTime, setScheduleTime] = useState("");
  const [sendInstantly, setSendInstantly] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  // Fetch all notifications on component mount
  useEffect(() => {
    axios.get('http://localhost:3001/pushNotification')
      .then(response => {
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sentTo = targetAudience === "All Users" ? "all" : 
                   targetAudience === "Active Users" ? "active" : "specific";

    const newNotification = {
      title,
      message,
      sentTo,
      link,
      userId: [], // Add specific user IDs if needed
    };

    axios.post('http://localhost:3001/pushNotification', newNotification)
      .then(response => {
        console.log('Notification sent:', response.data);
        setNotifications([...notifications, response.data]);
        setTitle("");
        setMessage("");
        setLink("");
        setTargetAudience("All Users");
        setScheduleTime("");
        setSendInstantly(true);
        onClose();
      })
      .catch(error => {
        console.error('Error sending notification:', error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4">Create New Notification</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-semibold text-gray-800">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Notification Title"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Notification Message"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold text-gray-800">Link</label>
          <textarea
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="provide link here"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800">Target Audience</label>
          <select
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option>All Users</option>
            <option>Active Users</option>
            <option>Specific User Groups</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-800">Schedule Notification</label>
          <div className="flex items-center space-x-4">
            <input
              type="datetime-local"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
              disabled={sendInstantly}
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={sendInstantly}
                onChange={() => setSendInstantly(!sendInstantly)}
                className="mr-2"
              />
              <label>Send Instantly</label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-2  text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
          style={{ backgroundColor: "#172554" }}
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="ml-4 px-4 py-2 bg-[#EF8120] text-white rounded-md shadow-md hover:bg-red-600 transition duration-200"
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default AddNotification;

