<script setup lang="ts">
import store from '@/store';

const setPluginPath = (): void => {
  const currentScript: any = document.currentScript;
  const currentScriptPathArray = currentScript.src.split('/');
  currentScriptPathArray.pop();
  store.dispatch('setPluginPath', currentScriptPathArray.join('/'));
};

if (process.env.NODE_ENV === 'production') {
  setPluginPath();
}
</script>

<template>
  <div class="app">
    <h1>Pasivo Planner</h1>
    <p>Interaktiver Ratgeber zur Finanzplanung - v0.0.1</p>
    <div class="line"></div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/colors.scss';
.app {
  h1 {
    padding: 0;
    margin: 0;
  }

  p {
    color: $muted-grey;
    padding: 0;
    margin: 0.5rem;
  }
  .line {
    background: $light-green;
    height: 2px;
    width: 100%;
  }

  .content {
    margin: 0.5rem auto;
    max-width: 1000px;
  }
}
</style>
