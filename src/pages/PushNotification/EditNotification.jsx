import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EditNotification = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [targetAudience, setTargetAudience] = useState("All Users");
  const [scheduleTime, setScheduleTime] = useState("");
  const [sendInstantly, setSendInstantly] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams(); // Assume the ID of the notification is passed as a route parameter

  useEffect(() => {
    // Fetch notification details by ID
    axios.get(`http://localhost:3001/pushNotification/${id}`)
      .then((response) => {
        const { title, message, link, sentTo, scheduleTime } = response.data;
        setTitle(title);
        setMessage(message);
        setLink(link);
        setTargetAudience(
          sentTo === "all" ? "All Users" :
          sentTo === "active" ? "Active Users" :
          "Specific User Groups"
        );
        setScheduleTime(scheduleTime || "");
        setSendInstantly(!scheduleTime); // If scheduleTime exists, disable instant sending
      })
      .catch((error) => {
        console.error("Error fetching notification details:", error);
      });
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sentTo = targetAudience === "All Users" ? "all" :
                   targetAudience === "Active Users" ? "active" : "specific";

    const updatedNotification = {
      title,
      message,
      sentTo,
      link,
      scheduleTime: sendInstantly ? null : scheduleTime,
    };

    axios.put(`http://localhost:3001/pushNotification/${id}`, updatedNotification)
      .then(() => {
        console.log("Notification updated successfully");
        navigate("/push-notifications"); // Navigate back to notifications list
      })
      .catch((error) => {
        console.error("Error updating notification:", error);
      });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      {/* <h3 className="text-xl font-semibold mb-4">Edit Notification</h3> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Edit</p>
  <p className="inline text-[#EF8120]">Notification</p>
  
</h1>

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
            placeholder="Provide link here"
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
          className="px-4 py-2 text-white rounded-md shadow-md hover:bg-green-600 transition duration-200"
          style={{ backgroundColor: "#172554" }}
        >
          Update
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

export default EditNotification;
