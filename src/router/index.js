import { createRouter, createWebHistory } from "vue-router";

// Importation des composants
import Home from '../components/Home.vue';
import AjoutRecette from '../components/recettes/AjoutRecette.vue';
import ModifieRecette from '../components/recettes/ModifieRecette.vue';
import ListeRecette from '../components/recettes/ListeRecette.vue';
import DetailRecette from '../components/recettes/DetailRecette.vue';

import ListeCategorie from '../components/categories/ListeCategorie.vue';
import AjoutCategorie from '../components/categories/AjoutCategorie.vue';
import ModifieCategorie from '../components/categories/ModifieCategorie.vue';
import DetailCategorie from '../components/categories/DetailCategorie.vue'; // Fix: Renamed and added missing import

// Définition des routes
const routes = [
  {
    path: "/",
    name: 'home',
    component: Home,
  },
  {
    path: "/recette-list",
    name: 'recettes',
    component: ListeRecette,
  },
  {
    path: "/recette/new",
    name: 'ajout-recette',
    component: AjoutRecette,
  },
  {
    path: "/recette/edit/:id",
    name: 'modifier-recette',
    component: ModifieRecette,
    props: true,
  },
  {
    path: "/recette/show/:id",
    name: 'detail-recette',
    component: DetailRecette,
    props: true,
  },
  {
    path: '/categories',
    name: 'ListeCategorie',
    component: ListeCategorie,
  },
  {
    path: '/category/new',
    name: 'AjoutCategorie',
    component: AjoutCategorie,
  },
  {
    path: '/category/show/:id',
    name: 'DetailCategorie', // Fix: Consistent naming
    component: DetailCategorie, // Fix: Corrected component name and import
  },
  {
    path: '/category/edit/:id',
    name: 'ModifieCategorie', // Fix: Consistent naming
    component: ModifieCategorie, // Fix: Corrected component name and import
  },
  {
    path: "/categorie/:categoryId/recettes",
    name: 'recettes-by-category',
    component: ListeRecette,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
