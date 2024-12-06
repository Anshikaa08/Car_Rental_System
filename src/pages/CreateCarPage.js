import React, { useState } from 'react';
import { createCar } from '../api/api';
import InputField from '../components/InputField';

const CreateCarPage = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, images: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCar(formData);
            alert('Car created successfully!');
        } catch (error) {
            console.error('Failed to create car:', error);
            alert('Failed to create car');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Car</h1>
            <InputField
                label="Title"
                name="title"
                value={formData.title}
                placeholder="Enter car title"
                onChange={handleChange}
            />
            <InputField
                label="Description"
                name="description"
                value={formData.description}
                placeholder="Enter car description"
                onChange={handleChange}
                isTextArea
            />
            <InputField
                label="Tags"
                name="tags"
                value={formData.tags}
                placeholder="Enter tags (comma-separated)"
                onChange={handleChange}
            />
            <div>
                <label>Upload Images</label>
                <input type="file" multiple onChange={handleFileChange} />
            </div>
            <button type="submit">Create Car</button>
        </form>
    );
};

export default CreateCarPage;
