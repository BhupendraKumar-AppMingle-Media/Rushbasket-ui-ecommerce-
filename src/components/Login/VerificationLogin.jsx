import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import otplogin from '../../assets/otpimage.png';

const VerificationLogin = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigate = useNavigate();
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  // Function to handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value.slice(-1); // Take only the last entered character
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus to the next input if the current one is filled
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  // Function to handle OTP verification
  const handleVerify = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      console.log('OTP entered:', enteredOtp);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/verify-otp`, {
          method: 'POST', // Specify POST method
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ otp: enteredOtp }), // Send OTP as JSON
        });

        if (response.ok) {
          // Successfully verified OTP
          console.log('OTP verified successfully');
          navigate('/'); // Redirect to dashboard or desired path
        } else {
          // Handle errors (e.g., display a message)
          const errorData = await response.json();
          alert(errorData.message || 'Error verifying OTP');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while verifying the OTP. Please try again.');
      }
    } else {
      alert('Please enter the 4-digit OTP code.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        {/* Image/Illustration */}
        <div className="flex justify-center mb-6">
          <img
            src={otplogin}
            alt="OTP Verification Illustration"
            className="w-52 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">Phone Verification</h2>
        <p className="text-center text-gray-600 mb-6">Enter your OTP code</p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center space-x-2 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              ref={inputRefs[index]}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace' && !value && index > 0) {
                  inputRefs[index - 1].current.focus();
                }
              }}
            />
          ))}
        </div>

        {/* Resend Code */}
        <div className="text-center text-gray-500 mb-6">
          <p>Didn’t receive Code? <a href="#" className="text-blue-600">Resend again</a></p>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerificationLogin;






///


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
// import otplogin from '../../assets/otpimage.png'

// const VerificationLogin = () => {
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   // Function to handle OTP verification
//   const handleVerify = () => {
//     // Logic to verify OTP can be added here
//     if (otp.length === 4) {
//       console.log('OTP entered:', otp);
//       // Redirect after verification (add your desired path)
//       navigate('/');
//     } else {
//       alert('Please enter the 4-digit OTP code.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
//         {/* Image/Illustration */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={otplogin}
//             alt="OTP Verification Illustration"
//             className="w-52 h-auto"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center mb-4">Phone Verification</h2>
//         <p className="text-center text-gray-600 mb-6">Enter your OTP code</p>

//         {/* OTP Input Boxes */}
//         <div className="flex justify-center space-x-2 mb-4">
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
//             onChange={(e) => setOtp(otp.slice(0, 3) + e.target.value)}
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
//             onChange={(e) => setOtp(otp.slice(0, 1) + e.target.value + otp.slice(2))}
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
//             onChange={(e) => setOtp(otp.slice(0, 2) + e.target.value + otp.slice(3))}
//           />
//           <input
//             type="text"
//             maxLength="1"
//             className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:ring focus:ring-orange-500"
//             onChange={(e) => setOtp(otp.slice(0, 3) + e.target.value)}
//           />
//         </div>

//         {/* Resend Code */}
//         <div className="text-center text-gray-500 mb-6">
//           <p>Didn’t receive Code? <a href="#" className="text-blue-600">Resend again</a></p>
//         </div>

//         {/* Verify Button */}
//         <button
//           onClick={handleVerify}
//           className="w-full bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300"
//         >
//           Verify
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VerificationLogin;


