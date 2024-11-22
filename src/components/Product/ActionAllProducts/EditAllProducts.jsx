import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditAllProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State variables
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.put(`http://localhost:3001/update/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/update/${id}`, product);
      alert("Product updated successfully!");
      navigate("/allproducts");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product. Please try again.");
    }
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Edit Product</h1>
      <form onSubmit={handleUpdateProduct}>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.productName || ""}
            onChange={handleInputChange}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={product.category || ""}
            onChange={handleInputChange}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Subcategory</label>
          <input
            type="text"
            name="subCategory"
            value={product.subCategory || ""}
            onChange={handleInputChange}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>


        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={product.price || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Product Info</label>
          <textarea
            name="productInfo"
            value={product.productInfo || ""}
            onChange={handleInputChange}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={product.description || ""}
            onChange={handleInputChange}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">SKU*</label>
            <input
              type="text"
              name="sku"
              value={product.sku || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (in kg)*</label>
            <input
              type="number"
              name="weight"
              value={product.weight || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sell Price*</label>
            <input
              type="number"
              name="sellPrice"
              value={product.sellPrice || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">MRP*</label>
            <input
              type="number"
              name="mrp"
              value={product.mrp || ""}
              onChange={handleInputChange}
              className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-blue-400 focus:border-blue-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Save Changes
        </button>
        <button
          onClick={() => navigate("/allproducts")}
          className="mt-4 w-full bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditAllProducts;


// import  { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const EditAllProducts = () => {
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate(-1);
//   };

//   const mockProduct = {
//     name: "Sample Product",
//     category: "Electronics",
//     subcategory: "Smartphones",
//     quantity: 100,
//     price: 999,
//     sellPrice: 899,
//     description: "This is a sample description of the product.",
//     images: [
//       { id: 1, url: "https://m.media-amazon.com/images/I/41who+9qCLL._SR480,440_.jpg" },
//       { id: 2, url: "https://m.media-amazon.com/images/I/41who+9qCLL._SR480,440_.jpg" },
//       { id: 3, url: "https://m.media-amazon.com/images/I/414ly0wsjYL._AC_SY200_.jpg" },
//       { id: 4, url: "https://via.placeholder.com/200" },
//     ],
//   };

//   const [product, setProduct] = useState(mockProduct);
//   const [visibility, setVisibility] = useState("published");
//   const [discountType, setDiscountType] = useState("percentage");

//   const handleImageDelete = (id) => {
//     setProduct({
//       ...product,
//       images: product.images.filter((image) => image.id !== id),
//     });
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     const newImages = files.map((file, index) => ({
//       id: product.images.length + index + 1,
//       url: URL.createObjectURL(file),
//     }));
//     setProduct({
//       ...product,
//       images: [...product.images, ...newImages],
//     });
//   };

//   return (
//     <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-semibold mb-6 text-center">Edit Product</h1>

//       <form>
//         {/* Product Name */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Product Name</label>
//           <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.name} />
//         </div>

//         {/* Category and Subcategory */}
//         <div className="flex gap-4 mb-4">
//           <div className="flex-1">
//             <label className="block text-gray-700">Category</label>
//             <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.category} />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">Subcategory</label>
//             <input type="text" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.subcategory} />
//           </div>
//         </div>

//         {/* Price and Sell Price */}
//         <div className="flex gap-4 mb-4">
//           <div className="flex-1">
//             <label className="block text-gray-700">Price</label>
//             <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.price} />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">Sell Price</label>
//             <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.sellPrice} />
//           </div>
//         </div>

//         {/* Quantity and Discount Type */}
//         <div className="flex gap-4 mb-4">
//           <div className="flex-1">
//             <label className="block text-gray-700">Quantity</label>
//             <input type="number" className="w-full border border-gray-300 p-2 rounded" defaultValue={product.quantity} />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">Discount Type</label>
//             <div className="flex items-center gap-4">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="discountType"
//                   value="percentage"
//                   checked={discountType === "percentage"}
//                   onChange={(e) => setDiscountType(e.target.value)}
//                 />
//                 <span className="ml-2">Percentage</span>
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="discountType"
//                   value="rupees"
//                   checked={discountType === "rupees"}
//                   onChange={(e) => setDiscountType(e.target.value)}
//                 />
//                 <span className="ml-2">Rupees</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         {/* Weight and SKU/Product Code */}
//         <div className="flex gap-4 mb-4">
//           <div className="flex-1">
//             <label className="block text-gray-700">Weight (in grams)</label>
//             <input type="number" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter weight" />
//           </div>
//           <div className="flex-1">
//             <label className="block text-gray-700">SKU or Product Code</label>
//             <input type="text" className="w-full border border-gray-300 p-2 rounded" placeholder="Enter SKU or product code" />
//           </div>
//         </div>

//         {/* Product Information */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Product Information</label>
//           <textarea className="w-full border border-gray-300 p-2 rounded" defaultValue={product.description}></textarea>
//         </div>

//         {/* Product Images */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Product Images</label>
//           <div className="flex flex-wrap gap-4 mb-2">
//             {product.images.map((image) => (
//               <div key={image.id} className="relative w-32 h-32">
//                 <img src={image.url} alt="Product" className="w-full h-full object-cover rounded" />
//                 <button
//                   type="button"
//                   onClick={() => handleImageDelete(image.id)}
//                   className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1"
//                 >
//                   &times;
//                 </button>
//               </div>
//             ))}
//           </div>
//           <input type="file" multiple onChange={handleImageUpload} className="w-full border border-gray-300 p-2 rounded" />
//         </div>

//         {/* Description */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Description</label>
//           <textarea className="w-full border border-gray-300 p-2 rounded" defaultValue={product.description}></textarea>
//         </div>

//         {/* Visibility */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Visibility</label>
//           <div className="flex items-center gap-4">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value="published"
//                 checked={visibility === "published"}
//                 onChange={(e) => setVisibility(e.target.value)}
//               />
//               <span className="ml-2">Published</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="visibility"
//                 value="draft"
//                 checked={visibility === "draft"}
//                 onChange={(e) => setVisibility(e.target.value)}
//               />
//               <span className="ml-2">Draft</span>
//             </label>
//           </div>
//         </div>

//         {/* Button Container */}
//         <div className="flex justify-between mt-6">
//           <button type="submit" className="text-white px-4 py-2 rounded" style={{ backgroundColor: '#172554' }}>
//             Save Changes
//           </button>

//           <button
//             type="button"
//             onClick={handleGoBack}
//             className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-3 rounded"
//           >
//             Go Back
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditAllProducts;


