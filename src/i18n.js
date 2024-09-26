import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome to Simplon Mauritania Kitchen',
    discover_text: 'Discover our delicious recipes, inspired by the flavors of Mauritania.',
    discover: 'Discover',
    add_recipe: 'Add a Recipe',
    title: 'Title',
    ingredients: 'Ingredients',
    type: 'Type',
    image_url: 'Image URL',
    type_options: {
      dessert: 'Dessert',
      entree: 'Entrée',
      plat: 'Dish',
    },
    edit_recipe: 'Edit a Recipe:',
    recipe_details: 'Recipe Details',
    no_recipe_found: 'The recipe was not found.',
    back_to_list: 'Back to the list',
    recipe_list: 'Recipe List',
    actions: 'Actions',
    new_recipe: 'New Recipe',
    delete: 'Delete',
    confirm_delete: 'Are you sure you want to delete this recipe?',
    home: 'Home', // Ajouté pour la navbar
  },
  fr: {
    welcome: 'Bienvenue dans la cuisine de Simplon Mauritanie',
    discover_text: 'Découvrez nos délicieuses recettes, inspirées des saveurs de la Mauritanie.',
    discover: 'Découvrir',
    add_recipe: 'Ajouter une recette ',
    title: 'Titre',
    ingredients: 'Ingrédients',
    type: 'Type',
    image_url: 'URL de l\'image',
    type_options: {
      dessert: 'Dessert',
      entree: 'Entrée',
      plat: 'Plat',
    },
    edit_recipe: 'Modifier une recette :',
    recipe_details: 'Détails de la recette',
    no_recipe_found: 'La recette n\'a pas été trouvée.',
    back_to_list: 'Retour à la liste',
    recipe_list: 'Liste des recettes',
    actions: 'Actions',
    new_recipe: 'Nouvelle recette',
    delete: 'Supprimer',
    confirm_delete: 'Êtes-vous sûr de vouloir supprimer cette recette ?',
    home: 'Accueil', // Ajouté pour la navbar
  }
};

const i18n = createI18n({
  locale: 'fr', // Défaut à la langue française
  messages,
});

export default i18n;
