<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  progress: number;
}>();

const width = computed(() => {
  return `${props.progress}%`;
});
</script>

<template>
  <div class="progress-bar">
    <div class="bar">
      <div class="progress" :style="`width: ${width}`"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/colors.scss';
@import '@/style/outline.scss';
.progress-bar {
  display: flex;
  justify-content: center;
  .bar {
    width: 700px;
    height: 10px;
    background: $neutral-grey;
    border-radius: $border-radius;
    .progress {
      border-radius: $border-radius;
      width: 0%;
      height: 100%;
      background: $light-green;
      transition: width 0.6s ease-out;
    }
  }
}
</style>
