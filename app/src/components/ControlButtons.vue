<script setup lang="ts">
defineProps<{
  toNext: string;
  toBack: string;
}>();
</script>

<template>
  <div class="control-buttons">
    <RouterLink v-if="toBack" :to="{ name: toBack }">Back</RouterLink>
    <RouterLink v-if="toNext" :to="{ name: toNext }">Next</RouterLink>
  </div>
</template>

<style scoped lang="css"></style>
