// src/store/categorieStore.js
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from '../axios'; // Import your Axios instance

export const useCategoryStore = defineStore("categorieStore", () => {
  const categories = ref([]); // Start with an empty array to hold fetched categories

  // Fetch all categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get('/categories'); // Adjust the endpoint based on your backend
      categories.value = response.data; // Assuming the response contains the array of categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Actions pour ajouter, modifier, supprimer et obtenir une catégorie
  const addCategory = async (category) => {
    try {
      const response = await axios.post('/categories', category); // Adjust the endpoint
      categories.value.push({ ...response.data }); // Assuming the response contains the added category
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const editCategory = async (id, updatedCategory) => {
    try {
      await axios.put(`/categories/${id}`, updatedCategory); // Adjust the endpoint
      const index = categories.value.findIndex((cat) => cat.id === id);
      if (index !== -1) {
        categories.value[index] = { ...updatedCategory, id };
      }
    } catch (error) {
      console.error('Error editing category:', error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`/categories/${id}`); // Adjust the endpoint
      categories.value = categories.value.filter((category) => category.id !== id);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const getCategoryById = (id) => {
    return categories.value.find((category) => category.id === id);
  };

  // Fetch categories when store is initialized
  fetchCategories();

  // Retourne les catégories et les actions
  return {
    categories,
    addCategory,
    editCategory,
    deleteCategory,
    getCategoryById,
    fetchCategories, // Expose fetchCategories for component use
  };
});
