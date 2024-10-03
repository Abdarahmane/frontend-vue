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
    new_recipe: 'New Recipe', // Only one definition
    search: 'Search',
    category_list: 'Category List', // Add translation for category list
    new_category: 'New Category',
    edit_recipe: 'Edit Recipe:',
    categories: 'Categories',
    Recipes_Lists: 'Recipes Lists',
    recipe_details: 'Recipe Details',
    no_recipe_found: 'The recipe was not found.',
    back_to_list: 'Back to the list',
    recipe_list: 'Recipe List',
    actions: 'Actions',
    delete: 'Delete',
    confirm_delete: 'Are you sure you want to delete this recipe?',
    home: 'Home',
    category_details: 'Category Details',
    category_name: 'Category Name',
    category_description: 'Category Description',
    no_description: 'No description available',
    view_recipes: 'View Recipes',
    recipe_not_found: 'Recipe not found',
    modify: 'Modify Recipe',
    no_category_found: 'No category found',
    select_category: 'Select a Category',
    add_category: 'Add a New Category',
    enter_category_name: 'Enter the category name',
    add: 'Add',
    cancel: 'Cancel',
  },

  fr: {
    welcome: 'Bienvenue dans la cuisine de Simplon Mauritanie',
    discover_text: 'Découvrez nos délicieuses recettes, inspirées des saveurs de la Mauritanie.',
    discover: 'Découvrir',
    add_recipe: 'Ajouter une recette',
    title: 'Titre',
    ingredients: 'Ingrédients',
    type: 'Type',
    category: 'Catégorie', 
    image_url: 'URL de l\'image', 
    type_options: {
      dessert: 'Dessert',
      entree: 'Entrée',
      plat: 'Plat',
    },
    new_recipe: 'Nouvelle Recette', // Correct translation
    search: 'Recherche',
    category_list: 'Liste des Catégories', // Add translation for category list in French
    new_category: 'Nouvelle Catégorie',
    edit_recipe: 'Modifier une recette :',
    recipe_details: 'Détails de la recette',
    no_recipe_found: 'La recette n\'a pas été trouvée.',
    back_to_list: 'Retour à la liste',
    recipes_list: 'Liste des recettes',
    actions: 'Actions',
    delete: 'Supprimer',
    Recipes_Lists: 'Liste des Recettes',
    categories: 'Catégories',
    confirm_delete: 'Êtes-vous sûr de vouloir supprimer cette recette ?',
    home: 'Accueil',
    category_details: 'Détails de la Catégorie',
    category_name: 'Nom de la Catégorie',
    category_description: 'Description de la Catégorie',
    no_description: 'Aucune description disponible',
    view_recipes: 'Voir les Recettes',
    recipe_not_found: 'Recette non trouvée',
    modify: 'Modifier la recette',
    no_category_found: 'Aucune catégorie trouvée',
    select_category: 'Sélectionner une catégorie',
    add_category: 'Ajouter une nouvelle catégorie',
    enter_category_name: 'Entrez le nom de la catégorie',
    add: 'Ajouter',
    cancel: 'Annuler'
  },
};

const i18n = createI18n({
  locale: 'en', // Default locale
  messages,
});

export default i18n;
