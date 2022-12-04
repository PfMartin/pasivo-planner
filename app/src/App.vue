<script setup lang="ts">
import { ref, computed } from "vue";
import LandingPage from "./components/LandingPage.vue";
import LifeSituation from "./components/LifeSituation.vue";

const route = ref("landingPage");

const isLandingPage = computed(() => route.value === "landingPage");
const isLifeSituation = computed(() => route.value === "lifeSituation");

const routeForward = (): void => {
  route.value = "lifeSituation";
  console.log(isLifeSituation.value);
};
const routeBackward = (): void => {
  route.value = "landingPage";
};
</script>

<template>
  <LandingPage v-if="isLandingPage" @forward-button-clicked="routeForward" />
  <LifeSituation v-if="isLifeSituation" @back-button-clicked="routeBackward" />
</template>

<style scoped></style>
