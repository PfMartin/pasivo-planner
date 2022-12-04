<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  progress: number;
}>();

const progressMap: Record<string, string> = {
  ['0']: 'empty',
  ['20']: 'twenty',
  ['40']: 'fourty',
  ['60']: 'sixty',
  ['80']: 'eigthy',
  ['100']: 'full',
};

const barClass = ref(['progress', 'zero']);
watch(
  () => props.progress,
  (newValue: number) => {
    const progressString = `${newValue}`;
    barClass.value = ['progress', progressMap[progressString]];
  }
);
</script>

<template>
  <div class="progress-bar">
    <div class="bar">
      <div :class="barClass"></div>
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
.progress.empty {
  width: 0%;
}
.progress.twenty {
  width: 20%;
}
.progress.fourty {
  width: 40%;
}
.progress.sixty {
  width: 60%;
}
.progress.eighty {
  width: 80%;
}

.progress.full {
  width: 100%;
}
</style>
