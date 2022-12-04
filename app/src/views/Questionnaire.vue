<script setup lang="ts">
import ProgressBar from '@/components/ProgressBar.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const routeProgress: Record<string, number> = {
  profession: 0,
  income: 20,
  savings: 40,
  children: 60,
};

const progress = ref(0);
watch(
  () => route.path,
  () => {
    const newRouteNameString = route.path.split('/').reverse()[0];
    progress.value = routeProgress[newRouteNameString];
  }
);
</script>

<template>
  <ProgressBar :progress="progress" />

  <RouterLink :to="{ name: 'Profession' }">Profession</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Income' }">Income</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Savings' }">Savings</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Children' }">Children</RouterLink>
  <RouterView />
</template>
