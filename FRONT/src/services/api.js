import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 15000
});

export default api;