
import img from '../../assets/onion.png';

const PreviewOrder = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-6 text-center ">Order Preview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image Section */}
        <div className="border p-4 bg-gray-100 rounded-md shadow-md flex items-center justify-center">
          <img
            src={img}
            alt="Product"
            className="max-h-full w-auto object-cover rounded-md"
          />
        </div>

        {/* User Details and Order Details Sections on the Right */}
        <div className="space-y-6">
          {/* User Details Section */}
          <div className="border p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">User Details</h2>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Mobile No:</strong> 123-456-7890</p>
            <p><strong>Address:</strong> 123 Main St, City, Country</p>
          </div>

          {/* Order Details Section */}
          <div className="border p-4 bg-gray-100 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            <p><strong>Order ID:</strong> ORD12345</p>
            <p><strong>Created:</strong> 2024-10-20 14:35</p>
            <p><strong>Customer Name:</strong> John Doe</p>
            <p><strong>Payment Status:</strong> Paid</p>
            <p><strong>Total Amount:</strong> 120</p>
            <p><strong>Status:</strong> Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewOrder;
