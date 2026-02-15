import axios from "axios";

const API = axios.create({
    baseURL: "https://one-xuug.onrender.com" // backend URL
});

export default API;
