import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CouponEdit = () => {
  const { id } = useParams();
  const [couponCode, setCouponCode] = useState("");
  const [couponName, setCouponName] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [minOrderValue, setMinOrderValue] = useState("");
  const [maxDiscountAmount, setMaxDiscountAmount] = useState("");
  const [usageLimitPerUser, setUsageLimitPerUser] = useState("");
  const [usageLimitGlobal, setUsageLimitGlobal] = useState("");
  const [couponValidityStartDate, setCouponValidityStartDate] = useState("");
  const [couponValidityEndDate, setCouponValidityEndDate] = useState("");
  const [couponCategory, setCouponCategory] = useState("");
  const [customerEligibility, setCustomerEligibility] = useState("");
  const [firstTimeUseBonus, setFirstTimeUseBonus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCouponData = async () => {
      const baseUrl = "http://localhost:3001";
      try {
        const response = await axios.get(`${baseUrl}/coupons/${id}`);
        const data = response.data;

        setCouponCode(data.couponCode);
        setCouponName(data.couponName);
        setDiscountType(data.discountType);
        setDiscountValue(data.discountValue);
        setMinOrderValue(data.minOrderValue);
        setMaxDiscountAmount(data.maxDiscountAmount);
        setUsageLimitPerUser(data.usageLimit.perUser);
        setUsageLimitGlobal(data.usageLimit.global);

        // Format dates to "YYYY-MM-DD" for the date input fields
        setCouponValidityStartDate(
          data.couponValidity?.startDate
            ? new Date(data.couponValidity.startDate)
                .toISOString()
                .split("T")[0]
            : ""
        );
        setCouponValidityEndDate(
          data.couponValidity?.endDate
            ? new Date(data.couponValidity.endDate).toISOString().split("T")[0]
            : ""
        );

        setCouponCategory(data.couponCategory);
        setCustomerEligibility(data.customerEligibility);
        setFirstTimeUseBonus(data.firstTimeUseBonus);
      } catch (error) {
        console.error("Error fetching coupon data:", error);
      }
    };

    fetchCouponData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload with the necessary data
    const payload = {
      couponCode,
      couponName,
      discountType,
      discountValue: Number(discountValue), // Convert to number
      minOrderValue: Number(minOrderValue),
      maxDiscountAmount: Number(maxDiscountAmount),
      usageLimit: {
        perUser: Number(usageLimitPerUser),
        global: Number(usageLimitGlobal),
      },
      couponValidity: {
        startDate: couponValidityStartDate,
        endDate: couponValidityEndDate,
      },
      couponCategory,
      customerEligibility,
      firstTimeUseBonus,
    };

    const baseUrl = "http://localhost:3001";
    console.log(`${baseUrl}/coupons/${id}`);
    try {
      const response = await axios.put(`${baseUrl}/coupons/${id}`, payload);
      console.log("Coupon updated successfully:", response.data);
      alert("Coupon updated successfully!");
      navigate("/coupon-management");
    } catch (error) {
      console.error(
        "Error updating coupon:",
        error.response?.data || error.message
      );
      alert(
        "Error updating coupon: " + (error.response?.data || error.message)
      );
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Edit Coupon</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Coupon Code */}
        <div>
          <label className="block font-semibold text-gray-700">
            Coupon Code
          </label>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter coupon code"
          />
        </div>

        {/* Coupon Name */}
        <div>
          <label className="block font-semibold text-gray-700">
            Coupon Name
          </label>
          <input
            type="text"
            value={couponName}
            onChange={(e) => setCouponName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter coupon name"
          />
        </div>

        {/* Discount Type */}
        <div>
          <label className="block font-semibold text-gray-700">
            Discount Type
          </label>
          <select
            value={discountType}
            onChange={(e) => setDiscountType(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="percentage">Percentage</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        {/* Discount Value */}
        <div>
          <label className="block font-semibold text-gray-700">
            Discount Value
          </label>
          <input
            type="number"
            value={discountValue}
            onChange={(e) => setDiscountValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter discount value"
          />
        </div>

        {/* Minimum Order Value */}
        <div>
          <label className="block font-semibold text-gray-700">
            Minimum Order Value
          </label>
          <input
            type="number"
            value={minOrderValue}
            onChange={(e) => setMinOrderValue(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter minimum order value"
          />
        </div>

        {/* Maximum Discount Amount */}
        <div>
          <label className="block font-semibold text-gray-700">
            Maximum Discount Amount
          </label>
          <input
            type="number"
            value={maxDiscountAmount}
            onChange={(e) => setMaxDiscountAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter maximum discount amount"
          />
        </div>
        {/* Usage Limit per User */}
        <div>
          <label className="block font-semibold text-gray-700">
            Usage Limit per User
          </label>
          <input
            type="number"
            value={usageLimitPerUser}
            onChange={(e) => setUsageLimitPerUser(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter usage limit per user"
          />
        </div>

        {/* Global Usage Limit */}
        <div>
          <label className="block font-semibold text-gray-700">
            Global Usage Limit
          </label>
          <input
            type="number"
            value={usageLimitGlobal}
            onChange={(e) => setUsageLimitGlobal(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter global usage limit"
          />
        </div>

        {/* Coupon Validity Start Date */}
        <div>
          <label className="block font-semibold text-gray-700">
            Coupon Validity Start Date
          </label>
          <input
            type="date"
            value={couponValidityStartDate}
            onChange={(e) => setCouponValidityStartDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Coupon Validity End Date */}
        <div>
          <label className="block font-semibold text-gray-700">
            Coupon Validity End Date
          </label>
          <input
            type="date"
            value={couponValidityEndDate}
            onChange={(e) => setCouponValidityEndDate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Coupon Category */}
        <div>
          <label className="block font-semibold text-gray-700">
            Coupon Category
          </label>
          <input
            type="text"
            value={couponCategory}
            onChange={(e) => setCouponCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter coupon category (e.g., Fruits, Dairy)"
          />
        </div>

        {/* Customer Eligibility */}
        <div>
          <label className="block font-semibold text-gray-700">
            Customer Eligibility
          </label>
          <select
            value={customerEligibility}
            onChange={(e) => setCustomerEligibility(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="all">All Users</option>
            <option value="new">New Users</option>
            <option value="returning">Returning Users</option>
          </select>
        </div>

        {/* First-Time Use Bonus */}
        <div>
          <label className="block font-semibold text-gray-700">
            First-Time Use Bonus
          </label>
          <input
            type="checkbox"
            checked={firstTimeUseBonus}
            onChange={(e) => setFirstTimeUseBonus(e.target.checked)}
            className="mr-2 leading-tight"
          />
          <span className="text-gray-700">Apply only on the first order</span>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-[#017CF9] text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out shadow-md"
          >
            Save
          </button>
          <button
            type="button"
            className="bg-[#6B777A] text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out shadow-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponEdit;
