// src/store/recetteStore.js
import { defineStore } from "pinia";
import axios from "axios";
import { useCategoryStore } from "./categoryStore"; // Import category store

export const useRecetteStore = defineStore("recettes", {
  state: () => ({
    recettes: [],
  }),

  actions: {
    // Load recettes from the API
    async loadDataFromApi() {
      try {
        const response = await axios.get("http://localhost:3000/api/recipes");
        this.recettes = response.data; // Assurez-vous que `response.data` contient `categorie`
      } catch (error) {
        console.error("Error fetching recettes:", error);
        this.recettes = [];
      }
    },

    // Add a new recette
    async addRecette(recette) {
      try {
        const response = await axios.post("http://localhost:3000/api/recipes", recette);
        this.recettes.push(response.data); // Assurez-vous que votre API retourne la recette ajoutée
      } catch (error) {
        console.error("Error adding recette: ", error);
        // Gérez l'erreur comme vous le souhaitez
      }
    },

    // Delete a recette
    async deleteRecette(id) {
      try {
        await axios.delete(`http://localhost:3000/api/recipes/${id}`);
        this.recettes = this.recettes.filter((recette) => recette.id !== id); // Reload recettes after deletion
      } catch (error) {
        console.error("Error deleting recette:", error);
      }
    },

    // Update an existing recette
    async updateRecette(updatedRecette) {
      try {
        const response = await axios.put(`http://localhost:3000/api/recipes/${updatedRecette.id}`, updatedRecette);
        const index = this.recettes.findIndex((r) => r.id === updatedRecette.id);
        if (index !== -1) {
          this.recettes[index] = { ...updatedRecette, id: updatedRecette.id };
        }
        console.log('Update response:', response.data); // Log the response
      } catch (error) {
        console.error("Error updating recette:", error.response ? error.response.data : error);
      }
    },
    

    // Get a recette by ID (no getter)
    getById(id) {
      return this.recettes.find((recette) => recette.id === id);
    },

    // Get recettes with category names based on category_id
    getRecettesWithCategoryNames() {
      const categoryStore = useCategoryStore(); // Access the category store

      return this.recettes.map((recette) => {
        const category = categoryStore.getCategoryById(recette.category_id);
        return {
          ...recette,
          categoryName: category ? category.name : "Unknown", // Add category name or fallback
        };
      });
    },
  },
});
