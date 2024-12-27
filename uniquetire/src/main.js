import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import your language files
import en from './components/lang/locales/en.json';
import es from './components/lang/locales/es.json';
import bu from './components/lang/locales/bu.json';

const i18n = createI18n({
  legacy: false, // Use Composition API style
  locale: 'en', // Default language
  messages: {
    en: en,
    es: es,
    bu: bu,
  },
});

createApp(App).use(i18n).mount('#app');
