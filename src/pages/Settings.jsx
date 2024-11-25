import React, { useState } from 'react';

const Settings = () => {
  const [image, setImage] = useState(null);
  const [imagesList, setImagesList] = useState([]);
  const [editedImage, setEditedImage] = useState(null);
  const [newImage, setNewImage] = useState(null); // New state for the edited image upload

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (image) {
      setImagesList([...imagesList, { id: imagesList.length + 1, src: image }]);
      setImage(null); // Clear the upload after adding to the list
    }
  };

  const handleEdit = (id) => {
    const imageToEdit = imagesList.find((img) => img.id === id);
    setEditedImage(imageToEdit);
    setNewImage(imageToEdit.src); // Set the current image to the new image for editing
  };

  const handleDelete = (id) => {
    setImagesList(imagesList.filter((img) => img.id !== id));
  };

  const handleSaveEdit = () => {
    if (newImage) {
      setImagesList(
        imagesList.map((img) => (img.id === editedImage.id ? { ...img, src: newImage } : img))
      );
      setEditedImage(null);
      setNewImage(null); // Clear the new image after saving
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      
<h1 className="text-4xl font-bold mb-6 text-center">
        <span className="text-[#172554]">Image</span>
        <span className="text-[#EF8120]"> Slider</span>
      </h1>
      {/* Image Upload Section */}
      <div className="mb-6">
        <label className="block text-lg  font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border border-gray-300 rounded p-2 w-full"
        />
        {image && (
          <div className="mt-4">
            <img src={image} alt="Preview" className="w-32 h-32 object-cover" />
            <button
              onClick={handleSubmit}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        )}
      </div>

      {/* Image List Section */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#86C3D7]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold ">Image</th>
              <th className="px-6 py-3 text-left text-sm font-semibold ">Action</th>
            </tr>
          </thead>
          <tbody>
            {imagesList.map((img) => (
              <tr key={img.id} className="border-t">
                <td className="px-6 py-4">
                  <img src={img.src} alt="Slider Image" className="w-32 h-32 object-cover" />
                </td>
                <td className="px-6 py-4 text-sm ">
                  <button
                    onClick={() => handleEdit(img.id)}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img.id)}
                    className="mr-2 text-red-500"
                  >
                    Delete
                  </button>
                  <button className="text-green-500" onClick={() => alert("Submitted")}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Image</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium">Upload a new image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewImage(URL.createObjectURL(e.target.files[0]))}
                className="border border-gray-300 rounded p-2 w-full"
              />
            </div>
            {newImage && <img src={newImage} alt="Preview" className="w-full h-48 object-cover mb-4" />}
            <button
              onClick={handleSaveEdit}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save Edit
            </button>
            <button
              onClick={() => setEditedImage(null)}
              className="ml-4 bg-gray-300 text-black py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
