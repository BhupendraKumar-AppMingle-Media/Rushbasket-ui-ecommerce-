import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdPreview, MdFlag, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ category: "", rating: 0 });
  const [data, setData] = useState([
    {
      category: "Electronics",
      subcategory: "Mobile",
      image: "https://via.placeholder.com/50",
      title: "Smartphone X",
      review: "Great product with excellent battery life! The camera quality is also impressive and performs well in low light.",
      rating: 4.5,
      date: "2024-10-01 14:35",
      status: "Published",
    },
    {
      category: "Fashion",
      subcategory: "Clothing",
      image: "https://via.placeholder.com/50",
      title: "Denim Jacket",
      review: "Nice fit and quality! I wore it during my trip, and it kept me warm in the evenings.",
      rating: 4.0,
      date: "2024-10-05 09:12",
      status: "Pending",
    },
  ]);

  const handlePreviewProduct = (product) => navigate("/preview-review", { state: { product } });
  const handleFlagReview = (product) => navigate("/flag-review", { state: { product } });
  const handleReplyReview = (product) => navigate("/reply-review", { state: { product } });
  const handleEditReview = (product) => navigate("/edit-review", { state: { product } });
  const handleDeleteReview = (index) => setData(data.filter((_, i) => i !== index));

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill().map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars).fill().map((_, i) => (
          <FaStar key={i + fullStars + 1} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="review-main p-4 bg-gray-100">
      <h1 className="text-4xl font-semibold my-5 text-center">Reviews Management</h1>

      <div className="flex items-center space-x-4 mb-6 bg-white p-4 rounded-lg shadow-lg">
        <select
          className="border p-2 rounded-lg w-1/3"
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filter.rating}
          onChange={(e) => setFilter({ ...filter, rating: e.target.value })}
          className="w-1/2"
          style={{ Color: "#172554" }} 
        />
        <span className="text-gray-700">Rating: {filter.rating}</span>
      </div>

      <div className="container mx-auto">
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-3 text-left font-semibold w-24">Category</th>
                <th className="p-3 text-left font-semibold w-28">Subcategory</th>
                <th className="p-3 text-left font-semibold w-20">Image</th>
                <th className="p-3 text-left font-semibold w-32">Title</th>
                <th className="p-3 text-left font-semibold w-80">Review</th>
                <th className="p-3 text-left font-semibold w-24">Rating</th>
                <th className="p-3 text-left font-semibold w-32">Date/Time</th>
                <th className="p-3 text-left font-semibold w-24">Status</th>
                <th className="p-3 text-left font-semibold w-40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{row.category}</td>
                  <td className="p-3">{row.subcategory}</td>
                  <td className="p-3">
                    <img src={row.image} alt={row.title} className="h-12 w-12 rounded-full object-cover" />
                  </td>
                  <td className="p-3">{row.title}</td>
                  <td className="p-3 max-h-24 overflow-y-auto">{row.review}</td>
                  <td className="p-3">
                    <div className="flex">{renderRatingStars(row.rating)}</div>
                  </td>
                  <td className="p-3">{row.date}</td>
                  <td className={`p-3 font-semibold ${row.status === "Published" ? "text-green-600" : "text-red-600"}`}>
                    {row.status}
                  </td>
                  <td className="p-3 flex space-x-2 items-center">
                    <button className="text-blue-500 hover:text-blue-700" onClick={() => handlePreviewProduct(row)}>
                      <MdPreview />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleFlagReview(row)}>
                      <MdFlag />
                    </button>
                    <button className="text-green-500 hover:text-green-700" onClick={() => handleReplyReview(row)}>
                      Reply
                    </button>
                    <button className="text-purple-500 hover:text-purple-700" onClick={() => handleEditReview(row)}>
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteReview(index)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
