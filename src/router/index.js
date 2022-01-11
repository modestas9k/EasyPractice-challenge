import { createRouter, createWebHistory } from "vue-router";
import EasyPay from '../views/EasyPay.vue';

const routes = [
    {
        path: '/',
        name: 'EasyPay',
        component: EasyPay,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
