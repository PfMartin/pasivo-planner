<script setup lang="ts">
const emit = defineEmits<{
  (e: 'back-button-clicked'): void;
}>();
</script>

<template>
  <div class="life-situation">
    <div class="back-button">
      <button @click="emit('back-button-clicked')">Back</button>
    </div>
    <div class="form">
      <button>Schüler oder Student</button>
      <button>Berufseinsteiger</button>
      <button>Mitten im Leben</button>
      <button>Kurz vor der Rente</button>
      <button>Rentner</button>
      <button>Es is kompliziert</button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.life-situation {
  display: flex;
}

.back-button {
  width: 100%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
