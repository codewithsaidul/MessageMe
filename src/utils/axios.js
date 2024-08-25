import axios from "axios";



import { BaseURL } from "../config";

// Base URL => https://localhost:5000

const axiosInstance = axios.create({baseURL: BaseURL})

axios.interceptors.response.use((response) => response, (error) => Promise.reject(error.response && error.response.data) || "Something Went Wrong");




export default axiosInstance;