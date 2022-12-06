<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>&nbsp;
      <RouterLink :to="{ name: 'LifeSituation' }">Questionnaire</RouterLink>

      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
