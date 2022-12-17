<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import store from '@/store';

const options: CardConfig[] = [
  {
    title: 'Volle Kontrolle',
    detail: 'Ich möchte mein Erspartes selbst managen',
    value: 1,
  },
  {
    title: 'Automatisch',
    detail: 'Mein Vermögen soll automatisiert verwaltet werden',
    value: 2,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', value);
};
</script>

<template>
  <div class="management-panel">
    <RouterLink :to="{ name: 'Result' }" v-for="option in options">
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
.management-panel {
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
  .management-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
