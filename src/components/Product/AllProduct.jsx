import  { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/showproduct")
      .then(response => {
        console.log(response.data); 
        const transformedProducts = response.data.map(item => ({
          
          id: item._id,
          name: item.productName,
          image: item.image || "https://via.placeholder.com/50",
          quantity: item.quantity,
          price: item.productPrice,
          sellprice: item.mrp,
          visibility: item.visibility ? "Published" : "Draft",
        }));
        setProducts(transformedProducts);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
      
  }, []);

  const handleEditProduct = (id) => {
    console.log("Navigating to edit product with id:", id);
    navigate(`/allproducts-edit/${id}`);
  };

  const handleDeleteProduct = (id) => {
    axios.delete(`http://localhost:3001/deleteuser/${id}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
        window.alert('Products have been deleted Successfully');
      })
      .catch(error => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="w-3xl m-2 p-5 bg-white rounded-lg shadow-md">
      {/* <h2 className="text-4xl font-semibold text-center mb-4">All Products</h2> */}
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">All </p>
  <p className="inline text-[#EF8120]">Products</p>
  </h1>

      <table className="min-w-full  border border-gray-300  ">
        <thead className="bg-gray-200  "
        style={{backgroundColor:'#86C3D7'}}>
          <tr>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Product Name</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Image</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Quantity</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Price</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Sell Price</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Visibility</th>
            <th className="px-4 py-3 text-left text-base font-bold text-black-500">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}   className='hover:bg-[#fff4ea] transition'>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-black-700">{product.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm ">{product.quantity}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm ">{product.price.toFixed(2)}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm ">{product.sellprice.toFixed(2)}</td>
              <td className="px-4 py-2 whitespace-nowrap text-sm">
                <span className={`px-2 py-1 rounded ${product.visibility === "Published" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                  {product.visibility}
                </span>
              </td>
              <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <button className="text-xl" onClick={() => handleEditProduct(product.id)}>
                  <FaEdit />
                </button>
                <button className="text-xl mx-2" onClick={() => navigate(`/allproducts-preview/${product.id}`)}>
                  <FaEye />
                </button>
                <button className="text-xl" onClick={() => handleDeleteProduct(product.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
