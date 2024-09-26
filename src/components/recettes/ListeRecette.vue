<template>
  <div class="container">
    <h2>{{ $t('recipe_list') }}</h2>
    <div class="d-flex justify-content-end mb-4">
      <router-link to="/recette/new" class="btn btn-danger">
        <i class="fas fa-plus"></i> {{ $t('new_recipe') }}
      </router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{{ $t('title') }}</th>
          <th scope="col">{{ $t('ingredients') }}</th>
          <th scope="col">{{ $t('type') }}</th>
          <th scope="col">{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in store.recettes" :key="item.id">
          <td scope="row">{{ item.id }}</td>
          <td>{{ item.titre }}</td>
          <td>{{ item.ingredients }}</td>
          <td>{{ item.type }}</td>
          <td>
            <router-link :to="`/recette/show/${item.id}`" class="btn btn-info btn-sm">
              <i class="fas fa-eye"></i> {{ $t('view') }}
            </router-link>
            <router-link :to="`/recette/edit/${item.id}`" class="btn btn-warning btn-sm">
              <i class="fas fa-edit"></i> {{ $t('edit') }}
            </router-link>
            <button @click="deleteRecette(item.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash"></i> {{ $t('delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRecetteStore } from '@/store/recetteStore';

const store = useRecetteStore();

const deleteRecette = (id) => {
  store.destroy(id);
};
</script>

<style scoped>
.btn-sm {
  margin: 0 2px;
}
</style>
