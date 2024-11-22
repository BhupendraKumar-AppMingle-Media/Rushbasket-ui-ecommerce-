import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
          id: popup.id, // Ensure the ID is captured for edit/delete operations
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
  }, []);

  // Handle Delete Action
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this popup?')) {
      try {
        await axios.delete(`http://localhost:3001/api/popups/${id}`);
        setPopups(popups.filter((popup) => popup.id !== id));
        alert('Popup deleted successfully');
      } catch (error) {
        console.error('Error deleting popup:', error);
        alert('Failed to delete popup');
      }
    }
  };

  // Handle Edit Action
  const handleEdit = () => {
    navigate("/edit-popups");
  };

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-semibold mb-6 text-center">Popups Management</h1> */}

      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Popups</p>
  <p className="inline text-[#EF8120]">Management</p>
  
</h1>


      {/* Navigation Button to Add Popup Form */}
      <div className="mb-4">
        <button
          onClick={() => navigate('/addpopupsform')}
          className="bg-[#172554] text-white px-4 py-2 rounded hover:bg-[#EF8120] font-semibold"
        >
          + New Popup
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr style={{ backgroundColor: '#86C3D7' }}>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Trigger</th>
              <th className="p-3 text-left">Action Button</th>
              <th className="p-3 text-left">Start Time</th>
              <th className="p-3 text-left">End Time</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {popups.length > 0 ? (
              popups.map((popup) => (
                <tr key={popup.id} className="border-b hover:bg-[#fff4ea] transition duration-200">
                  <td className="p-2">{popup.title}</td>
                  <td className="p-2">{popup.message}</td>
                  <td className="p-2">{popup.trigger}</td>
                  <td className="p-2">{popup.actionButton}</td>
                  <td className="p-2">{popup.startTime}</td>
                  <td className="p-2">{popup.endTime}</td>
                  <td className="p-2">
                    <button
                      onClick={handleEdit}
                      className="px-2 py-1 bg-[#172554] text-white rounded hover:bg-[#EF8120] transition duration-200 mr-2"
                    >
                     < FaEdit/>
                    </button>
                    <button
                      onClick={() => handleDelete(popup.id)}
                      className="px-2 py-1 bg-red-400 text-white rounded hover:bg-red-600 transition duration-200"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-2 text-center">No popups available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PopupsManage;
