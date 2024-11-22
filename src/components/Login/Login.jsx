import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import loginimage from '../../assets/loginimage.png';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Phone Number:', phoneNumber);
    
    // Add any validation logic for phone number here if necessary
    if (phoneNumber) {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
          method: 'POST', // Specify POST method
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ phoneNumber }), 
          body: JSON.stringify({ mobile }), 
        });

        console.log(response.data);


        if (response.ok) {

          // Successfully sent OTP
          console.log('OTP sent successfully');
          // Navigate to the verification page
          navigate('/verificationadmin');
        } else {
          // Handle errors (e.g., display a message)
          const errorData = await response.json();
          alert(errorData.message || 'Error sending OTP');
        }
      } catch (error) {
        
        console.error('Error:', error);
        alert('An error occurred while sending the OTP. Please try again.');
      }
    } else {
      // Handle error (e.g., display a message that phone number is required)
      alert('Please enter a phone number');
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
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Phone Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
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
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
          >
            Next
          </button>

          {/* Divider */}
          {/* <div className="relative text-center text-gray-400">
            <span className="bg-white px-2">or login with</span>
            <div className="absolute inset-x-0 top-1/2 border-t border-gray-300"></div>
          </div> */}

          {/* Google Sign-in Button */}
          {/* <button
            type="button"
            className="w-full flex justify-center items-center bg-white border border-gray-300 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Sign in with Google
          </button> */}


        </form>
      </div>
    </div>
  );
};

export default Login;





////

// import React, { useState } from 'react';
// import { FaGoogle } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
// import loginimage from '../../assets/loginimage.png'


// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Phone Number:', phoneNumber);
    
//     // Add any validation logic for phone number here if necessary
//     if (phoneNumber) {
//       // Navigate to the verificationadmin path


    



//       navigate('/verificationadmin');
//     } else {
//       // Handle error (e.g., display a message that phone number is required)
//       alert('Please enter a phone number');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
//         {/* Image/Illustration */}
//         <div className="flex justify-center mb-5">
//           <img
//             src={loginimage}
//             alt="missing image"
//             className="w-56 h-auto"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//         {/* Form Section */}
//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Phone Input */}
//           <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
//             <div className="flex items-center bg-gray-200 p-2">
//               <img
//                 src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png"
//                 alt="India Flag"
//                 className="w-6 h-4"
//               />
//               <span className="ml-2 text-gray-700">+91</span>
//             </div>
//             <input
//               type="tel"
//               placeholder="Your Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="flex-1 p-2 border-l border-gray-300 outline-none focus:ring focus:ring-orange-500"
//             />
//           </div>

//           {/* Next Button */}
//           <button
//             type="submit"
//             className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
//           >
//             Next
//           </button>

//           {/* Divider */}
//           <div className="relative text-center text-gray-400">
//             <span className="bg-white px-2">or login with</span>
//             <div className="absolute inset-x-0 top-1/2 border-t border-gray-300"></div>
//           </div>

//           {/* Google Sign-in Button */}
//           <button
//             type="button"
//             className="w-full flex justify-center items-center bg-white border border-gray-300 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition duration-300"
//           >
//             <FaGoogle className="mr-2" /> Sign in with Google
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
