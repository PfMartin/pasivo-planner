import LifeSituationPanel from '@/components/LifeSituationPanel.vue';
import ProfessionPanel from '@/components/ProfessionPanel.vue';
import ManagementPanel from '@/components/ManagementPanel.vue';
import ChildrenPanel from '@/components/ChildrenPanel.vue';
import GamblingPanel from '@/components/GamblingPanel.vue';
import SavingsPanel from '@/components/SavingsPanel.vue';
import IncomePanel from '@/components/IncomePanel.vue';
import ResultPanel from '@/components/ResultPanel.vue';
import GoalsPanel from '@/components/GoalsPanel.vue';
import RiskPanel from '@/components/RiskPanel.vue';

export const questionnaireRoutes = [
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
    path: 'result',
    name: 'Result',
    component: ResultPanel,
    meta: {
      id: 'result',
    },
  },
];
