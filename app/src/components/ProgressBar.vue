<script setup lang="ts">
import { ref } from 'vue';

const barClass = ref(['progress', 'zero']);

const fillBar = () => {
  barClass.value = ['progress', 'fivty'];
  console.log('fill button');
};

const clearBar = () => {
  barClass.value = ['progress', 'zero'];
  console.log('clear button');
};
</script>

<template>
  <button @click.prevent="fillBar">Fill Bar</button>
  <button @click.prevent="clearBar">Clear Bar</button>
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
.progress.zero {
  width: 0%;
}

.progress.fivty {
  width: 50%;
}
</style>
