<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
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
        text="Zurück"
        :iconConfig="backIconConfig"
      />
    </div>
    <div class="next-button">
      <Button
        v-if="toNext"
        :toName="toNext"
        text="Weiter"
        :iconConfig="nextIconConfig"
        primary
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.control-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>
