<script setup lang="ts"></script>

<template>
  <div class="panel-frame">
    <slot name="panel-content"></slot>
  </div>
</template>

<style scoped lang="scss">
.panel-frame {
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
}

@media screen and (max-width: 750px) {
  .panel-frame {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
