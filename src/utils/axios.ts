// src/utils/axios.ts
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://restcountries.com/v3.1", 
  headers: {
    Accept: "application/json"
  }
});

export default axiosClient;
