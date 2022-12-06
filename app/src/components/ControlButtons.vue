<script setup lang="ts">
defineProps<{
  toNext: string;
  toBack: string;
}>();
</script>

<template>
  <div class="control-buttons">
    <RouterLink class="back-button" v-if="toBack" :to="{ name: toBack }"
      >Back</RouterLink
    >
    <RouterLink class="next-button" v-if="toNext" :to="{ name: toNext }"
      >Next</RouterLink
    >
  </div>
</template>

<style scoped lang="scss">
.control-buttons {
  position: relative;

  a {
    background: #cee4c3;
    // background: #68937c;
    color: #091301;
    text-decoration: none;
    padding: 0.5rem 1.5rem;
    border: 1px solid #091301;
    border-radius: 10px;
    transition: background 0.2s;

    &.back-button {
      position: absolute;
      left: 0;
    }

    &.next-button {
      position: absolute;
      right: 0;
    }

    &:hover {
      // background: #58836c;
      background: #bed4b3;
    }
  }
}
</style>
