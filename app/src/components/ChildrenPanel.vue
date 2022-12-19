<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import PanelFrame from '@/components/ui/PanelFrame.vue';
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
    <PanelFrame>
      <template v-slot:panel-content>
        <RouterLink :to="{ name: 'Risk' }" v-for="option in options">
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
