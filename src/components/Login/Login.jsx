



import loginimage from '../../assets/loginimage.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();



  const handleLogin = () => {
    // Simulate authentication logic
    if (email === "appmingle@gmail.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true"); // Save login state
      navigate("/"); // Redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Image/Illustration */}
        <div className="flex justify-center mb-5">
          <img
            src={loginimage}
            alt="missing image"
            className="w-56 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Form Section */}
        <form onSubmit={''} className="space-y-4">
         

          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-2 border-gray-300 outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 p-2 border-gray-300 outline-none focus:ring focus:ring-orange-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

