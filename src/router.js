import { createRouter, createWebHistory } from 'vue-router';
import MobileHomeScreen from './mobileComps/MobileHomeScreen.vue';
import MobileOurMission from './mobileComps/MobileOurMission.vue';

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: MobileHomeScreen
  },
  {
    path: '/our-mission',
    name: 'our-mission',
    component: MobileOurMission
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
