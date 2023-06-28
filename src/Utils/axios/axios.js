import axios from "axios";

// let baseURL = "https://fog-node-server.onrender.com";
let baseURL = "http://localhost:4000";

export const axiosClient = axios.create({
    baseURL,
    withCredentials: true,
});
