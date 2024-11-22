// EditProfile.js
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProfileEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
  
    const { profileData } = location.state || {};
    const [profileImage, setProfileImage] = useState(profileData?.profileImage || null);
    const [formData, setFormData] = useState({
      email: '',
      phone: '',
      
    });
    const [errors, setErrors] = useState({});
  
    useEffect(() => {
      if (profileData) {
        setFormData(profileData);
      }
    }, [profileData]);

    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        setProfileImage(URL.createObjectURL(file));
      } else {
        alert("Please upload a valid image file.");
      }
    };

    const validateForm = () => {
      const newErrors = {};
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Valid phone number required";
      if (!formData.pincode || formData.pincode.length !== 6) newErrors.pincode = "Pincode should be 6 digits";
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });  // Clear error for the updated field
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        navigate('/profile-details', { state: { profileData: formData } });
      }
    };
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-6xl text-white">👤</span>
              )}
            </div>
            <div
              className="absolute bottom-0 right-2 bg-blue-900 text-white w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <span className="text-xl font-bold">+</span>
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
          <h1>Company Name</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-orange-300 rounded-md focus:outline-none focus:border-orange-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4 flex items-center">
            <div className="flex items-center px-3 py-2 border border-orange-300 rounded-l-md">
              <img src="https://flagcdn.com/w20/in.png" alt="IN flag" className="w-5 h-5 mr-2" />
              <span>+91</span>
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              pattern="\d{10}"
              maxLength="10"
              className="w-full px-3 py-2 border border-orange-300 rounded-r-md focus:outline-none focus:border-orange-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

         

          <div className="flex justify-between">
            <button
              type="button"
              className="px-5 py-2 border border-gray-400 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => navigate('/profile-details')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
};
export default ProfileEdit;
