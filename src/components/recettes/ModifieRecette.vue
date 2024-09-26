<template>
  <div class="container">
    <h3>{{ $t('modify_recipe') }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="titre" class="form-label">{{ $t('title') }}</label>
        <input type="text" class="form-control" id="titre" v-model="recette.titre" required/>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">{{ $t('ingredients') }}</label>
        <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients" required/>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">{{ $t('type') }}</label>
        <select class="form-control" id="type" v-model="recette.type">
          <option value="dessert">{{ $t('dessert') }}</option>
          <option value="entree">{{ $t('entree') }}</option>
          <option value="plat">{{ $t('dish') }}</option>
        </select>
      </div>
      <button class="btn btn-success">{{ $t('modify') }}</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useRecetteStore } from '../../store/recetteStore';

const store = useRecetteStore();
const router = useRouter();
const route = useRoute();

const recette = ref({
  titre: '',
  ingredients: '',
  type: '',
});

onMounted(() => {
  const id = parseInt(route.params.id, 10);
  const existingRecette = store.getById(id);
  if (existingRecette) {
    recette.value = { ...existingRecette };
  } else {
    router.push('/recette-list');
  }
});

const onSubmit = () => {
  store.edit(recette.value.id, recette.value);
  router.push('/recette-list');
};
</script>

<style scoped></style>
