<template>
  <div class="container">
    <h3>{{ $t('add_recipe_title') }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="titre" class="form-label">{{ $t('title_label') }}</label>
        <input type="text" class="form-control" id="titre" v-model="titre" required/>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">{{ $t('ingredients_label') }}</label>
        <input type="text" class="form-control" id="ingredients" v-model="ingredients" required/>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('type_label') }}</label>
        <select class="form-control" id="type" v-model="type">
          <option value="dessert">{{ $t('type_dessert') }}</option>
          <option value="entree">{{ $t('type_entree') }}</option>
          <option value="plat">{{ $t('type_plat') }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">{{ $t('image_label') }}</label>
        <input type="text" class="form-control" id="image" v-model="image" />
      </div>
      <button class="btn btn-success">{{ $t('add_button') }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecetteStore } from '../../store/recetteStore';
import { useRouter } from 'vue-router';

const store = useRecetteStore();
const router = useRouter();

const titre = ref('');
const ingredients = ref('');
const type = ref('dessert');
const image = ref(''); // Ajout d'une ref pour l'URL de l'image

const onSubmit = () => {
  store.add({
    titre: titre.value,
    ingredients: ingredients.value,
    type: type.value,
    image: image.value // Inclure l'URL de l'image
  });
  router.push('/recette-list');
};
</script>

<style scoped></style>
