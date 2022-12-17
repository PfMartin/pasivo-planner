<script setup lang="ts">
import store from '@/store';
import { ref } from 'vue';

const savings = ref(0);

const storeValue = () => {
  store.dispatch('pushRating', savings.value);
};
</script>

<template>
  <div class="savings-panel">
    <label for="savings"> Einkommen </label>
    <input v-model="savings" id="savings" />
    €
  </div>
</template>

<style scoped lang="scss"></style>
