<script setup lang="ts"></script>

<template>
  <RouterLink :to="{ name: 'Home' }">Home</RouterLink>&nbsp;
  <RouterLink :to="{ name: 'About' }">About</RouterLink>

  <RouterView />
</template>

<style scoped></style>
