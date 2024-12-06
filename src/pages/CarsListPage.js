import React, { useEffect, useState } from 'react';
import { fetchUserCars } from '../api/api';
import CarCard from '../components/CarCard';

const CarsListPage = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const loadCars = async () => {
            try {
                const response = await fetchUserCars();
                setCars(response.data);
            } catch (error) {
                console.error('Failed to load cars:', error);
            }
        };
        loadCars();
    }, []);

    return (
        <div>
            <h1>Your Cars</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarsListPage;
