import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const EditCategory = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        axios
            .get(`/api/categories/${id}`)
            .then((response) => {
                setName(response.data.name);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.error('Error fetching category', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedCategory = { name, image };
        axios
            .put(`/api/categories/${id}`, updatedCategory)
            .then(() => {
                navigate('/categories'); // Replace history.push with navigate
            })
            .catch((error) => {
                console.error('Error updating category', error);
            });
    };

    return (
        <div>
            <h2>Edit Category</h2>
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditCategory;
