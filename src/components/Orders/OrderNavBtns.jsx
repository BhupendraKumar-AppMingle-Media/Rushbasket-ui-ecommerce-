import React from "react";
import { Link } from "react-router-dom";
import { BiSolidBell } from "react-icons/bi"; // Icon for Active Orders
import { AiOutlineHourglass } from "react-icons/ai"; // Icon for Pending Orders
import { MdCancel } from "react-icons/md"; // Icon for Cancelled Orders
import { FaCheckCircle } from "react-icons/fa"; // Icon for Fulfilled Orders

// Mock data, you can replace these with actual API calls or props later if needed
const mockData = {
  activeUsers: 150,
  pendingOrders: 20,
  cancelledOrders: 5,
  fulfilledOrders: 60,
};

const OrderNavBtns = () => {
  return (
    <div className="p-4 bg-gray-100" >
      {/* Cards Section */}
      <div className="grid grid-cols-4 gap-2 mb-4" > {/* Reduced gap between cards */}
        <div className=" text-white p-1.5 rounded-lg shadow-md flex justify-between items-center"  style={{ backgroundColor: "#5ca7ff" }}> {/* Reduced padding */}
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold">Active Orders</h3> {/* Reduced text size */}
            <p className="text-2xl mt-0.5">{mockData.activeUsers}</p> {/* Reduced margin */}
          </div>
          <BiSolidBell className="text-4xl" /> {/* Reduced icon size */}
        </div>
        <div className=" text-white p-2 rounded-lg shadow-md flex justify-between items-center"  style={{ backgroundColor: "#ffc168" }}>
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold">Pending Orders</h3>
            <p className="text-2xl mt-1">{mockData.pendingOrders}</p>
          </div>
          <AiOutlineHourglass className="text-4xl" />
        </div>
        <div className=" text-white p-2 rounded-lg shadow-md flex justify-between items-center" style={{ backgroundColor: "#ff6f87" }}>
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold">Cancelled Orders</h3>
            <p className="text-2xl mt-1">{mockData.cancelledOrders}</p>
          </div>
          <MdCancel className="text-4xl" />
        </div>
        <div className=" text-white p-2 rounded-lg shadow-md flex justify-between items-center" style={{ backgroundColor: "#44dcbe" }}>
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold">Fulfilled Orders</h3>
            <p className="text-2xl mt-1">{mockData.fulfilledOrders}</p>
          </div>
          <FaCheckCircle className="text-4xl" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/order-active"
          className="  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          // style={{ backgroundColor: "#172554" }}
        >
          Active Orders
        </Link>
        <Link
          to="/order-history"
          className=" bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          // style={{ backgroundColor: "#172554" }}
        >
          Fulfilled Orders
        </Link>
        <Link
          to="/order-pending"
          className=" bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
          // style={{ backgroundColor: "#172554" }}
        >
          Pending Orders
        </Link>
        <Link
          to="/order-cancel"
          className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          // style={{ backgroundColor: "#172554" }}
        >
          Canceled Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderNavBtns;
