// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/recipes', // Replace with your backend URL
  timeout: 10000, // Optional timeout
});

export default instance;
