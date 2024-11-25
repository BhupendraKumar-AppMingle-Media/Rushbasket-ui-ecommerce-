



import loginimage from '../../assets/loginimage.png';
import { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          {/* Phone Input */}
          {/* <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <div className="flex items-center bg-gray-200 p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png"
                alt="India Flag"
                className="w-6 h-4"
              />
              <span className="ml-2 text-gray-700">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 p-2 border-l border-gray-300 outline-none focus:ring focus:ring-orange-500"
            />
          </div> */}

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

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

