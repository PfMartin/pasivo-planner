<script setup lang="ts">
import ControlButtons from '@/components/ControlButtons.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';

const routeProgress: Record<string, number> = {
  LifeSituation: 0,
  Profession: 20,
  Income: 40,
  Savings: 60,
  Children: 80,
};

const route = useRoute();
const nextRoute = computed((): string => {
  const routes = Object.keys(routeProgress);
  const currentIndex = routes.indexOf(<string>route.name);

  return currentIndex === routes.length - 1 ? '' : routes[currentIndex + 1];
});

const prevRoute = computed((): string => {
  const routes = Object.keys(routeProgress);
  const currentIndex = routes.indexOf(<string>route.name);

  if (currentIndex === 0) {
    return '';
  }

  return routes[currentIndex - 1];
});

const progress = ref(0);
watch(
  () => route.path,
  () => {
    const name = <string>route.name;
    progress.value = routeProgress[name];
  }
);
</script>

<template>
  <ProgressBar :progress="progress" />
  <div>
    <RouterLink :to="{ name: 'Profession' }">Profession</RouterLink>&nbsp;
    <RouterLink :to="{ name: 'Income' }">Income</RouterLink>&nbsp;
    <RouterLink :to="{ name: 'Savings' }">Savings</RouterLink>&nbsp;
    <RouterLink :to="{ name: 'Children' }">Children</RouterLink>
    <RouterView />
  </div>
  <ControlButtons :toBack="prevRoute" :toNext="nextRoute" />
</template>
