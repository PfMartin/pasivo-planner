<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import store from '@/store';

const options: CardConfig[] = [
  {
    title: 'Risikoreich',
    detail: 'Schwankungen sind okay, wenn ich dafür höhere Renditen bekomme',
    value: 1,
  },
  {
    title: 'Ausgewogen',
    detail: 'Ein paar Schwankungen sind okay, Balance aus Risiko und Rendite',
    value: 2,
  },
  {
    title: 'Risikoarm',
    detail: 'Mein Geld muss sicher sein, dafür verzichte ich auf Rendite',
    value: 3,
  },
];

const storeValue = (value: number) => {
  store.dispatch('pushRating', value);
};
</script>

<template>
  <div class="risk-panel">
    <RouterLink :to="{ name: 'Management' }" v-for="option in options">
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
.risk-panel {
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
  .risk-panel {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
}
</style>
