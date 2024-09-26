import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import Ajout from '../components/recettes/AjoutRecette.vue'
import Modifie from '../components/recettes/ModifieRecette.vue'
import Liste from '../components/recettes/ListeRecette.vue'
import Detail from '../components/recettes/DetailRecette.vue'

const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
    },
    {
        path: "/recette-list",
        name: 'recettes',
        component: Liste,
    },
    {
        path: "/recette/new",
        name: 'ajout-recette',
        component: Ajout,
    },
    {
        path: "/recette/edit/:id",
        name: 'modifier-recette',
        component: Modifie,
    },
    {
        path: "/recette/show/:id",
        name: 'detail-recette',
        component: Detail,
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

// router/index.js
// import { createRouter, createWebHistory } from 'vue-router';
// import ListeRecette from '../components/ListeRecette.vue';
// import AjoutRecette from '../components/AjoutRecette.vue';
// import ModifieRecette from '../components/ModifieRecette.vue';

// const routes = [
//   { path: '/', redirect: '/recette-list' },
//   { path: '/recette-list', component: ListeRecette },
//   { path: '/recette/new', component: AjoutRecette },
//   { path: '/recette/edit/:id', component: ModifieRecette, props: true },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;
