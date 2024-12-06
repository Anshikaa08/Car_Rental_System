import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/cars/${car.id}`);
    };

    return (
        <div className="car-card" style={styles.card}>
            {car.images?.length > 0 && (
                <img
                    src={car.images[0]}
                    alt={car.title}
                    style={styles.image}
                />
            )}
            <div style={styles.content}>
                <h3>{car.title}</h3>
                <p>{car.description}</p>
                <button style={styles.button} onClick={handleViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        width: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '4px',
    },
    content: {
        padding: '8px 0',
    },
    button: {
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default CarCard;
