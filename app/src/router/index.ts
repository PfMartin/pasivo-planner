import LifeSituationPanel from '@/components/LifeSituationPanel.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import ProfessionPanel from '@/components/ProfessionPanel.vue';
import ManagementPanel from '@/components/ManagementPanel.vue';
import ChildrenPanel from '@/components/ChildrenPanel.vue';
import GamblingPanel from '@/components/GamblingPanel.vue';
import SavingsPanel from '@/components/SavingsPanel.vue';
import IncomePanel from '@/components/IncomePanel.vue';
import Questionnaire from '@/views/Questionnaire.vue';
import GoalsPanel from '@/components/GoalsPanel.vue';
import RiskPanel from '@/components/RiskPanel.vue';
import Ending from '@/components/Ending.vue';
import Home from '@/views/Home.vue';

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
        meta: {
          id: 'lifeSituation',
        },
      },
      {
        path: 'profession',
        name: 'Profession',
        component: ProfessionPanel,
        meta: {
          id: 'profession',
        },
      },
      {
        path: 'income',
        name: 'Income',
        component: IncomePanel,
        meta: {
          id: 'income',
        },
      },
      {
        path: 'savings',
        name: 'Savings',
        component: SavingsPanel,
        meta: {
          id: 'savings',
        },
      },
      {
        path: 'children',
        name: 'Children',
        component: ChildrenPanel,
        meta: {
          id: 'children',
        },
      },
      {
        path: 'goals',
        name: 'Goals',
        component: GoalsPanel,
        meta: {
          id: 'goals',
        },
      },
      {
        path: 'risk',
        name: 'Risk',
        component: RiskPanel,
        meta: {
          id: 'risk',
        },
      },
      {
        path: 'management',
        name: 'Management',
        component: ManagementPanel,
        meta: {
          id: 'management',
        },
      },
      {
        path: 'gambling',
        name: 'Gambling',
        component: GamblingPanel,
        meta: {
          id: 'gambling',
        },
      },
      {
        path: 'ending',
        name: 'Ending',
        component: Ending,
        meta: {
          id: 'ending',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
