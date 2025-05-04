import axios from 'axios';

// Ensure the API URL always includes /api
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const API_URL = `${BASE_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api; 