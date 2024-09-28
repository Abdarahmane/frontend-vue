import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome to Simplon Mauritania Kitchen',
    discover_text: 'Discover our delicious recipes, inspired by the flavors of Mauritania.',
    discover: 'Discover',
    add_recipe: 'Add Recipe',
    title: 'Title',
    ingredients: 'Ingredients',
    type: 'Type',
    category: 'Category', // Added category translation
    image_url: 'Image URL', // Added for recipe image
    type_options: {
      dessert: 'Dessert',
      entree: 'Entrée',
      plat: 'Dish',
    },
    search: 'Search', // English

    edit_recipe: 'Edit Recipe:',
    recipe_details: 'Recipe Details',
    no_recipe_found: 'The recipe was not found.',
    back_to_list: 'Back to the list',
    recipe_list: 'Recipe List',
    actions: 'Actions',
    new_recipe: 'New Recipe',
    delete: 'Delete',
    confirm_delete: 'Are you sure you want to delete this recipe?',
    home: 'Home', // Added for navbar
    category_details: 'Category Details', // Added for category details
    category_name: 'Category Name', // Added for category name
    category_description: 'Category Description', // Added for category description
    no_description: 'No description available', // Added for missing description
    view_recipes: 'View Recipes', // Added for viewing recipes by category
    recipe_not_found: 'Recipe not found', // Added for not found message
    modify: 'Modify Recipe', // Added for editing
    no_category_found: 'No category found', // Added for category not found message
    select_category: 'Select a Category', // Added for category selection
  },

  fr: {
    welcome: 'Bienvenue dans la cuisine de Simplon Mauritanie',
    discover_text: 'Découvrez nos délicieuses recettes, inspirées des saveurs de la Mauritanie.',
    discover: 'Découvrir',
    add_recipe: 'Ajouter une recette',
    title: 'Titre',
    ingredients: 'Ingrédients',
    type: 'Type',
    category: 'Catégorie', // Added category translation
    image_url: 'URL de l\'image', // Added for recipe image
    type_options: {
      dessert: 'Dessert',
      entree: 'Entrée',
      plat: 'Plat',
    },
    search: 'Recherche', // French

    edit_recipe: 'Modifier une recette :',
    recipe_details: 'Détails de la recette',
    no_recipe_found: 'La recette n\'a pas été trouvée.',
    back_to_list: 'Retour à la liste',
    recipe_list: 'Liste des recettes',
    actions: 'Actions',
    new_recipe: 'Nouvelle recette',
    delete: 'Supprimer',
    confirm_delete: 'Êtes-vous sûr de vouloir supprimer cette recette ?',
    home: 'Accueil', // Added for navbar
    category_details: 'Détails de la Catégorie', // Added for category details
    category_name: 'Nom de la Catégorie', // Added for category name
    category_description: 'Description de la Catégorie', // Added for category description
    no_description: 'Aucune description disponible', // Added for missing description
    view_recipes: 'Voir les Recettes', // Added for viewing recipes by category
    recipe_not_found: 'Recette non trouvée', // Added for not found message
    modify: 'Modifier la recette', // Added for editing
    no_category_found: 'Aucune catégorie trouvée', // Added for category not found message
    select_category: 'Sélectionner une catégorie', // Added for category selection
  }
};

const i18n = createI18n({
  locale: 'en', // Default locale
  messages,
});

export default i18n;
