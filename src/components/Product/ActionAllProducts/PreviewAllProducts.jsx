import  { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import logo1 from "../../../assets/onion.png";

const PreviewAllProducts = () => {
  const { id } = useParams(); // Get the product ID from URL parameters
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/addproduct/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#172554" }}>
        Product Preview
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-800">Product Name</label>
            <p className="text-gray-600">{product.productName}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Category</label>
            <p className="text-gray-600">{product.category || "N/A"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Subcategory</label>
            <p className="text-gray-600">{product.subCategory || "N/A"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">MRP</label>
            <p className="text-gray-600">₹{product.mrp}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Sell Price</label>
            <p className="text-gray-600">₹{product.productPrice}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Product Description</label>
            <p className="text-gray-600">{product.description || "N/A"}</p>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src={product.imageUrl || logo1} // Default to logo1 if no image URL
            alt="Product Preview"
            className="h-80 w-80 rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-800">Discount</label>
            <p className="text-gray-600">{product.discountType || "No Discount"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Quantity</label>
            <p className="text-gray-600">{product.quantity} Kg</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Weight</label>
            <p className="text-gray-600">{product.weight || "N/A"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">SKU</label>
            <p className="text-gray-600">{product.sku || "N/A"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Visibility</label>
            <p className="text-gray-600">{product.visibility ? "Published" : "Draft"}</p>
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-800">Additional Information</label>
            <p className="text-gray-600">{product.productInfo || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewAllProducts;
