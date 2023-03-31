<script setup lang="ts">
import store from '@/store';
import { ref } from 'vue';

const results = ref(store.getters.results);
const getIsCurrency = (key: string): boolean => {
  return key === 'income' || key === 'savings';
};
</script>

<template>
  <div class="result-panel">
    <div
      class="result-row"
      v-for="resultKey in Object.keys(results)"
      :key="resultKey"
    >
      <span class="result-key">{{ resultKey }}</span
      >: <span class="result-value">{{ results[resultKey] }}</span
      ><span v-if="getIsCurrency(resultKey)">€</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.result-panel {
  text-align: left;
}
.result-row {
  padding: 0.5rem;
}
</style>
