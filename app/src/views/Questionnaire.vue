<script setup lang="ts">
import ProgressBar from '@/components/ProgressBar.vue';
</script>

<template>
  <ProgressBar />

  <RouterLink :to="{ name: 'Profession' }">Profession</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Income' }">Income</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Savings' }">Savings</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'Children' }">Children</RouterLink>
  <RouterView />
</template>
