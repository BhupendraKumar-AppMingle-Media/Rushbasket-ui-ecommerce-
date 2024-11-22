// import { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Apple",
//     category: "Fruits",
//     subcategories: [
//       {
//         name: "Fresh Apples",
//         image:
//           "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
//       },
//       {
//         name: "Dried Apples",
//         image:
//           "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
//       },
//     ],
//     image:
//       "https://imgs.search.brave.com/bCPkccQLZ-pvmAj0pBqDfEUHsYynHlzmE7W0c0uvZbQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEwLzMyLzAy/LzM2MF9GXzMxMDMy/MDI3M19JOXJSMWw3/OTE4TUpvWjBHUkhH/SUJnWmw5RjlTaEVY/cS5qcGc",
//   },
//   {
//     id: 2,
//     name: "Banana",
//     category: "Fruits",
//     subcategories: [
//       {
//         name: "Fresh Bananas",
//         image:
//           "https://imgs.search.brave.com/RuvMQxxlistne_eiXZ0StrC_qcW8zJeiT92Cjrej8jE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2JhbmFu/YS1pc29sYXRlZC1j/bGlwcGluZy1wYXRo/LW1hY3JvLTI2MG53/LTI0NzIyMDQ3MjUu/anBn",
//       },
//       {
//         name: "Dried Bananas",
//         image:
//           "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg",
//       },
//     ],
//     image:
//       "https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg",
//   },
//   {
//     id: 3,
//     name: "Carrot",
//     category: "Vegetables",
//     subcategories: [
//       {
//         name: "Fresh Carrots",
//         image:
//           "https://imgs.search.brave.com/yajyVh8_v4hoB22eRg-yutkBC9f4hAMWWQjBr6f2nhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2NhcnJv/dHMtaXNvbGF0ZWQt/Y2Fycm90LW9uLXdo/aXRlLTI2MG53LTI0/NzQ3OTI2MzkuanBn",
//       },
//     ],
//     image:
//       "https://imgs.search.brave.com/yajyVh8_v4hoB22eRg-yutkBC9f4hAMWWQjBr6f2nhE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL2NhcnJv/dHMtaXNvbGF0ZWQt/Y2Fycm90LW9uLXdo/aXRlLTI2MG53LTI0/NzQ3OTI2MzkuanBn",
//   },
//   {
//     id: 4,
//     name: "Milk",
//     category: "Dairy Product",
//     subcategories: [
//       {
//         name: "Almond Milk",
//         image:
//           "https://imgs.search.brave.com/Vkvd-jF9PM7bHpK9rxBHczzGz2XTug4vI45-4n-S7AM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/Nzc4MDMxL3Bob3Rv/L21pbGstYm90dGxl/LWNsaXBwaW5nLXBh/dGguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJDM2RtSlB6/c0JTR25wZlJ0WTB3/ampiNUctTE9MdnhQ/NFpObXVfeUo4UWs9",
//       },
//     ],
//     image:
//       "https://imgs.search.brave.com/Vkvd-jF9PM7bHpK9rxBHczzGz2XTug4vI45-4n-S7AM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/Nzc4MDMxL3Bob3Rv/L21pbGstYm90dGxl/LWNsaXBwaW5nLXBh/dGguanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJDM2RtSlB6/c0JTR25wZlJ0WTB3/ampiNUctTE9MdnhQ/NFpObXVfeUo4UWs9",
//   },
//   {
//     id: 5,
//     name: "Bread",
//     category: " Bakery Products",
//     subcategories: [
//       {
//         name: "White Bread",
//         image:
//           "https://imgs.search.brave.com/kLj92ZKztt-rbKxX2Jb2Nr6QW8ieUbRFpnVjraHngv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9naGFy/c3R1ZmYuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAz/L0JyaXRhbm5pYS1C/cm93bi1CcmVhZC00/MDBnLmpwZw",
//       },
//     ],
//     image:
//       "https://imgs.search.brave.com/kLj92ZKztt-rbKxX2Jb2Nr6QW8ieUbRFpnVjraHngv8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9naGFy/c3R1ZmYuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAz/L0JyaXRhbm5pYS1C/cm93bi1CcmVhZC00/MDBnLmpwZw",
//   },
//   {
//     id: 6,
//     name: "Haldiram Snacks",
//     category: "Snacks",
//     subcategories: [
//       { name: "Chips", image: "https://via.placeholder.com/50?text=Chips" },
//       { name: "Namkeen", image: "https://via.placeholder.com/50?text=Namkeen" },
//     ],
//     image: "https://via.placeholder.com/50x50?text=Snacks",
//   },
// ];

// const categories = [
//   "All",
//   ...new Set(products.map((product) => product.category)),
// ];

// const CategoriesProduct = () => {
//   const navigate=useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
  


//   // Filter products based on the selected category
//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   // Function to handle showing subcategories
//   const handleShowSubcategories = (product) => {
//     setSelectedProduct(product);
//   };

//   // Function to go back to product list
//   const handleBackToCategories = () => {
//     setSelectedProduct(null);
//   };
   
//     const handleAddProductCategory = () => {
//       navigate('/add-categories');
//     };
//     const handleAddProductSubcategory=()=>{
//       navigate('/add-subcategories');
//     }

//   return (
//     <div className="p-6   text-center">
//       <h2 className="text-2xl font-bold mb-6 text-left">
//         Product Categories List
//       </h2>

//       {/* Display Subcategories or Products */}
//       {selectedProduct ? (
//         <div>
        
//           <div className="flex justify-between items-center  "
//           style={{marginBottom:20}}>
//       <div>
        
//       <button
//             onClick={handleBackToCategories}
//             className="p-3  text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-700"
//             style={{backgroundColor:'#172554'}}
//           >
//             Back to Categories
//           </button>
//         </div> {/* Empty div for spacing */}
//       <button
//         onClick={handleAddProductSubcategory}
//         className="py-2 px-4  text-white rounded-lg"
//         style={{backgroundColor:'#172554'}}
//       >
//         + Add Subcategory
//       </button>
//     </div>
          
//           <h3 className="text-xl font-bold mb-2">
//             Subcategories of {selectedProduct.name}
//           </h3>
//           <table className="min-w-full bg-white border text-left">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">
//                   Subcategory Name
//                 </th>
//                 <th className="py-2 px-4 border-b text-left">Image</th>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedProduct.subcategories.map((subcategory, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 border-b text-left">
//                     {subcategory.name}
//                   </td>
//                   <td className="py-2 px-4 border-b text-left">
//                     <img
//                       src={subcategory.image}
//                       alt={subcategory.name}
//                       className="w-12 h-12 object-cover rounded-lg"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         // Render Products
//         <div>
//           {/* Category Filter Buttons */}
//           <div className="mb-4 flex flex-wrap justify-start gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`py-2 px-4 rounded-lg focus:outline-none ${
//                   selectedCategory === category
//                     ? "bg-teal-600 text-white"
//                     : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//             <button
//                 onClick={handleAddProductCategory}
//                 className="ml-auto py-2 px-4  text-white rounded-lg  "
//                 style={{backgroundColor:'#172554'}}
//               >
//                 + Add Category
//               </button>
//           </div>

//           {/* Product Table */}
//           <div className="overflow-x-auto rounded-lg mx-auto mt-4">
//             <table className="min-w-full bg-white border text-left">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-3 text-left text-base font-bold text-black-500">
//                     Category Name
//                   </th>
//                   <th className="py-2 px-4 border-b text-left">Image</th>
//                   <th className="py-2 px-4 border-b text-left">
//                     Subcategories
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredProducts.map((product) => (
//                   <tr key={product.id}>
//                     <td className="py-2 px-4 border-b">{product.category}</td>
//                     <td className="py-2 px-4 border-b">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-12 h-12 object-cover rounded-lg"
//                       />
//                     </td>
//                     <td className="py-2 px-4 border-b">
//                       <button
//                         onClick={() => handleShowSubcategories(product)}
//                         className="text-black-500 flex items-center"
//                       >
//                         <FaEye className="mr-2 text-center" /> {/* Using the Eye icon */}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoriesProduct;




//integration




// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaEye } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const CategoriesProduct = () => {
//   const navigate = useNavigate();
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState(["All"]);
//   const [subcategories, setSubcategories] = useState([]); // Add subcategories state

//   // Fetch categories data from API
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/categoryfindall")
//       .then((response) => {
//         const fetchedProducts = response.data;
//         setProducts(fetchedProducts);

//         // Extract unique categories for the filter
//         const uniqueCategories = [
//           "All",
//           ...new Set(fetchedProducts.map((product) => product.category)),
//         ];
//         setCategories(uniqueCategories);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   // Fetch subcategories data from API for the selected product
//   const fetchSubcategories = (productId) => {
//     axios
//       .get(`http://localhost:3001/subCategoryGet?productId=${productId}`)
//       .then((response) => {
//         setSubcategories(response.data); // Set subcategories based on the API response
//       })
//       .catch((error) => {
//         console.error("Error fetching subcategories:", error);
//       });
//   };

//   // Show subcategories of the selected product
//   const handleShowSubcategories = (product) => {
//     console.log("Product selected for subcategories:", product);
//     setSelectedProduct(product);
//     fetchSubcategories(product.id); // Fetch subcategories for the selected product
//   };

//   const handleBackToCategories = () => {
//     setSelectedProduct(null);
//     setSubcategories([]); // Clear subcategories when returning to categories
//   };

//   const handleAddProductCategory = () => {
//     navigate("/add-categories");
//   };

//   const handleAddProductSubcategory = () => {
//     navigate("/add-subcategories");
//   };

//   const filteredProducts =
//     selectedCategory === "All"
//       ? products
//       : products.filter((product) => product.category === selectedCategory);

//   return (
//     <div className="p-6 text-center">
//       <h2 className="text-2xl font-bold mb-6 text-left">Product Categories List</h2>

//       {/* Display Subcategories or Products */}
//       {selectedProduct ? (
//         <div>
//           <div className="flex justify-between items-center mb-5">
//             <button
//               onClick={handleBackToCategories}
//               className="p-3 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-700"
//               style={{ backgroundColor: "#172554" }}
//             >
//               Back to Categories
//             </button>
//             <button
//               onClick={handleAddProductSubcategory}
//               className="py-2 px-4 text-white rounded-lg"
//               style={{ backgroundColor: "#172554" }}
//             >
//               + Add Subcategory
//             </button>
//           </div>

//           <h3 className="text-xl font-bold mb-2">Subcategories of {selectedProduct.name}</h3>
//           <table className="min-w-full bg-white border text-left">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Subcategory Name</th>
//                 <th className="py-2 px-4 border-b text-left">Image</th>
//               </tr>
//             </thead>
//             <tbody>
//               {subcategories.length > 0 ? (
//                 subcategories.map((subcategory, index) => (
//                   <tr key={index}>
//                     <td className="py-2 px-4 border-b text-left">{subcategory.name}</td>
//                     <td className="py-2 px-4 border-b text-left">
//                       <img
//                         src={subcategory.image}
//                         alt={subcategory.name}
//                         className="w-12 h-12 object-cover rounded-lg"
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="2" className="py-2 px-4 border-b text-left">
//                     No subcategories available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div>
//           <div className="mb-4 flex flex-wrap justify-start gap-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className="py-2 px-4 text-white rounded-lg"
//                 style={{
//                   backgroundColor: selectedCategory === category ? "#1D4ED8" : "#172554",
//                 }}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={handleAddProductCategory}
//             className="py-2 px-4 mb-6 text-white rounded-lg"
//             style={{ backgroundColor: "#172554" }}
//           >
//             + Add Category
//           </button>

//           <table className="min-w-full bg-white border text-left">
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b text-left">Category Name</th>
//                 <th className="py-2 px-4 border-b text-left">Image</th>
//                 <th className="py-2 px-4 border-b text-left">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredProducts.map((product) => (
//                 <tr key={product.id}>
//                   <td className="py-2 px-4 border-b text-left">{product.name}</td>
//                   <td className="py-2 px-4 border-b text-left">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-12 h-12 object-cover rounded-lg"
//                     />
//                   </td>
//                   <td className="py-2 px-4 border-b text-left">
//                     <button
//                       onClick={() => handleShowSubcategories(product)}
//                       className="hover:text-blue-700"
//                     >
//                       <FaEye className="inline mr-1" /> View Subcategories
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoriesProduct;







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
      <h2 className="text-4xl font-bold mb-6 text-left text-center"> Product Categories</h2>
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
          <div className="mb-4 flex justify-center">
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
            className="py-3 px-5 mb-9 text-white rounded-xl  font-semibold hover:bg-[#EF8120]"
            style={{ backgroundColor: "#172554" }}
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
                        Subcategories
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
