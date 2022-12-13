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
@import '@/style/colors.scss';
.app {
  margin-top: 2rem;

  .line {
    background: $light-green;
    height: 2px;
    width: 100%;
  }

  .content {
    margin: 2rem auto;
    max-width: 1000px;
  }
}
</style>
