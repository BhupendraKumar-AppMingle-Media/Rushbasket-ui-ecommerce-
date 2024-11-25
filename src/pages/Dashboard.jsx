import { useState } from "react";
import {
  PieChart,
  Pie,
  LineChart,
  CartesianGrid,
  Line,
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaMoneyBill } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { PiClockClockwiseFill } from "react-icons/pi";

const ordersData = [
  { id: "12345", method: "Credit Card", date: "2024-10-21 10:30 AM", delivery: "2024-10-23", status: "Processing", amount: 50 },
  { id: "12346", method: "PayPal", date: "2024-10-20 9:15 AM", delivery: "2024-10-22", status: "Delivered", amount: 120 },
  { id: "12347", method: "Bank Transfer", date: "2024-10-19 2:45 PM", delivery: "2024-10-21", status: "Cancelled", amount: 0 },
];

const chartData = [
  { name: "Pending", value: 20 },
  { name: "Processing", value: 15 },
  { name: "Delivered", value: 40 },
];

const feedback = [
  { id: 1, customer: "John Doe", rating: 5, review: "Excellent product!" },
  { id: 2, customer: "Jane Smith", rating: 4, review: "Good quality, fast delivery!" },
  { id: 3, customer: "Bob Brown", rating: 3, review: "Average experience." },
];


const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6000 },
];

const topProducts = [
  {
    id: 1,
    name: "Wireless Earbuds",
    sales: 120,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    name: "Smartphone",
    sales: 100,
    image: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Gaming Console",
    sales: 80,
    image: "https://via.placeholder.com/50",
  },
];

const Dashboard = () => {
  const [filter, setFilter] = useState("");

  const filteredOrders = filter
    ? ordersData.filter((order) => order.status === filter)
    : ordersData;


    //
    

  return (
    <div className="p-6 bg-gray-100 min-h-screen  ">
      {/* <h1 className="text-4xl font-bold mb-6 text-center">   <p className="inline  bg-{#172554}"> Rush</p>  <p className="inline "> Baskets</p></h1> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Rush</p>
  <p className="inline text-[#EF8120]">Baskets</p>
  
</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="flex justify-between bg-yellow-400 p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Pending Orders</h3>
            <p className="text-2xl font-bold">200</p>
          </div>
          <PiClockClockwiseFill className="text-4xl" />
        </div>
        <div className="flex justify-between bg-red-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Cancelled Orders</h3>
            <p className="text-2xl font-bold">50</p>
          </div>
          <ImCancelCircle className="text-3xl" />
        </div>
        <div className="flex justify-between bg-blue-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Processing Orders</h3>
            <p className="text-2xl font-bold">300</p>
          </div>
          <FaRotate className="text-3xl" />
        </div>
        <div className="flex justify-between bg-green-500 text-white p-6 rounded-lg text-center shadow-lg">
          <div>
            <h3 className="text-lg font-semibold mb-2">Total Income</h3>
            <p className="text-2xl font-bold">120000</p>
          </div>
          <FaMoneyBill className="text-4xl" />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6"
       >
        {/* Pie Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6"
        //  style={{backgroundColor:'#b0d8e5'}}
         >
          <h2 className="text-lg font-semibold mb-4">Order Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                fill="#86c3d7"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6"
        // style={{backgroundColor:'#b0d8e5'}}
        >
          <h2 className="text-lg font-semibold mb-4">Sales Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#86c3d7" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white shadow-lg rounded-lg p-6"
      style={{backgroundColor:'#86c3d7'}}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <select
            className="p-2 border border-gray-300 rounded-lg"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="">All Orders</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>




         {/* Revenue Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="orange" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Selling Products */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <img src={product.image} alt={product.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="text-md font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">Sales: {product.sales}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-lg font-semibold mb-4">Customer Feedback</h2>
        <div className="space-y-4">
          {feedback.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-50 rounded-lg shadow-md"
            >
              <h3 className="text-md font-semibold">{item.customer}</h3>
              <p className="text-sm text-gray-500">Rating: {item.rating} / 5</p>
              <p className="text-sm">{item.review}</p>
            </div>
          ))}
        </div>
      </div>






        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50"
            style={{backgroundColor:'#b0d8e5'}}>
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium  uppercase">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium  uppercase">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium  uppercase">
                  Delivery Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium  uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium  uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">{order.method}</td>
                  <td className="px-6 py-4">{order.date}</td>
                  <td className="px-6 py-4">{order.delivery}</td>
                  <td className="px-6 py-4">{order.status}</td>
                  <td className="px-6 py-4">${order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
