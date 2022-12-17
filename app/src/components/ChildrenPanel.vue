<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import store from '@/store';

const options: CardConfig[] = [
  {
    title: 'Keine Kinder',
    value: 1,
  },
  {
    title: '1 oder 2 Kinder',
    value: 2,
  },
  {
    title: '3 oder mehr Kinder',
    value: 3,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', value);
};
</script>

<template>
  <div class="children-panel">
    <RouterLink :to="{ name: 'Risk' }" v-for="option in options">
      <OptionCard
        :key="option.title"
        :cardConfig="option"
        :isSelected="false"
        @select="storeValue"
      />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.children-panel {
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
}

@media screen and (max-width: 750px) {
  .children-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
