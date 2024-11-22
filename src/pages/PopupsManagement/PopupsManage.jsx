import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddPopupsForm from './AddPopupsForm'; // Adjust the import path as necessary

const PopupsManage = () => {
  const [popups, setPopups] = useState([]);
  const navigate = useNavigate();

  // Fetch popups data from the backend API
  useEffect(() => {
    const fetchPopups = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/popups');
        
        // Accessing the popups array from the response
        const transformedPopups = response.data.popups.map((popup) => ({
          title: popup.title,
          message: popup.message,
          trigger: popup.trigger,
          actionButton: popup.actionButton,
          startTime: new Date(popup.startTime).toLocaleString(), // Formatting dates for display
          endTime: new Date(popup.endTime).toLocaleString(),
        }));
        
        setPopups(transformedPopups);
      } catch (error) {
        console.error('Error fetching popups:', error);
        alert('Failed to fetch popups');
      }
    };

    fetchPopups();
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Popups Management</h1>

      {/* Navigation Button to Add Popup Form */}
      <div className="mb-4">
        <button
          onClick={() => navigate('/addpopupsform')}
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          style={{ backgroundColor: '#172554' }}
        >
          + Add New Popup
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Popups List</h2>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className=""
            style={{backgroundColor:'#86C3D7'}}
            >
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Message</th>
              <th className="p-2 text-left">Trigger</th>
              <th className="p-2 text-left">Action Button</th>
              <th className="p-2 text-left">Start Time</th>
              <th className="p-2 text-left">End Time</th>
            </tr>
          </thead>
          <tbody>
            {popups.length > 0 ? (
              popups.map((popup, index) => (
                <tr key={index} className="border-b hover:bg-gray-300 transition">
                  <td className="p-2">{popup.title}</td>
                  <td className="p-2">{popup.message}</td>
                  <td className="p-2">{popup.trigger}</td>
                  <td className="p-2">{popup.actionButton}</td>
                  <td className="p-2">{popup.startTime}</td>
                  <td className="p-2">{popup.endTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-2 text-center">No popups available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopupsManage;
