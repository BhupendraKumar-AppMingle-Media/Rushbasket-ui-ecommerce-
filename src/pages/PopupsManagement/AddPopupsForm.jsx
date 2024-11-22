import { useState } from 'react';
import axios from 'axios';

const AddPopupsForm = ({ onAddPopup }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [actionButton, setActionButton] = useState('');
  const [link, setLinkButton] = useState('');
  const [trigger, setTrigger] = useState('first_open');
  const [duration, setDuration] = useState(5); // in seconds
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleCreatePopup = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('message', message);
    if (image) formData.append('image', image); // Append image only if it's selected
    formData.append('actionButton', actionButton);
    formData.append('link', link);  //habdle this from backend also pending 
    formData.append('trigger', trigger);
    formData.append('duration', duration);
    formData.append('startTime', startTime);
    formData.append('endTime', endTime);

    try {
      // Make POST request to API using Axios
      const response = await axios.post('http://localhost:3001/api/popups', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Call the passed function to add the popup (optional callback)
      if (onAddPopup) {
        onAddPopup(response.data);
      }

      // Reset form
      setTitle('');
      setMessage('');
      setImage(null);
      setActionButton('');
      setLinkButton('');
      setTrigger('first_open');
      setDuration(5);
      setStartTime('');
      setEndTime('');

      alert('Popup created successfully');
    } catch (error) {
      console.error('Failed to create popup', error);
      alert('Failed to create popup');
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-3xl font-semibold mb-4 text-center"> New Popup</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            className="border rounded-lg w-full p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            className="border rounded-lg w-full p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image (Optional)</label>
          <input
            type="file"
            className="border rounded-lg w-full p-2"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Action Button</label>
          <input
            type="text"
            className="border rounded-lg w-full p-2"
            value={actionButton}
            onChange={(e) => setActionButton(e.target.value)}
            placeholder="e.g., Shop Now"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Link</label>
          <input
            type="text"
            className="border rounded-lg w-full p-2"
            value={link}
            onChange={(e) => setLinkButton(e.target.value)}
            placeholder="provide link here..."
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Display Trigger</label>
          <select
            className="border rounded-lg w-full p-2"
            value={trigger}
            onChange={(e) => setTrigger(e.target.value)}
          >
            <option value="first_open">First App Open</option>
            <option value="specific_page">Specific Page Load</option>
            <option value="time_based">Time-Based</option>
          </select>
        </div>

        {trigger === 'time_based' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Time (in seconds)</label>
            <input
              type="number"
              className="border rounded-lg w-full p-2"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              min="1"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Start Time</label>
          <input
            type="datetime-local"
            className="border rounded-lg w-full p-2"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">End Time</label>
          <input
            type="datetime-local"
            className="border rounded-lg w-full p-2"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <button
          type="button"
          className=" text-white rounded-lg px-4 py-2  font-semibold hover:bg-[rgb(239,129,32)]"
          onClick={handleCreatePopup}
          style={{ backgroundColor: '#172554' }}
        >
          Create Popup
        </button>
      </form>
    </div>
  );
};

export default AddPopupsForm;
