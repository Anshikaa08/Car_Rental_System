import React, { useState } from 'react';

const AddCar = ({ addCar }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState([]);
    const [images, setImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 10) {
            alert('You can upload a maximum of 10 images.');
            return;
        }
        setImages([...images, ...files]);
        const newPreviews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages([...previewImages, ...newPreviews]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (images.length === 0) {
            alert("Please upload at least one image.");
            return;
        }

        const carData = {
            title,
            description,
            tags,
            images,
        };

        addCar(carData);  // Add car API logic here
        // Reset form
        setTitle('');
        setDescription('');
        setTags([]);
        setImages([]);
        setPreviewImages([]);
    };

    return (
        <div className="add-car-container">
            <h2>Add a New Car</h2>
            <form onSubmit={handleSubmit}>
                {/* Title, Description, Tags, Image upload */}
                {/* Form code similar to what you had for Add Car */}
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddCar;
