<script setup lang="ts">
import ControlButtons from '@/components/ControlButtons.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const routeProgress: Record<string, number> = {
  Home: 0,
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

const progress = computed(() => {
  const name = <string>route.name;
  return routeProgress[name];
});
</script>

<template>
  <ProgressBar :progress="progress" />
  <div class="content">
    <RouterView />
  </div>
  <ControlButtons :toBack="prevRoute" :toNext="nextRoute" />
</template>

<style scoped lang="scss">
.content {
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
