

const SupportManagement = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Support Management</h1>
      
      {/* Ticket Table */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Support Tickets</h2>
        
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Ticket ID</th>
              <th className="py-3 px-6 text-left">Customer</th>
              <th className="py-3 px-6 text-center">Assigned To</th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm ">
            {/* Sample Row */}
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <span className="font-medium">#123</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <span>John Doe</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span>Jane Smith</span>
              </td>
              <td className="py-3 px-6 text-center">
                <span className="bg-yellow-200 text-yellow-700 py-1 px-3 rounded-full text-xs">Open</span>
              </td>
              <td className="py-3 px-6 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Assign</button>
              </td>
            </tr>
            {/* Repeat rows as necessary */}
          </tbody>
        </table>
      </div>

      {/* Analytics Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Support Analytics</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-700">Average Resolution Time</h3>
            <p className="text-2xl font-bold text-blue-800">24 hrs</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-700">Customer Satisfaction</h3>
            <p className="text-2xl font-bold text-green-800">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportManagement;
