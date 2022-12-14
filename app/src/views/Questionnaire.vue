<script setup lang="ts">
import { questionnaireRoutes } from '@/router/questionnaire-routes';
import ControlButtons from '@/components/ui/ControlButtons.vue';
import ProgressBar from '@/components/ui/ProgressBar.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const routes = computed(() => questionnaireRoutes.map((r) => r.name));
const currentHeadline = computed(
  () =>
    questionnaireRoutes.find((r) => r.name === route.name)?.meta.headline ||
    'Something went wrong'
);

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
  <ControlButtons :toBack="prevRoute" :toNext="nextRoute" />
  <div class="panel">
    <h3 class="headline">{{ currentHeadline }}</h3>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/colors.scss';
@import '@/style/outline.scss';

.panel {
  background: $neutral-grey;
  border-radius: $border-radius;
  margin-top: 1rem;
  padding: 0.5rem 0.5rem;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
