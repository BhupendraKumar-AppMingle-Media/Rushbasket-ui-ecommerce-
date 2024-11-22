import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const CouponList = () => {
  const [couponList, setCouponList] = useState([]);
  const navigate = useNavigate();

  const handleTableData = () => {
    const url = "http://localhost:3001/coupons";
    axios
      .get(url)
      .then((resp) => setCouponList(resp.data))
      .catch((error) => console.log("Coupon list not received", error));
  };

  useEffect(() => {
    handleTableData();
  }, []);

  const toggleStatus = (index) => {
    const updatedCoupons = [...couponList];
    const currentStatus = updatedCoupons[index].status;
    updatedCoupons[index].status =
      currentStatus === "Active" ? "Disabled" : "Active";
    setCouponList(updatedCoupons);
    // Optional: add a backend call to save the updated status.
  };

  const deleteCoupon = (id) => {
    axios
      .delete(`http://localhost:3001/coupons/${id}`)
      .then(() => handleTableData())
      .catch((error) => console.log("Coupon deletion failed", error));
  };

  return (
    <div className="max-w-7xl mx-auto p-5 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between mt-8 mb-6">
        <h2 className="text-2xl font-bold ">Coupon Management</h2>
        <Link
          to="/coupon-form"
          className="text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out shadow-md"
          style={{ backgroundColor: "#172552" }}
        >
          Create New Coupon
        </Link>
      </div>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-200"
        style={{backgroundColor:'#86C3D7'}}>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Coupon Code
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Coupon Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Discount Type
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Discount Value
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Usage Count
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              Start Date
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold ">
              End Date
            </th>

            <th className="px-4 py-3 text-left text-sm font-bold ">
              Status
            </th>
            <th className="px-4 py-3 text-center text-sm font-bold ">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {couponList.map((coupon, index) => (
            <tr key={coupon._id} className="hover:bg-[#fff4ea] transition">
              <td className="px-4 py-3 text-sm ">
                {coupon.couponCode}
              </td>
              <td className="px-4 py-3 text-sm ">
                {coupon.couponName}
              </td>
              <td className="px-4 py-3 text-sm ">
                {coupon.discountType}
              </td>
              <td className="px-4 py-3 text-sm ">
                {coupon.discountValue}
              </td>
              <td className="px-4 py-3 text-sm ">
                {coupon.inOrderValue || 0}
              </td>
              <td className="px-4 py-3 text-sm">
                {coupon.couponValidity.startDate
                  ? new Date(
                      coupon.couponValidity.startDate
                    ).toLocaleDateString()
                  : "-"}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">
                {coupon.couponValidity.endDate
                  ? new Date(coupon.couponValidity.endDate).toLocaleDateString()
                  : "-"}
              </td>

              <td className="px-4 py-3 text-sm text-gray-700">
                {coupon.status}
              </td>
              <td className="flex justify-evenly items-center px-4 py-3 text-center text-sm text-gray-700">
                <button
                  onClick={() => toggleStatus(index)}
                  className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition duration-200 mr-2"
                >
                  {coupon.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                <Link
                  to={`/edit-coupon/${coupon._id}`}
                  className="transition duration-200"
                >
                  <TiEdit
                    className="text-lg rounded text-gray-950 hover:bg-slate-50 transition duration-200"
                    onClick={(id) => navigate(`/edit-coupon/${_id}`)}
                  />
                </Link>
                <MdDelete
                  onClick={() => deleteCoupon(coupon._id)}
                  className="text-lg rounded text-gray-950 hover:bg-lightgrey-600 transition duration-200"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponList;
