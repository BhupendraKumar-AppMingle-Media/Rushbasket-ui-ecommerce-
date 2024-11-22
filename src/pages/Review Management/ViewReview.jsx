import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ViewReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  // Sample delivery person details
  const deliveryPerson = {
    name: "John Doe",
    rating: 4.2,
    review: "The delivery was smooth, and the person was very polite and on time.",
    image: "https://via.placeholder.com/50", // Placeholder image
  };

  // Function to render stars
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaStar key={i + fullStars + 1} className="text-gray-300" />
          ))}
      </>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Review Details</h2>

      <div className="flex gap-10">
        {/* Product Review Section */}
        <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Product Review</h3>
          {product ? (
            <>
              <img src={product.image} alt={product.title} className="h-24 w-24 object-cover mb-4" />
              <p className="font-semibold text-lg mb-2">{product.title}</p>
              <p className="text-gray-600"><strong>Category:</strong> {product.category}</p>
              <p className="text-gray-600"><strong>Subcategory:</strong> {product.subcategory}</p>
              <p className="text-gray-700 mt-4"><strong>Review:</strong> {product.review}</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2">Rating:</span>
                {renderRatingStars(product.rating)}
              </div>
            </>
          ) : (
            <p className="text-red-500">No product selected.</p>
          )}
        </div>

        {/* Delivery Person Review Section */}
        <div className="w-1/2 bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Delivery Person Review</h3>
          <div className="flex items-center gap-4 mb-4">
            <img src={deliveryPerson.image} alt={deliveryPerson.name} className="h-24 w-24 rounded-full object-cover" />
            <p className="font-semibold text-lg">{deliveryPerson.name}</p>
          </div>
          <p className="text-gray-700"><strong>Review:</strong> {deliveryPerson.review}</p>
          <div className="mt-4 flex items-center">
            <span className="mr-2">Rating:</span>
            {renderRatingStars(deliveryPerson.rating)}
          </div>
        </div>
      </div>

      <button
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={() => navigate("/reviews")}
      >
        Back to Reviews
      </button>
    </div>
  );
};

export default ViewReview;
