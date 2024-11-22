

import { useState, useEffect } from "react";
import axios from "axios";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CategoriesProduct = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch categories data from API
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get("http://localhost:3001/categoryfindall")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  // Fetch subcategories data from API for the selected product
  const fetchSubcategories = (productId) => {
    axios
      .get(`http://localhost:3001/subCategoryGet?productId=${productId}`)
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  };

  const handleShowSubcategories = (product) => {
    setSelectedProduct(product);
    fetchSubcategories(product.id);
  };

  const handleBackToCategories = () => {
    setSelectedProduct(null);
    setSubcategories([]);
  };

  const handleAddProductCategory = () => {
    navigate("/add-categories");
  };

  const handleAddProductSubcategory = () => {
    navigate("/add-subcategories");
  };

  const handleEditCategory = (productId) => {
    navigate(`/edit-category/${productId}`);
  };

  const handleDeleteCategory = (productId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios
        .delete(`http://localhost:3001/deleteCategory/${productId}`)
        .then((response) => {
          alert("Category deleted successfully.");
          fetchCategories(); // Refresh categories list
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 text-center">
     
     
      {/* <h2 className="text-4xl font-bold mb-6 text-left text-center"> Product Categories</h2> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Product</p>
  <p className="inline text-[#EF8120]">Categories</p>
  
</h1>
     
      {selectedProduct ? (
        <div>
          <div className="flex justify-between items-center mb-5">
            <button
              onClick={handleBackToCategories}
              className="p-3 text-white font-semibold text-sm py-3.5 rounded-lg hover:bg-blue-700"
              style={{ backgroundColor: "#172554" }}
            >
              Back to Categories
            </button>
            <button
              onClick={handleAddProductSubcategory}
              className="py-3 px-5 text-white rounded-lg  hover:bg-[rgb(239,129,32)]"
              style={{ backgroundColor: "#172554" }}
            >
              + Add Subcategory
            </button>
          </div>
          <h3 className="text-xl font-bold mb-2">Subcategories of {selectedProduct.name}</h3>
          <table className="min-w-full bg-white border text-left">
            <thead>
              <tr style={{backgroundColor:'#86C3D7'}}>
                <th className="py-2 px-4 border-b text-left">Subcategory Name</th>
                <th className="py-2 px-4 border-b text-left">Image</th>
              </tr>
            </thead>
            <tbody>
              {subcategories.length > 0 ? (
                subcategories.map((subcategory, index) => (
                  <tr key={index} className="hover:bg-gray-300 transition">
                    <td className="py-2 px-4 border-b text-left">{subcategory.name}</td>
                    <td className="py-2 px-4 border-b text-left">
                      <img
                        src={subcategory.image}
                        alt={subcategory.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="py-2 px-4 border-b text-left">
                    No subcategories available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div className="mb-4 inline">
            <input
              type="text"
              placeholder="Search by product name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border rounded-lg w-1/2   border-orange-300  focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleAddProductCategory}
            className="py-3 px-5 mb-9 ml-6 bg-[#172554] text-white rounded hover:bg-[#EF8120] font-semibold"
          >
            + Add Category
          </button>


          <table className="min-w-full bg-white border text-left "
          >
            <thead>
              <tr className=" " style={{backgroundColor:'#86C3D7'}}>
                <th className="py-2 px-4 border-b text-left">Category Name</th>
                <th className="py-2 px-4 border-b text-left">Image</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-[#fff4ea] transition">
                    <td className="py-2 px-4 border-b text-left">{product.name}</td>
                    <td className="py-2 px-4 border-b text-left">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 border-b text-left flex space-x-4">
                     
                      <button
                        onClick={() => handleEditCategory(product.id)}
                        className="hover:text-green-700"
                      >
                        <FaEdit className="inline mr-1" /> 
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(product.id)}
                        className="hover:text-red-700"
                      >
                        <FaTrash className="inline mr-1" /> 
                      </button>

                      <button
                        onClick={() => handleShowSubcategories(product)}
                        className="hover:text-blue-700"
                      >
                        {/* <FaEye className="inline mr-1" />Subcategories */}
                        Sub-Categories
                      </button>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-2 px-4 border-b text-left">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CategoriesProduct;
