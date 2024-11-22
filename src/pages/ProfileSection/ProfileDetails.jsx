import { useLocation, useNavigate } from 'react-router-dom';

const ProfileDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { profileData } = location.state || {};

  const handleEdit = () => {
    // Navigate back to Profile page with profile data for editing
    navigate('/profile-edit', { state: { profileData } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Profile Details</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Field</th>
            <th className="py-2 px-4 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b"><strong>Email</strong></td>
            <td className="py-2 px-4 border-b">{profileData.email}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b"><strong>Phone Number</strong></td>
            <td className="py-2 px-4 border-b">{profileData.phone}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleEdit}
          className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-orange-700"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
