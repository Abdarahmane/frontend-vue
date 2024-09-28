// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-url/api', // Replace with your backend URL
  timeout: 10000, // Optional timeout
});

export default instance;
