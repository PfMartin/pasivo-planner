<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import PanelFrame from '@/components/ui/PanelFrame.vue';
import store from '@/store';

const getPath = (pictureName: string): string => {
  if (process.env.NODE_ENV === 'production') {
    return `${store.getters.pluginPath}/assets/undraw/${pictureName}`;
  }

  return new URL(`../../assets/undraw/${pictureName}`, import.meta.url).href;
};

const options: CardConfig[] = [
  {
    title: 'Schüler | Student',
    detail: 'in Schule, Studium oder Ausbildung',
    pictureUrl: getPath('student.svg'),
    value: 1,
  },
  {
    title: 'Berufseinsteiger',
    detail: 'start in den Beruf gemeistert',
    pictureUrl: getPath('starting-to-work.svg'),
    value: 2,
  },
  {
    title: 'Mitten im Leben',
    detail: 'ca. 30 - 50 Jahre',
    pictureUrl: getPath('work.svg'),
    value: 3,
  },
  {
    title: 'Kurz vor der Rente',
    detail: 'ca. 50 - 65',
    pictureUrl: getPath('almost-retired.svg'),
    value: 4,
  },
  {
    title: 'Rentner',
    detail: 'älter als 65',
    pictureUrl: getPath('retired.svg'),
    value: 5,
  },
  {
    title: 'Es ist kompliziert',
    detail: 'keins trifft zu',
    pictureUrl: getPath('dont-know.svg'),
    value: 0,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', { lifeSituation: value });
  console.log(store.getters.results);
};
</script>

<template>
  <div class="life-situation-panel">
    <PanelFrame>
      <template v-slot:panel-content>
        <RouterLink :to="{ name: 'Profession' }" v-for="option in options">
          <OptionCard
            :key="option.title"
            :cardConfig="option"
            :isSelected="false"
            @select="storeValue"
          />
        </RouterLink>
      </template>
    </PanelFrame>
  </div>
</template>

<style scoped lang="scss"></style>
