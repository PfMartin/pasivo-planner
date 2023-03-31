<script setup lang="ts">
import OptionCard, { CardConfig } from '@/components/ui/OptionCard.vue';
import PanelFrame from '@/components/ui/PanelFrame.vue';
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
  store.dispatch('pushRating', { management: value });
  console.log(store.getters.results);
};
</script>

<template>
  <div class="management-panel">
    <PanelFrame>
      <template v-slot:panel-content>
        <RouterLink :to="{ name: 'Result' }" v-for="option in options">
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
