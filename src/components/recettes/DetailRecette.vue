<template>
  <div class="container">
    <h2>{{ $t('recipe_details') }}</h2>
    <div v-if="recette">
      <p><strong>{{ $t('title') }}</strong> {{ recette.titre }}</p>
      <p><strong>{{ $t('ingredients') }}</strong> {{ recette.ingredients }}</p>
      <p><strong>{{ $t('type') }}</strong> {{ recette.type }}</p>
    </div>
    <div v-else>
      <p>{{ $t('recipe_not_found') }}</p>
    </div>
    <router-link to="/recette-list" class="btn btn-secondary">{{ $t('back_to_list') }}</router-link>
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
