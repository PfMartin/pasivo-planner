<script setup lang="ts">
import { ref, watch } from 'vue';
import store from '@/store';

const income = ref(0);

watch(income, () => {
  store.dispatch('pushRating', { income: income.value });
  console.log(store.getters.results);
});
</script>

<template>
  <div class="income-panel">
    <label for="income"> Einkommen </label>
    <input v-model.number="income" id="income" />
    €
  </div>
</template>

<style scoped lang="scss"></style>
