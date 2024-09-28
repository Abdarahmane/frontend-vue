// src/store/recetteStore.js
import { defineStore } from "pinia";
import { reactive } from "vue";
import axios from '../axios'; // Import your Axios instance

export const useRecetteStore = defineStore("recetteStore", {
  state: () => ({
    recettes: reactive([]), // Start with an empty array to hold fetched recipes
  }),
  
  actions: {
    // Fetch all recettes from the backend
    async fetchRecettes() {
      try {
        const response = await axios.get('/recettes'); // Adjust the endpoint based on your backend
        this.recettes = response.data; // Assuming the response contains the array of recettes
      } catch (error) {
        console.error('Error fetching recettes:', error);
      }
    },

    // Ajout d'une nouvelle recette
    async add(recette) {
      try {
        const response = await axios.post('/recettes', recette); // Adjust the endpoint
        this.recettes.push({ ...response.data }); // Assuming the response contains the added recette
      } catch (error) {
        console.error('Error adding recette:', error);
      }
    },

    // Modification d'une recette
    async edit(id, recette) {
      try {
        await axios.put(`/recettes/${id}`, recette); // Adjust the endpoint
        const index = this.recettes.findIndex((r) => r.id === id);
        if (index !== -1) this.recettes[index] = { ...recette, id };
      } catch (error) {
        console.error('Error editing recette:', error);
      }
    },

    // Suppression d'une recette
    async destroy(id) {
      try {
        await axios.delete(`/recettes/${id}`); // Adjust the endpoint
        const index = this.recettes.findIndex((recette) => recette.id === id);
        if (index !== -1) {
          this.recettes.splice(index, 1);
        }
      } catch (error) {
        console.error('Error deleting recette:', error);
      }
    },

    // Récupérer une recette par ID
    async getById(id) {
      try {
        const response = await axios.get(`/recettes/${id}`); // Adjust the endpoint
        return response.data; // Assuming the response contains the recette
      } catch (error) {
        console.error('Error fetching recette by ID:', error);
      }
    },

    // Filtrer les recettes par categoryId
    getByCategoryId(categoryId) {
      return this.recettes.filter((recette) => recette.categoryId === categoryId);
    },

    // Vérifier si une recette existe
    exists(id) {
      return this.recettes.some((recette) => recette.id === id);
    }
  },
});
