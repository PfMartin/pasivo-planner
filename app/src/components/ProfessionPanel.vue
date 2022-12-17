<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import store from '@/store';

const options: CardConfig[] = [
  {
    title: 'Angestellt',
    detail: 'in Schule, Studium oder Ausbildung',
    value: 1,
  },
  {
    title: 'Selbstständig',
    detail: 'start in den Beruf gemeistert',
    value: 2,
  },
  {
    title: 'Unternehmer',
    detail: 'ca. 30 - 50 Jahre',
    value: 3,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', value);
};
</script>

<template>
  <div class="profession-panel">
    <RouterLink :to="{ name: 'Income' }" v-for="option in options">
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
.profession-panel {
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
  .profession-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
