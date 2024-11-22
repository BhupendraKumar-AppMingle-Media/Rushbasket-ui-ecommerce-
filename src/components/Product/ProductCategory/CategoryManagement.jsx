import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        axios.get('/api/categories')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = { name, image };
        axios
            .post('/api/categories', newCategory)
            .then((response) => {
                setCategories([...categories, response.data]);
                setName('');
                setImage('');
            })
            .catch((error) => {
                console.error('Error adding category', error);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`/api/categories/${id}`)
            .then(() => {
                setCategories(categories.filter((category) => category._id !== id));
            })
            .catch((error) => {
                console.error('Error deleting category', error);
            });
    };

    const handleEdit = (category) => {
        navigate(`/edit-category/${category._id}`); // Replace history.push with navigate
    };

    const handleSubcategories = (categoryId) => {
        navigate(`/subcategories/${categoryId}`); // Replace history.push with navigate
    };

    return (
        <div>
            <h2>Category Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Category Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Add Category</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(categories) && categories.length > 0 ? (
                        categories.map((category) => (
                            <tr key={category._id}>
                                <td>{category.name}</td>
                                <td>
                                    <img src={category.image} alt={category.name} width="50" />
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(category)}>Edit</button>
                                    <button onClick={() => handleDelete(category._id)}>Delete</button>
                                    <button onClick={() => handleSubcategories(category._id)}>Subcategories</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No categories available.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryManagement;
