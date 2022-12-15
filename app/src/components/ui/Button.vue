<script setup lang="ts">
import { computed, onMounted } from 'vue';

interface IconConfig {
  name: string;
  position: string;
}

const props = defineProps<{
  toName: string;
  text: string;
  iconConfig?: IconConfig;
  primary?: boolean;
}>();

const emit = defineEmits<{
  (e: 'button-click'): void;
}>();

const buttonClass = computed(() => ({
  btn: true,
  primary: props.primary || false,
}));
</script>

<template>
  <RouterLink
    @click="emit('button-click')"
    :class="buttonClass"
    :to="{ name: toName }"
    ><font-awesome-icon
      v-if="iconConfig && iconConfig.position === 'left'"
      :icon="iconConfig.name" /><span class="button-text">{{ text }}</span
    ><font-awesome-icon
      v-if="iconConfig && iconConfig.position === 'right'"
      :icon="iconConfig.name"
  /></RouterLink>
</template>

<style scoped lang="scss">
@import '@/style/colors.scss';
@import '@/style/outline.scss';

.btn {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 10px 35px;
  border-radius: $border-radius;
  color: $darkest-green;
  box-shadow: $box-shadow;
  background: $neutral-grey;
  transition: background 0.3s;
  font-weight: 500;

  &:hover {
    background: $darker-grey;
  }

  &.primary {
    background: $light-green;

    &:hover {
      background: $light-green-darker;
    }
  }

  .button-text {
    margin: 0 0.2rem;
  }
}
</style>
