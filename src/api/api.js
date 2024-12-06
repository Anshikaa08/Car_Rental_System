import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/user'; // Update this if hosted elsewhere

// Login API
export const loginUser = async (credentials) => {
    return axios.post(`${API_BASE_URL}/login`, credentials);
};

// Signup API
export const registerUser = async (userData) => {
    return axios.post(`${API_BASE_URL}/signup`, userData);
};

// Fetch all cars
export const fetchUserCars = async () => {
    return axios.get(`${API_BASE_URL}/cars`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Assuming JWT
    });
};

// Create a car
export const createCar = async (carData) => {
    return axios.post(`${API_BASE_URL}/cars`, carData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};

// Update a car
export const updateCar = async (carId, updatedData) => {
    return axios.put(`${API_BASE_URL}/cars/${carId}`, updatedData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};

// Delete a car
export const deleteCar = async (carId) => {
    return axios.delete(`${API_BASE_URL}/cars/${carId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};
