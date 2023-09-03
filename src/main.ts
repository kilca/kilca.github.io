import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import { tr, setLanguage } from './utils/utils';

const app = createApp(App).use(router).use(store);

// Provide the getLocalizedContent function and setLanguage function globally
app.provide('tr', tr);
app.provide('setLanguage', setLanguage);

app.mount('#app');

