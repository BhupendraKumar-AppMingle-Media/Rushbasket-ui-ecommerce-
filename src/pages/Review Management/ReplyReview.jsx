import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReplyReview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  
  const [reply, setReply] = useState("");

  const handleReplySubmit = () => {
    // Mock action: console log the reply and navigate back (or integrate with backend API)
    console.log(`Reply for ${product.title}: ${reply}`);
    // Navigate back to the reviews page after submission
    navigate("/reviews");
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Reply to Review</h2>

      {product ? (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium mb-2">{product.title}</h3>
          <p className="mb-4 text-gray-700"><strong>Review:</strong> {product.review}</p>

          <textarea
            className="w-full h-32 p-2 border rounded-lg resize-none mb-4"
            placeholder="Write your reply here..."
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          ></textarea>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleReplySubmit}
          >
            Submit Reply
          </button>
        </div>
      ) : (
        <p className="text-red-500">No review selected.</p>
      )}
    </div>
  );
};

export default ReplyReview;
