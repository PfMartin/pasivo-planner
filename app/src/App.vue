<script setup lang="ts"></script>

<template>
  <div class="app">
    <h1>Pasivo Planner</h1>
    <div class="line"></div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  margin-top: 2rem;

  .line {
    background: #cee4c3;
    height: 2px;
    width: 100%;
  }

  .content {
    margin-top: 2rem;
    width: 800px;
  }
}
</style>
