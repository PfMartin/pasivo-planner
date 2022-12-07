<script setup lang="ts">
interface IconConfig {
  name: string;
  position: string;
}

defineProps<{
  toName: string;
  text: string;
  iconConfig?: IconConfig;
}>();
</script>

<template>
  <RouterLink class="button" :to="{ name: toName }"
    ><font-awesome-icon
      v-if="iconConfig && iconConfig.position === 'left'"
      :icon="iconConfig.name" /><span class="button-text">{{ text }}</span
    ><font-awesome-icon
      v-if="iconConfig && iconConfig.position === 'right'"
      :icon="iconConfig.name"
  /></RouterLink>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #cee4c3;
  // background: #68937c;
  color: #091301;
  text-decoration: none;
  padding: 0.5rem 1.5rem;
  border: 1px solid #091301;
  border-radius: 10px;
  transition: background 0.2s;

  &:hover {
    // background: #58836c;
    background: #bed4b3;
  }

  .button-text {
    margin: 0 0.2rem;
  }
}
</style>
