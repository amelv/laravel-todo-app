import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/roboto-font/roboto-font.css';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {},
});
app.use(VueQueryPlugin);
console.log(app);
app.mount('#app');
