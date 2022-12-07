<script setup lang="ts">
import Button from '@/components/Button.vue';
defineProps<{
  toNext: string;
  toBack: string;
}>();

const backIconConfig = { name: 'fa-solid fa-chevron-left', position: 'left' };
const nextIconConfig = { name: 'fa-solid fa-chevron-right', position: 'right' };
</script>

<template>
  <div class="control-buttons">
    <div class="back-button">
      <Button
        v-if="toBack"
        :toName="toBack"
        text="Back"
        :iconConfig="backIconConfig"
      />
    </div>
    <div class="next-button">
      <Button
        v-if="toNext"
        :toName="toNext"
        text="Next"
        :iconConfig="nextIconConfig"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.control-buttons {
  position: relative;

  .back-button {
    position: absolute;
    left: 0;
  }

  .next-button {
    position: absolute;
    right: 0;
  }
}
</style>
