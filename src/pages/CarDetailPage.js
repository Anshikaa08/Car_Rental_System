import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserCars, deleteCar } from '../api/api';

const CarDetailPage = () => {
    const { carId } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);

    useEffect(() => {
        const loadCar = async () => {
            try {
                const response = await fetchUserCars();
                const car = response.data.find((c) => c.id === parseInt(carId));
                setCar(car);
            } catch (error) {
                console.error('Failed to load car:', error);
            }
        };
        loadCar();
    }, [carId]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this car?')) {
            try {
                await deleteCar(carId);
                alert('Car deleted successfully!');
                navigate('/cars');
            } catch (error) {
                console.error('Failed to delete car:', error);
                alert('Failed to delete car');
            }
        }
    };

    if (!car) return <p>Loading...</p>;

    return (
        <div>
            <h1>{car.title}</h1>
            <p>{car.description}</p>
            <p>Tags: {car.tags}</p>
            {car.images && car.images.map((image, index) => (
                <img key={index} src={image} alt={`Car ${index}`} width={200} />
            ))}
            <button onClick={() => navigate(`/edit-car/${car.id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default CarDetailPage;
