// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/recettes', // Replace with your backend URL
  timeout: 10000, // Optional timeout
})
.then(response => {
  console.log('Recette ajoutée avec succès:', response.data);
})
.catch(error => {
  console.error('Erreur ajoutant la recette:', error.response.data);
});
export default instance;
