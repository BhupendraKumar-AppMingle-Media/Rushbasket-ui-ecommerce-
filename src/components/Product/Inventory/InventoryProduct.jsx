import { useState } from "react";

const InventoryProduct = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Electronics",
      image: "https://via.placeholder.com/50",
      sku: "WKNFKEND20",
      SubCategory: "milk",
      inventory: 10,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Clothing",
      image: "https://via.placeholder.com/50",
      sku: "WKNFKEND20",
      SubCategory: "milk",
      inventory: 5,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Home Appliances",
      image: "https://via.placeholder.com/50",
      sku: "WKNFKEND20",
      SubCategory: "milk",
      inventory: 0,
    },
  ]);

  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState(null); // Tracks which product is being edited
  const [tempInventory, setTempInventory] = useState(null); // Temporary inventory value during editing

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(filter.toLowerCase()) ||
      product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleEdit = (id, inventory) => {
    setEditId(id);
    setTempInventory(inventory); // Store current inventory in temp state
  };

  const handleSubmit = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, inventory: Number(tempInventory) } : product
    );
    setProducts(updatedProducts);
    setEditId(null); // Exit edit mode
    setTempInventory(null); // Clear temp state
  };

  const handleInventoryChange = (e) => {
    setTempInventory(e.target.value); // Update temp inventory value
  };

  return (
    <div className="w-full max-w-screen-xl bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        <p className="inline text-[#172554] px-1">Product</p>
        <p className="inline text-[#EF8120]">Inventory</p>
      </h1>

      <div className="mb-6 flex justify-end">
        <div className="w-1/4">
          <input
            type="text"
            id="filter"
            placeholder="Search....."
            value={filter}
            onChange={handleFilterChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-[#86C3D7] text-black">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product Title</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product Category</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Product Subcategory</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Inventory</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-[#fff4ea] transition">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{product.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{product.sku}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {product.SubCategory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {editId === product.id ? (
                    <input
                      type="number"
                      value={tempInventory}
                      onChange={handleInventoryChange}
                      className="w-20 px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                  ) : (
                    product.inventory
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {editId === product.id ? (
                    <button
                      onClick={() => handleSubmit(product.id)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(product.id, product.inventory)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-blue-950 hover:bg-[#74b9d0] rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryProduct;
