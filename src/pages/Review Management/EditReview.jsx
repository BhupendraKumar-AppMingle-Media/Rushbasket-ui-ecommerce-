import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const EditReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state || {}; // Get the product details passed from the previous page

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [status, setStatus] = useState("Published");

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setReview(product.review);
      setRating(product.rating);
      setStatus(product.status);
    }
  }, [product]);

  const handleSave = () => {
    // Logic to save the edited review (e.g., API call)
    console.log("Review edited:", { title, review, rating, status });
    navigate("/reviews"); // Navigate back to the reviews page after saving
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500 cursor-pointer" onClick={() => setRating(i + 1)} />
          ))}
        {halfStar && (
          <FaStarHalfAlt
            className="text-yellow-500 cursor-pointer"
            onClick={() => setRating(fullStars + 0.5)}
          />
        )}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i + fullStars + 1} className="text-gray-300 cursor-pointer" onClick={() => setRating(fullStars + (halfStar ? 0.5 : 0) + i + 1)} />
          ))}
      </>
    );
  };

  return (
    <div className="edit-review-container">
      <h1 className="text-3xl font-semibold my-5 text-center">Edit Review</h1>

      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded-lg"
              placeholder="Enter review title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Review</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border p-2 w-full rounded-lg"
              rows="4"
              placeholder="Write your review here..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Rating</label>
            <div className="flex">
              {renderRatingStars(rating)}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 w-full rounded-lg"
            >
              <option value="Published">Published</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
            <button
              onClick={() => navigate("/reviews")}
              className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditReview;
