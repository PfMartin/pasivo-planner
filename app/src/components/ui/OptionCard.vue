<script setup lang="ts">
import { computed } from 'vue';

export interface CardConfig {
  title: string;
  detail?: string;
  pictureUrl: string;
}

const props = defineProps<{
  isSelected: boolean;
  cardConfig: CardConfig;
}>();

const optionCard = computed(() => ({
  ['option-card']: true,
  selected: props.isSelected || false,
}));

const picture = computed(() => {
  return new URL(`../../assets/${props.cardConfig.pictureUrl}`, import.meta.url)
    .href;
});
</script>

<template>
  <div :class="optionCard">
    <img :src="picture" alt="Working people" />
    <div class="card-content">
      <h3>{{ cardConfig.title }}</h3>
      <p>{{ cardConfig.detail }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/style/colors.scss';
@import '@/style/outline.scss';
.option-card {
  border: 2px solid $light-green;
  border-radius: $border-radius;
  background: $text-light;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    background: $mid-green;
    border-color: $mid-green;
    color: $text-light;
    cursor: pointer;
  }

  img {
    height: 100px;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    p {
      margin: 0;
      padding: 0;
    }
  }
}
</style>