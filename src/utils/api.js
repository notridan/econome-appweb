import Axios from "axios";
const token = localStorage.getItem('token');
const axios = Axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
    },
    withCredentials: true
});

export default axios;