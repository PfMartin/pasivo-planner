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
      headline: 'In welcher Lebensituation befindest du dich?',
    },
  },
  {
    path: 'profession',
    name: 'Profession',
    component: ProfessionPanel,
    meta: {
      id: 'profession',
      headline: 'Womit verdienst du hauptsächlich dein Geld?',
    },
  },
  {
    path: 'income',
    name: 'Income',
    component: IncomePanel,
    meta: {
      id: 'income',
      headline: 'Wie viel möchtest du sparen?',
    },
  },
  {
    path: 'savings',
    name: 'Savings',
    component: SavingsPanel,
    meta: {
      id: 'savings',
      headline: 'Hast du bereits Erspartes?',
    },
  },
  {
    path: 'children',
    name: 'Children',
    component: ChildrenPanel,
    meta: {
      id: 'children',
      headline: 'Wie viele Kinder hast du?',
    },
  },
  {
    path: 'goals',
    name: 'Goals',
    component: GoalsPanel,
    meta: {
      id: 'goals',
      headline: 'Wofür möchtest du Geld sparen und anlegen?',
    },
  },
  {
    path: 'risk',
    name: 'Risk',
    component: RiskPanel,
    meta: {
      id: 'risk',
      headline:
        'Wie viel Risiko kannst und willst du für höhere Renditen eingehen?',
    },
  },
  {
    path: 'management',
    name: 'Management',
    component: ManagementPanel,
    meta: {
      id: 'management',
      headline: 'Wie möchtest du deine Geldanlage verwalten?',
    },
  },
  {
    path: 'gambling',
    name: 'Gambling',
    component: GamblingPanel,
    meta: {
      id: 'gambling',
      headline:
        'Möchtest du zusätzlich mit riskanten Anlagen zocken oder spekulieren?',
    },
  },
  {
    path: 'result',
    name: 'Result',
    component: ResultPanel,
    meta: {
      id: 'result',
      headline: 'Ergebnisse',
    },
  },
];
