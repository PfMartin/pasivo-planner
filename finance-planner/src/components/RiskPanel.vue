<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import PanelFrame from '@/components/ui/PanelFrame.vue';
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
  store.dispatch('pushRating', { risk: value });
  console.log(store.getters.results);
};
</script>

<template>
  <div class="risk-panel">
    <PanelFrame>
      <template v-slot:panel-content>
        <RouterLink :to="{ name: 'Management' }" v-for="option in options">
          <OptionCard
            :key="option.title"
            :cardConfig="option"
            :isSelected="false"
            @select="storeValue"
          />
        </RouterLink>
      </template>
    </PanelFrame>
  </div>
</template>

<style scoped lang="scss"></style>
