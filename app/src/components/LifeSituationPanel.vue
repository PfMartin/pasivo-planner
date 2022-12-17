<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import store from '@/store';

const options: CardConfig[] = [
  {
    title: 'Schüler | Student',
    detail: 'in Schule, Studium oder Ausbildung',
    pictureUrl: 'undraw/student.svg',
    value: 1,
  },
  {
    title: 'Berufseinsteiger',
    detail: 'start in den Beruf gemeistert',
    pictureUrl: 'undraw/starting-to-work.svg',
    value: 2,
  },
  {
    title: 'Mitten im Leben',
    detail: 'ca. 30 - 50 Jahre',
    pictureUrl: 'undraw/work.svg',
    value: 3,
  },
  {
    title: 'Kurz vor der Rente',
    detail: 'ca. 50 - 65',
    pictureUrl: 'undraw/almost-retired.svg',
    value: 4,
  },
  {
    title: 'Rentner',
    detail: 'älter als 65',
    pictureUrl: 'undraw/retired.svg',
    value: 5,
  },
  {
    title: 'Es ist kompliziert',
    detail: 'keins trifft zu',
    pictureUrl: 'undraw/dont-know.svg',
    value: 0,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', value);
};
</script>

<template>
  <div class="life-situation-panel">
    <RouterLink :to="{ name: 'Profession' }" v-for="option in options">
      <OptionCard
        :key="option.title"
        :cardConfig="option"
        :isSelected="false"
        @select="storeValue"
      />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.life-situation-panel {
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
}

@media screen and (max-width: 750px) {
  .life-situation-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
