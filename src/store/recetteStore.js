import { defineStore } from "pinia";
import { reactive } from "vue";

export const useRecetteStore = defineStore("recetteStore", {
  state: () => ({
    recettes: reactive([
      {
        id: 1,
        titre: "Crêpe Nutella",
        ingredients: "Farine, lait, oeuf, beurre, sucre",
        type: "Dessert",
        image: "/src/assets/images/chocolat.jpg",
      },
      {
        id: 2,
        titre: "Lasagne",
        ingredients: "Viande, tomate, feuille de lasagnes, béchamel",
        type: "Plat",
        image: "/src/assets/images/chocolat.jpg",
      },
    ]),
  }),
  actions: {
    add(recette) {
      this.recettes.push({ ...recette, id: this.recettes.length + 1 });
    },

    edit(id, recette) {
      const index = this.recettes.findIndex((r) => r.id === id);
      if (index !== -1) this.recettes[index] = { ...recette, id };
    },
    destroy(id) {
      this.recettes = this.recettes.filter((recette) => recette.id !== id);
    },
    getById(id) {
      return this.recettes.find((recette) => recette.id === id);
    },
  },
});
