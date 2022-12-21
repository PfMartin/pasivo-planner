<script setup lang="ts">
import { ref, watch } from 'vue';
import store from '@/store';

const savings = ref(0);

watch(savings, () => {
  store.dispatch('pushRating', { savings: savings.value });
  console.log(store.getters.results);
});
</script>

<template>
  <div class="savings-panel">
    <label for="savings"> Einkommen </label>
    <input v-model.number="savings" id="savings" />
    €
  </div>
</template>

<style scoped lang="scss"></style>
