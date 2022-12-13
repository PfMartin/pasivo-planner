<script setup lang="ts">
import { questionnaireRoutes } from '@/router/questionnaire-routes';
import ControlButtons from '@/components/ui/ControlButtons.vue';
import ProgressBar from '@/components/ui/ProgressBar.vue';
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
    return 'Home';
  }

  return routes.value[currentIndex - 1];
});

const progress = computed(() => {
  const currentRoute = <string>route.name;
  const currentIndex = routes.value.indexOf(currentRoute);

  return ((currentIndex + 1) / routes.value.length) * 100;
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
@import '@/style/colors.scss';
@import '@/style/outline.scss';
.content {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $neutral-grey;
  margin: 1rem 0;
  border-radius: $border-radius;
}
</style>
