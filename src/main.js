import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router' // Vérifiez que cela pointe vers le bon chemin
import i18n from './i18n' // Importez le i18n

library.add(fas);
library.add(fab);
library.add(far);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon);
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n) // Utilisez i18n ici

app.mount('#app')
