

import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Settings = () => {
  const [images, setImages] = useState([]);
  const [newUpload, setNewUpload] = useState(null); // To store a single file for upload
  const fileInputRef = useRef(null); // Reference for file input for editing

  // Fetch Images from API
  useEffect(() => {
    axios
      .get("http://localhost:3001/imgageSlideget")
      .then((response) => {
        console.log("Fetched images:", response.data);
        setImages(response.data); // Assuming the API returns an array of images
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Handle Image Upload (single image)
  const handleUpload = (event) => {
    const file = event.target.files[0]; // Get the single file
    if (file) {
      setNewUpload({
        id: Date.now() + Math.random(), // Temporary ID
        file, // Store the file for submission
        url: URL.createObjectURL(file), // Preview URL
      });
    }
  };

  // Submit New Upload
  const handleSubmitUpload = () => {
    if (!newUpload) return; // Ensure a file is selected

    const formData = new FormData();
    formData.append("imageUrl", newUpload.file); // Image field as per backend schema

    axios
      .post("http://localhost:3001/imageCreate", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        setImages([...images, response.data]); // Append uploaded image to the existing list
        setNewUpload(null); // Clear pending upload
      })
      .catch((error) => console.error("Error uploading image:", error));
  };

  // Handle Delete Image
  const handleDelete = (id) => {
    console.log("Deleting image with ID:", id);
    axios
      .delete(`http://localhost:3001/imageSlideDelete/${id}`)
      .then(() => {
        setImages(images.filter((image) => image._id !== id));
      })
      .catch((error) => console.error("Error deleting image:", error));
  };

  // Handle Edit Image
  const handleEdit = (id) => {
    fileInputRef.current.click(); // Trigger the file input click
    fileInputRef.current.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append("imageUrl", file); // Image field for update
      formData.append("id", id); // Include image ID

      axios
        .put("http://localhost:3001/imgageSlideput", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setImages(
            images.map((image) =>
              image._id === id ? { ...image, url: response.data.url } : image
            )
          );
        })
        .catch((error) => console.error("Error editing image:", error));
    };
  };

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {/* Title */}
      {/* <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Slider</h1> */}
       
      <h1 className="text-4xl font-bold mb-6 text-center">
  <p className="inline  text-[#172554] px-1">Image</p>
  <p className="inline text-[#EF8120]">Slider</p>
  </h1>
      {/* Upload Button */}
      <div className="mb-6">
        <label className="block text-lg font-bold text-gray-900 mb-2">
          Upload Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        {newUpload && (
          <button
            onClick={handleSubmitUpload}
            className="mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
          >
            Submit
          </button>
        )}
      </div>

      {/* Image Slider */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={image.imageUrl}
              alt="Uploaded"
              className="w-full h-64 object-cover"
            />

            {/* Action Buttons */}
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleEdit(image._id)}
                className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(image._id)}
                className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hidden File Input for Editing */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default Settings;







//2

// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const Settings = () => {
//   const [images, setImages] = useState([]);
//   const [newUploads, setNewUploads] = useState([]);
//   const fileInputRef = useRef(null); // Reference for file input for editing

//   // Fetch Images from API
//   useEffect(() => {
//     axios
//     //   .get("http://localhost:3001/imageCreate")
//       .get("http://localhost:3001/imgageSlideget")
//       .then((response) => {
//         console.log("Fetched images:", response.data);
//         setImages(response.data); // Assuming the API returns an array of images
//       })
//       .catch((error) => console.error("Error fetching images:", error));
//   }, []);

//   // Handle Image Upload
//   const handleUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const newImages = files.map((file) => ({
//       id: Date.now() + Math.random(), // Temporary ID
//       file, // Store the file for submission
//       url: URL.createObjectURL(file), // Preview URL
//     }));
//     setNewUploads([...newUploads, ...newImages]);
//   };

//   // Submit New Uploads
//   const handleSubmitUploads = () => {
//     const formData = new FormData();
//     newUploads.forEach((image) => formData.append("images", image.file));

//     axios
//       .post("http://localhost:3001/imageCreate", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//       .then((response) => {
//         setImages([...images, ...response.data]); // Append uploaded images to existing list
//         setNewUploads([]); // Clear pending uploads
//       })
//       .catch((error) => console.error("Error uploading images:", error));
//   };

//   // Handle Delete Image
//   const handleDelete = (id) => {
//     console.log("Deleting image with ID:", id);
//     axios
//       .delete(`http://localhost:3001/imageSlideDelete/${id}`)
//       .then(() => {
//         setImages(images.filter((image) => image._id !== id));
//       })
//       .catch((error) => console.error("Error deleting image:", error));
//   };

//   // Handle Edit Image
//   const handleEdit = (id) => {
//     fileInputRef.current.click(); // Trigger the file input click
//     fileInputRef.current.onchange = (event) => {
//       const file = event.target.files[0];
//       if (!file) return;

//       const formData = new FormData();
//       formData.append("image", file);
//       formData.append("id", id);

//       axios
//         .put("http://localhost:3001/imgageSlideput", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         })
//         .then((response) => {
//           setImages(
//             images.map((image) =>
//               image._id === id ? { ...image, url: response.data.url } : image
//             )
//           );
//         })
//         .catch((error) => console.error("Error editing image:", error));
//     };
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Title */}
//       <h1 className="text-5xl font-bold text-gray-900 mb-6">Slider</h1>

//       {/* Upload Button */}
//       <div className="mb-6">
//         <label className="block text-lg font-bold text-gray-900 mb-2">
//           Upload Images
//         </label>
//         <input
//           type="file"
//            name="file"
          
//           accept="image/*"
//           onChange={handleUpload}
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//         />
//         {newUploads.length > 0 && (
//           <button
//             onClick={handleSubmitUploads}
//             className="mt-4 px-4 py-2 bg-green-500 text-white font-medium rounded hover:bg-green-600"
//           >
//             Submit
//           </button>
//         )}
//       </div>

//       {/* Image Slider */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((image) => (
//           <div
//             key={image._id}
//             className="relative bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             {/* Image */}
//             <img
//               src={image.url}
//               alt="Uploaded"
//               className="w-full h-64 object-cover"
//             />

//             {/* Action Buttons */}
//             <div className="absolute top-2 right-2 flex space-x-2">
//               <button
//                 onClick={() => handleEdit(image._id)}
//                 className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(image._id)}
//                 className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hidden File Input for Editing */}
//       <input
//         ref={fileInputRef}
//         type="imageUrl"
//         accept="image/*"
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default Settings;











// import { useState } from "react";

// const Settings = () => {
//   const [images, setImages] = useState([]);

//   // Handle Image Upload
//   const handleUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const newImages = files.map((file) => ({
//       id: Date.now() + Math.random(), // Unique ID
//       url: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//   };

//   // Handle Delete Image
//   const handleDelete = (id) => {
//     setImages(images.filter((image) => image.id !== id));
//   };

//   // Handle Edit Image (Placeholder for future functionality)
//   const handleEdit = (id) => {
//     alert(`Edit functionality for image ID: ${id} is not implemented yet.`);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Title */}
//       <h1 className="text-5xl font-bold text-gray-900 mb-6 ">Slider </h1>

//       {/* Upload Button */}
//       <div className="mb-6">
//         <label className="block text-lg font-bold text-gray-900 mb-2">
//           Upload Images
//         </label>
//         <input
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleUpload}
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//         />
//       </div>

//       {/* Image Slider */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="relative bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             {/* Image */}
//             <img
//               src={image.url}
//               alt="Uploaded"
//               className="w-full h-64 object-cover"
//             />

//             {/* Action Buttons */}
//             <div className="absolute top-2 right-2 flex space-x-2">
//               <button
//                 onClick={() => handleEdit(image.id)}
//                 className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(image.id)}
//                 className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Settings;
