<script setup lang="ts">
const emit = defineEmits<{
  (e: "forward-button-clicked"): void;
}>();
</script>

<template>
  <button @click="emit('forward-button-clicked')">Los gehts!</button>
</template>

<style scoped></style>
