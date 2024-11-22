import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate

const EditSubcategory = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    useEffect(() => {
        axios
            .get(`/api/subcategories/${id}`)
            .then((response) => {
                setName(response.data.name);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.error('Error fetching subcategory', error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedSubcategory = { name, image };
        axios
            .put(`/api/subcategories/${id}`, updatedSubcategory)
            .then((response) => {
                // Use navigate to redirect to the subcategories page for the specific category
                navigate(`/subcategories/${response.data.categoryId}`);
            })
            .catch((error) => {
                console.error('Error updating subcategory', error);
            });
    };

    return (
        <div>
            <h2>Edit Subcategory</h2>
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditSubcategory;
