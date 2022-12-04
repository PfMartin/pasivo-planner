<script setup lang="ts"></script>

<template>
  <div class="progress-bar">
    <div class="progress-element active"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
    <div class="progress-element"></div>
  </div>
</template>

<style scoped lang="css">
.progress-bar {
  display: flex;
  justify-content: center;
}

.progress-bar .progress-element {
  height: 10px;
  width: 50px;
  background: #eee;
}

.progress-bar .progress-element.active {
  background: #68937c;
}
</style>
