import React from "react";
import { Link } from "react-router-dom";
import { MdPreview } from "react-icons/md";
import OrderNavBtns from "./OrderNavBtns.jsx";
import { ImForward } from "react-icons/im";
const FulfilledOrder = () => {
  const data = [
    {
      orderId: "ORD12345",
      created: "2024-10-20 14:35",
      customerName: "John Doe",
      paymentStatus: "Paid",
      totalAmount: "$120",
      status: "Active",
    },
    {
      orderId: "ORD12346",
      created: "2024-10-21 15:10",
      customerName: "Jane Smith",
      paymentStatus: "Paid",
      totalAmount: "$90",
      status: "Active",
    },
    // Add more mock orders as needed
    {
      orderId: "ORD12346",
      created: "2024-10-21 15:10",
      customerName: "Jane Smith",
      paymentStatus: "Paid",
      totalAmount: "$90",
      status: "Active",
    },
    {
      orderId: "ORD12346",
      created: "2024-10-21 15:10",
      customerName: "Jane Smith",
      paymentStatus: "Paid",
      totalAmount: "$90",
      status: "Active",
    },
    {
      orderId: "ORD12346",
      created: "2024-10-21 15:10",
      customerName: "Jane Smith",
      paymentStatus: "Paid",
      totalAmount: "$90",
      status: "Active",
    },
    {
      orderId: "ORD12346",
      created: "2024-10-21 15:10",
      customerName: "Jane Smith",
      paymentStatus: "Paid",
      totalAmount: "$90",
      status: "Active",
    },
  ];

  return (
    <>
      <OrderNavBtns />
      <div>
        <h1 className="text-4xl font-semibold my-5 text-center">Fulfilled  Order</h1>

        <div className="container mx-auto p-4">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">Order ID</th>
                  <th className="p-2 text-left">Created (Date/Time)</th>
                  <th className="p-2 text-left">Customer Name</th>
                  <th className="p-2 text-left">Payment Status</th>
                  <th className="p-2 text-left">Total Amount</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order, index) => (
                  <tr key={index} className="border-b hover:bg-gray-300 transition">
                    <td className="p-2">{order.orderId}</td>
                    <td className="p-2">{order.created}</td>
                    <td className="p-2">{order.customerName}</td>
                    <td className="p-2">{order.paymentStatus}</td>
                    <td className="p-2">{order.totalAmount}</td>
                    <td className="p-2">{order.status}</td>
                    <td className="p-2 text-center text-2xl">
                      <Link to="/order-preview">
                        <ImForward className="cursor-pointer  hover:text-blue-700" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FulfilledOrder;
