import React, { useState } from "react";
import { FaFlag, FaCheckCircle } from "react-icons/fa"; // Flag and check icons
import { MdPreview } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FlagReview = () => {
  const navigate = useNavigate();

  // Sample review data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      product: "Product 1",
      reviewText: "Great product, but the delivery was slow.",
      rating: 4,
      flagged: false,
    },
    {
      id: 2,
      product: "Product 2",
      reviewText: "This product was broken when it arrived.",
      rating: 1,
      flagged: false,
    },
    // Add more reviews as needed
  ]);

  // Handle the flagging action
  const handleFlagReview = (reviewId) => {
    setReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === reviewId ? { ...review, flagged: !review.flagged } : review
      )
    );
  };

  const PreviewProduct = (product) => {
    navigate("/preview", { state: { product } });
  };

  return (
    <div className="flag-review-main">
      <h1 className="text-4xl font-semibold my-5">Manage Reviews</h1>

      <div className="container mx-auto p-4">
        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto w-full bg-white border-collapse shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Product</th>
                <th className="p-2 text-left">Review</th>
                <th className="p-2 text-left">Rating</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review.id}
                  className={`border-b ${
                    review.flagged ? "bg-red-100 border-red-500" : ""
                  }`}
                >
                  <td className="p-2">{review.product}</td>
                  <td className="p-2">{review.reviewText}</td>
                  <td className="p-2 text-2xl">
                    {Array(Math.floor(review.rating))
                      .fill()
                      .map((_, i) => (
                        <FaCheckCircle key={i} className="text-yellow-500" />
                      ))}
                  </td>
                  <td className="p-2 flex items-center space-x-4">
                    <MdPreview
                      className="cursor-pointer"
                      onClick={() => PreviewProduct(review.product)}
                    />
                    <button
                      onClick={() => handleFlagReview(review.id)}
                      className={`p-2 rounded-full ${
                        review.flagged ? "text-red-500" : "text-gray-500"
                      }`}
                      title={review.flagged ? "Unflag Review" : "Flag as Inappropriate"}
                    >
                      <FaFlag />
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

export default FlagReview;
