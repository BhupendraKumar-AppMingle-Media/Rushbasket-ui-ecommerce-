import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SubcategoryManagement = () => {
    const [subcategories, setSubcategories] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const { categoryId } = useParams();
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        axios
            .get(`/api/subcategories/${categoryId}`)
            .then((response) => {
                setSubcategories(response.data);
            })
            .catch((error) => {
                console.error('Error fetching subcategories', error);
            });
    }, [categoryId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSubcategory = { name, image, categoryId };
        axios
            .post('/api/subcategories', newSubcategory)
            .then((response) => {
                setSubcategories([...subcategories, response.data]);
                setName('');
                setImage('');
            })
            .catch((error) => {
                console.error('Error adding subcategory', error);
            });
    };

    const handleDelete = (id) => {
        axios
            .delete(`/api/subcategories/${id}`)
            .then(() => {
                setSubcategories(subcategories.filter((subcategory) => subcategory._id !== id));
            })
            .catch((error) => {
                console.error('Error deleting subcategory', error);
            });
    };

    const handleEdit = (subcategory) => {
        navigate(`/edit-subcategory/${subcategory._id}`); // Replace history.push with navigate
    };

    return (
        <div>
            <h2>Subcategory Management</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Subcategory Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Subcategory Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
                <button type="submit">Add Subcategory</button>
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
                    {subcategories.map((subcategory) => (
                        <tr key={subcategory._id}>
                            <td>{subcategory.name}</td>
                            <td>
                                <img src={subcategory.image} alt={subcategory.name} width="50" />
                            </td>
                            <td>
                                <button onClick={() => handleEdit(subcategory)}>Edit</button>
                                <button onClick={() => handleDelete(subcategory._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubcategoryManagement;
