<template>
  <div class="container d-flex flex-column align-items-center mt-5">
    <h2>{{ $t('Recipes Details') }}</h2>
    <form class="col-md-6">
      <div class="mb-3">
        <label for="titre" class="form-label"><strong>{{ $t('title') }}</strong></label>
        <input type="text" class="form-control" id="titre" v-model="recette.titre" readonly />
      </div>

      <div class="mb-3">
        <label for="ingredients" class="form-label"><strong>{{ $t('ingredients') }}</strong></label>
        <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients" readonly />
      </div>

      <div class="mb-3">
        <label for="type" class="form-label"><strong>{{ $t('type') }}</strong></label>
        <input type="text" class="form-control" id="type" v-model="recette.type" readonly />
      </div>

      <div class="mb-3">
        <label for="categorie" class="form-label"><strong>{{ $t('category') }}</strong></label>
        <input type="text" class="form-control" id="categorie" v-model="recette.categorie" readonly />
      </div>

      <div v-if="!recette">
        <p>{{ $t('recipe_not_found') }}</p>
      </div>

      <div class="d-flex justify-content-end">
        <router-link to="/recette-list" class="btn btn-secondary mt-3">{{ $t('back to list') }}</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRecetteStore } from '@/store/recetteStore';

const route = useRoute();
const store = useRecetteStore();
const recette = ref(null);

onMounted(() => {
  const id = parseInt(route.params.id);
  recette.value = store.getById(id);
});
</script>

<style scoped>
.container {
  margin-top: 20px; /* Adjust as needed */
}
</style>
