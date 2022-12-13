<script setup lang="ts">
import { questionnaireRoutes } from '@/router/questionnaire-routes';
import ControlButtons from '@/components/ControlButtons.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const routes = computed(() => questionnaireRoutes.map((route) => route.name));

const route = useRoute();
const nextRoute = computed((): string => {
  const currentIndex = routes.value.indexOf(<string>route.name);

  return currentIndex === routes.value.length - 1
    ? ''
    : routes.value[currentIndex + 1];
});

const prevRoute = computed((): string => {
  const currentIndex = routes.value.indexOf(<string>route.name);

  if (currentIndex === 0) {
    return '';
  }

  return routes.value[currentIndex - 1];
});

const progress = computed(() => {
  const currentRoute = <string>route.name;
  const currentIndex = routes.value.indexOf(currentRoute);

  return (currentIndex / routes.value.length) * 100;
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
