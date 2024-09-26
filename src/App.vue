<template>
  <div class="container-fluid">
    <!-- Barre de navigation fixe avec Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Restaurant</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">{{ $t('home') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recette/new" class="nav-link">{{ $t('add_recipe') }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/recette-list" class="nav-link">{{ $t('recipe_list') }}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <!-- Select pour changer la langue -->
              <select @change="changeLanguage($event)" class="form-select bg-dark text-white">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <div class="content" style="margin-top: 80px;">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

function changeLanguage(event) {
  locale.value = event.target.value
}
</script>


<style scoped>
/* Ajustez la marge supérieure pour éviter le chevauchement avec la barre de navigation */
.content {
  padding-top: 20px;
}
</style>
