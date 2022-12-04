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

<style scoped lang="css">
.progress-bar {
  display: flex;
  justify-content: center;
}

.bar {
  width: 500px;
  height: 10px;
  background: #eee;
  border-radius: 10px;
}

.progress {
  border-radius: 10px;
  width: 0%;
  height: 100%;
  background: #68937c;
  transition: width 0.6s ease-out;
}
</style>
