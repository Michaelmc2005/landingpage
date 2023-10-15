import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './HomePage.vue';

// Import your other components that act as pages
// import OtherPage from './OtherPage.vue';

const routes = [
  {
    path: '/',
    component: App,
  },
  // Add other routes as needed
  // {
  //   path: '/other',
  //   component: OtherPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
