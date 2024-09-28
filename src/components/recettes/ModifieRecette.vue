<template>
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
    <div class="col-md-6">
      <h3 class="text-center">{{ $t('Modify Recipe') }}</h3>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="titre" class="form-label">{{ $t('title') }}</label>
          <input type="text" class="form-control" id="titre" v-model="recette.titre" required />
        </div>
        <div class="mb-3">
          <label for="ingredients" class="form-label">{{ $t('ingredients') }}</label>
          <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients" required />
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">{{ $t('type') }}</label>
          <select class="form-control" id="type" v-model="recette.type">
            <option value="dessert">{{ $t('dessert') }}</option>
            <option value="entree">{{ $t('entree') }}</option>
            <option value="plat">{{ $t('dish') }}</option>
          </select>
        </div>

        <!-- Dropdown for categories -->
        <div class="mb-3">
          <label for="categorie" class="form-label">{{ $t('Category') }}</label>
          <select class="form-select" id="categorie" v-model="recette.categorie" required>
            <option value="" disabled>{{ $t('Select a Category') }}</option>
            <option v-for="category in categories" :key="category.id" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>

        <button class="btn btn-success w-30">{{ $t('modify') }}</button>
      </form>

      <div class="d-flex justify-content-end mt-3">
        <router-link to="/recette-list" class="btn btn-secondary">
          {{ $t('back to list') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRecetteStore } from '../../store/recetteStore';
import { useCategoryStore } from '../../store/categoryStore'; // Import category store

const store = useRecetteStore();
const categoryStore = useCategoryStore(); // Use category store
const router = useRouter();
const route = useRoute();

const recette = ref({
  titre: '',
  ingredients: '',
  type: '',
  categorie: '', // Add category field
});

const categories = ref([]); // Reference for categories

// Fetch categories on component mount
onMounted(() => {
  const id = parseInt(route.params.id, 10);
  const existingRecette = store.getById(id);
  if (existingRecette) {
    recette.value = { ...existingRecette };
  } else {
    router.push('/recette-list');
  }
  categories.value = categoryStore.categories; // Populate categories
});

const onSubmit = () => {
  store.edit(recette.value.id, recette.value);
  router.push('/recette-list');
};
</script>

<style scoped>
/* Optional: You can add some custom styles here if needed */
</style>
