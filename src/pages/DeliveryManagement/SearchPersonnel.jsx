import React, { useState } from 'react';

const SearchPersonnel = () => {
  const [query, setQuery] = useState('');
  const [personnel, setPersonnel] = useState([
    { name: "John Doe", status: "Online", deliveryCount: 5 },
    { name: "Jane Smith", status: "Busy", deliveryCount: 3 },
    { name: "Alex Johnson", status: "Offline", deliveryCount: 2 },
  ]);

  const filteredPersonnel = personnel.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Search and Filter Delivery Personnel</h2>
      <input
        type="text"
        placeholder="Search by name"
        className="p-2 mb-4 w-full border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredPersonnel.map((person, index) => (
          <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-md mb-4">
            <p className="text-lg font-medium">{person.name}</p>
            <p className="text-sm text-gray-500">Status: {person.status}</p>
            <p className="text-sm text-gray-500">Deliveries: {person.deliveryCount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPersonnel;
