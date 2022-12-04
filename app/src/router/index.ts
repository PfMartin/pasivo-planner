import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Questionnaire from '@/views/Questionnaire.vue';
import LifeSituationPanel from '@/components/LifeSituationPanel.vue';
import ProfessionPanel from '@/components/ProfessionPanel.vue';
import IncomePanel from '@/components/IncomePanel.vue';
import SavingsPanel from '@/components/SavingsPanel.vue';
import ChildrenPanel from '@/components/ChildrenPanel.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire,
    children: [
      {
        path: 'life-situation',
        name: 'LifeSituation',
        component: LifeSituationPanel,
      },
      {
        path: 'profession',
        name: 'Profession',
        component: ProfessionPanel,
      },
      {
        path: 'income',
        name: 'Income',
        component: IncomePanel,
      },
      {
        path: 'savings',
        name: 'Savings',
        component: SavingsPanel,
      },
      {
        path: 'children',
        name: 'Children',
        component: ChildrenPanel,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
