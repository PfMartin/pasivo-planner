<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';

const options: CardConfig[] = [
  {
    title: 'Schüler Student',
    detail: 'in Schule, Studium oder Ausbildung',
    pictureUrl: 'undraw/student.svg',
  },
  {
    title: 'Berufseinsteiger',
    detail: 'start in den Beruf gemeistert',
    pictureUrl: 'undraw/starting-to-work.svg',
  },
  {
    title: 'Mitten im Leben',
    detail: 'ca. 30 - 50 Jahre',
    pictureUrl: 'undraw/work.svg',
  },
  {
    title: 'Kurz vor der Rente',
    detail: 'ca. 50 - 65',
    pictureUrl: 'undraw/almost-retired.svg',
  },
  {
    title: 'Rentner',
    detail: 'älter als 65',
    pictureUrl: 'undraw/retired.svg',
  },
  {
    title: 'Es ist kompliziert',
    detail: 'keins trifft zu',
    pictureUrl: 'undraw/dont-know.svg',
  },
];
</script>

<template>
  <div class="life-situation-panel">
    <OptionCard
      v-for="option in options"
      :key="option.title"
      :cardConfig="option"
      :isSelected="false"
    />
  </div>
</template>

<style scoped lang="scss">
.life-situation-panel {
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
}

@media screen and (max-width: 750px) {
  .life-situation-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
