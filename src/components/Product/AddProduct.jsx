import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [discountType, setDiscountType] = useState("rupees");
  const [discountValue, setDiscountValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg"); // New state for weight unit
  const [sku, setSku] = useState("");
  const [visibility, setVisibility] = useState("publish");
  const [description, setDescription] = useState(""); // Editable description
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImages([...images, ...Array.from(e.target.files)]);
  };

  const handleDiscountAmount = () => {
    const discountAmount = mrp - sellPrice;
    const discountPercentage = ((discountAmount / mrp) * 100).toFixed(2);
    return discountType === "rupees"
      ? `${discountAmount} ₹`
      : `${discountPercentage}%`;
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedImages = images.map((image) => ({
      fileName: image.name,
      fileUrl: URL.createObjectURL(image),
    }));

    const payload = {
      productName,
      category,
      subCategory,
      mrp: parseFloat(mrp),
      sellPrice: parseFloat(sellPrice),
      discountType,
      discountValue,
      quantity: parseInt(quantity, 10),
      weight: `${weight} ${weightUnit}`, // Weight includes unit
      sku,
      visibility: visibility === "publish",
      description,
      images: formattedImages,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/addproduct",
        payload
      );
      console.log("Product added successfully:", response.data);
      navigate("/allproducts");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const subCategoriesData = {
    electronics: ["Mobile", "Laptop", "Camera"],
    kitchen: ["Mixer", "Microwave", "Cookware"],
    fashion: ["Men's Wear", "Women's Wear", "Accessories"],
    dailyproduct: ["Toothpaste", "Soap", "Shampoo"],
    groceries: ["Rice", "Wheat", "Lentils"],
    vegetables: ["Carrot", "Potato", "Onion"],
    gym: ["Protein", "Vitamins", "Supplements"],
    drinks: ["Juices", "Soft Drinks", "Energy Drinks"],
    toys: ["Electronic Toys", "Learning Toys", "Outdoor Toys"],
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg   ">
      {/* <h2 className="text-3xl font-semibold text-center mb-5">Add Product</h2> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        <p className="inline  text-[#172554] px-1">Add</p>
        <p className="inline text-[#EF8120]">Products</p>
      </h1>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Product Title */}
        <div className="mb-5">
          <label className="block text-base font-semibold ">
            Product Title*
          </label>
          <input
            type="text"
            value={productName}
            placeholder="Enter product Title"
            onChange={(e) => setProductName(e.target.value)}
            className="mt-2 w-full p-2    border border-orange-300 rounded-md focus:outline-none focus:border-blue-700"
            required
          />
        </div>

        {/* Category and Subcategory */}
        <div className="mb-5">
          <label className="block text-base font-semibold">
            Category<span className="">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full p-2  border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Category</option>
            {Object.keys(subCategoriesData).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category && (
          <div className="mb-5">
            <label className="block text-base font-semibold ">
              Sub-Category
            </label>
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="mt-2 w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Sub-Category</option>
              {subCategoriesData[category].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* MRP and Sell Price */}
        <div className="mb-5">
          <label className="block text-base font-semibold ">MRP*</label>
          <input
            type="number"
            value={mrp}
            placeholder="MRP"
            onChange={(e) => setMrp(e.target.value)}
            className="mt-2 w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block text-base font-semibold ">Sell Price*</label>
          <input
            type="number"
            value={sellPrice}
            placeholder="Sell Price"
            onChange={(e) => setSellPrice(e.target.value)}
            className="mt-2 w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Discount Type */}
        <div className="mb-5">
          <label className="block text-base font-semibold">Discount Type</label>
          <div className="flex items-center mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="discountType"
                value="rupees"
                className="border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
                checked={discountType === "rupees"}
                onChange={() => setDiscountType("rupees")}
              />
              <span className="ml-2">Rupees</span>
            </label>
            <label>
              <input
                type="radio"
                name="discountType"
                value="percentage"
                className="border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
                checked={discountType === "percentage"}
                onChange={() => setDiscountType("percentage")}
              />
              <span className="ml-2">Percentage</span>
            </label>
          </div>
          {discountType && (
            <p className="text-gray-600 mt-2">
              Discount: {handleDiscountAmount()}
            </p>
          )}
        </div>

        {/* Weight optinal rahega */}








        <div className="mb-5">
          <label className="block text-base font-semibold ">
            Weight ({weightUnit.toUpperCase()})
          </label>
          <div className="flex mt-2">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="flex-grow p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder={`Enter weight in ${weightUnit}`}
              required
            />
            <select
              value={weightUnit}
              onChange={(e) => setWeightUnit(e.target.value)}
              className="p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="kg">Kg</option>
              <option value="grams">Grams</option>
              <option value="Litre">litre</option>
              <option value="ml">ml</option>
            </select>
          </div>
        </div>

        {/* packets  in number */}
        <div className="mb-5">
          <label className="block text-base font-semibold">
            Packets

          </label>
          <input type="number"
           className="mt-2 block w-full  border border-orange-300 rounded-md focus:outline-none focus:border-blue-500 shadow-sm p-2 text-lg"
          placeholder="Enter packets number "  />

        </div>




        {/* quantitiy */}
        <div>
          <label className="block text-base font-semibold ">Quantity*</label>
          <input
            type="number"
            placeholder="Enter quantity"
            className="mt-2 block w-full  border border-orange-300 rounded-md focus:outline-none focus:border-blue-500 shadow-sm p-2 text-lg"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        {/* sku*/}
        <div className="mb-5 mt-2">
          <label className="block text-base font-semibold ">SKU*</label>
          <input
            type="text"
            value={sku}
            placeholder="Enter SKU or Product Code"
            onChange={(e) => setSku(e.target.value)}
            className="mt-2 w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-base font-semibold ">
            Product Description*
          </label>
          <ReactQuill
            value={description}
            onChange={setDescription}
            className="mt-3  border focus:border-blue-500"
            placeholder="Write your description here"
            style={{ height: "200px", marginBottom: "10px" }} // Adjust height as needed
          />
        </div>

        <div className="mb-5 pt-8">
          <label className="block text-base font-semibold">Images*</label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleImageChange}
            className="mt-2 w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:border-blue-500"
            style={{ display: "none" }}
          />
          <button
            type="button"
            className="mt-3 text-base text-blue-500"
            onClick={() => document.getElementById("images").click()}
          >
            + Add More Images
          </button>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`preview-${index}`}
                  className="w-full h-auto object-cover rounded-md"
                  // className="w-[200px] h-[200px] object-fill rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-sm p-1 rounded-full"
                >
                  ✕
                </button>
              </div>


            ))}
          </div>
        </div>

        <div className="mb-5 ">
          <label className="block text-base font-semibold ">Visibility*</label>
          <div className="flex mt-2">
            <label className="mr-4">
              <input
                type="radio"
                name="visibility"
                value="publish"
                checked={visibility === "publish"}
                className="border border-orange-300 rounded-md focus:outline-none focus:border-blue-600"
                onChange={() => setVisibility("publish")}
              />
              <span className="ml-2">Publish</span>
            </label>
            <label>
              <input
                type="radio"
                name="visibility"
                value="draft"
                checked={visibility === "draft"}
                onChange={() => setVisibility("draft")}
              />
              <span className="ml-2">Draft</span>
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className=" bg-[#172554] text-white px-4 py-2 rounded hover:bg-[#EF8120] font-semibold "
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
