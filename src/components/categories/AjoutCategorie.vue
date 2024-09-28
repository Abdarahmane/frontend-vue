<template>
  <div class="container mt-4">
    <div class="card shadow">
      <div class="card-header">
        <h2>Ajouter une nouvelle catégorie</h2>
      </div>
      <div class="card-body">
        <form @submit.prevent="ajouterCategorie">
          <div class="mb-3">
            <label for="name" class="form-label">Nom de la catégorie :</label>
            <input 
              v-model="newCategory.name" 
              id="name" 
              class="form-control" 
              placeholder="Entrez le nom de la catégorie"
              required 
            />
          </div>

          <div class="d-flex justify-content-between">
            <button type="submit" class="btn btn-primary">Ajouter</button>
            <button @click="annuler" type="button" class="btn btn-secondary">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from '../../store/categoryStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const categoryStore = useCategoryStore();
    const newCategory = ref({ name: '' });
    const router = useRouter();

    const ajouterCategorie = () => {
      if (newCategory.value.name) {
        categoryStore.addCategory(newCategory.value);
        newCategory.value.name = '';
        router.push('/categories');
      }
    };

    const annuler = () => {
      newCategory.value.name = '';
      router.push('/categories');
    };

    return {
      newCategory,
      ajouterCategorie,
      annuler,
    };
  },
};
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: auto;
}
</style>
