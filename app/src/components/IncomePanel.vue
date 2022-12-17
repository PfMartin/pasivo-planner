<script setup lang="ts">
import store from '@/store';
import { ref } from 'vue';

const income = ref(0);

const storeValue = () => {
  store.dispatch('pushRating', income.value);
};
</script>

<template>
  <div class="income-panel">
    <label for="income"> Einkommen </label>
    <input v-model="income" id="income" />
    €
  </div>
</template>

<style scoped lang="scss"></style>
