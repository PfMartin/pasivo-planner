<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';

const options: CardConfig[] = [
  {
    name: 'Schüler Student',
    detail: 'in Schule, Studium oder Ausbildung',
    icon: 'student',
  },
  {
    name: 'Berufseinsteiger',
    detail: 'start in den Beruf gemeistert',
    icon: 'student',
  },
  {
    name: 'Mitten im Leben',
    detail: 'ca. 30 - 50 Jahre',
    icon: 'student',
  },
  {
    name: 'Kurz vor der Rente',
    detail: 'ca. 50 - 65',
    icon: 'student',
  },
  {
    name: 'Rentner',
    detail: 'älter als 65',
    icon: 'student',
  },
  {
    name: 'Es ist kompliziert',
    detail: 'keins trifft zu',
    icon: 'student',
  },
];
</script>

<template>
  <div class="life-situation-panel"></div>
</template>

<style scoped lang="scss"></style>
