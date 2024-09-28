<template>
  <div class="container d-flex justify-content-center" style="min-height: 100vh;">
    <div class="col-md-6" style="margin-top: 20px;"> <!-- Adjust margin-top as needed -->
      <h3 class="text-center">{{ $t('Add Recipe') }}</h3>
      <form @submit.prevent="onSubmit">
        <!-- Titre -->
        <div class="mb-3">
          <label for="titre" class="form-label">{{ $t('Title') }}</label>
          <input type="text" class="form-control" id="titre" v-model="titre" required />
        </div>

        <!-- Ingrédients -->
        <div class="mb-3">
          <label for="ingredients" class="form-label">{{ $t('Ingredients') }}</label>
          <input type="text" class="form-control" id="ingredients" v-model="ingredients" required />
        </div>

        <!-- Type de recette -->
        <div class="mb-3">
          <label for="type" class="form-label">{{ $t('Type') }}</label>
          <select class="form-select" id="type" v-model="type">
            <option value="dessert">{{ $t('type options.dessert') }}</option>
            <option value="entree">{{ $t('type options.entree') }}</option>
            <option value="plat">{{ $t('type options.plat') }}</option>
          </select>
        </div>

        <!-- Dropdown pour la catégorie -->
        <div class="mb-3">
          <label for="categorie" class="form-label">{{ $t('Category') }}</label>
          <select class="form-select" id="categorie" v-model="selectedCategory" required>
            <option value="" disabled>{{ $t('Select a Category') }}</option>
            <option v-for="category in categories" :key="category.id" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>

        <!-- Bouton d'ajout -->
        <button class="btn btn-success w-30">{{ $t('Add Recipe') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecetteStore } from '../../store/recetteStore';
import { useCategoryStore } from '../../store/categoryStore'; // Import the category store
import { useRouter } from 'vue-router';

const store = useRecetteStore();
const categoryStore = useCategoryStore(); // Use the category store
const router = useRouter();

const titre = ref('');
const ingredients = ref('');
const type = ref('dessert');
const selectedCategory = ref(null); // Reference for selected category
const categories = ref([]); // Reference for categories

// Fetch categories on component mount
onMounted(() => {
  categories.value = categoryStore.categories; // Fill categories from the store
});

const onSubmit = () => {
  store.add({
    titre: titre.value,
    ingredients: ingredients.value,
    type: type.value,
    categorie: selectedCategory.value, // Include the selected category
  });
  router.push('/recette-list');
};
</script>

<style scoped>
/* You can add custom styles here */
.container {
  margin-top: 20px; /* Adjust this value to move the form higher or lower */
}
</style>
