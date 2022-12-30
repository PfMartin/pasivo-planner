<script setup lang="ts">
import { computed } from 'vue';

export interface CardConfig {
  title: string;
  detail?: string;
  pictureUrl?: string;
  value: number;
}

const emit = defineEmits<{
  (e: 'select', value: number): void;
}>();

const props = defineProps<{
  isSelected: boolean;
  cardConfig: CardConfig;
}>();

const optionCard = computed(() => ({
  ['option-card']: true,
  selected: props.isSelected || false,
}));

const picture = computed((): string => {
  return props.cardConfig.pictureUrl
    ? new URL(`./assets/${props.cardConfig.pictureUrl}`, import.meta.url).href
    : '';
});
</script>

<template>
  <div @click="emit('select', cardConfig.value)" :class="optionCard">
    <img v-if="picture" :src="picture" :alt="cardConfig.title" />
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
  padding: 0.5rem;
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

    h3 {
      padding: 0.5rem;
      margin: 0;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
}

@media screen and (max-width: 520px) {
  .option-card {
    img {
      height: 70px;
    }
  }
}
</style>
