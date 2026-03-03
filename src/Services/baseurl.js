// src/services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://rentserver-ltg6.onrender.com", // Render backend link
});

export default api;