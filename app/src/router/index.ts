import { questionnaireRoutes } from '@/router/questionnaire-routes';
import { createRouter, createWebHashHistory } from 'vue-router';
import Questionnaire from '@/views/Questionnaire.vue';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    redirect: { name: 'LifeSituation' },
    component: Questionnaire,
    children: questionnaireRoutes,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
