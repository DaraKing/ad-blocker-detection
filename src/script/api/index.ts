import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
    }
});

export default api;
