<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import PanelFrame from '@/components/ui/PanelFrame.vue';
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
  store.dispatch('pushRating', { profession: value });
  console.log(store.getters.results);
};
</script>

<template>
  <div class="profession-panel">
    <PanelFrame>
      <template v-slot:panel-content>
        <RouterLink :to="{ name: 'Income' }" v-for="option in options">
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
