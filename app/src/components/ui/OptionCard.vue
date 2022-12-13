<script setup lang="ts">
import { computed } from 'vue';

export interface CardConfig {
  name: string;
  detail?: string;
  icon: string;
}

const props = defineProps<{
  isSelected: boolean;
  cardConfig: CardConfig;
}>();

const optionCard = computed(() => ({
  ['option-card']: true,
  selected: props.isSelected || false,
}));
</script>

<template>
  <div :class="optionCard">
    {{ cardConfig.name }}
  </div>
</template>

<style scoped lang="scss"></style>
