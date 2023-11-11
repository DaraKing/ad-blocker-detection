import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        // Add any other headers you need
    }
});

export default api;
