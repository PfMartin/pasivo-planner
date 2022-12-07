<script setup lang="ts">
import Button from '@/components/Button.vue';

const iconConfig = {
  name: 'fa-solid fa-chevron-right',
  position: 'right',
};
</script>

<template>
  <div class="home">
    <h2>Erstelle dein personalisiertes Finanzkonzept!</h2>
    <p>
      Entdecke in wenigen Minuten die für dich passende Strategie, um deine
      Finanzen zu managen. Der Algorithmus stellt dir Fragen, um deine Situation
      und Ziele kennenzulernen. Basierend auf den Antworten erhältst du dein
      personalisiertes Finanzkonzept.
    </p>
    <div class="button-container">
      <Button
        toName="LifeSituation"
        text="Los Geht's"
        :iconConfig="iconConfig"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-container {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
</style>
