<template>
  <button class="vue-button">
    <slot />
  </button>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.vue-button {
  background: var(--gradient-green);
  font-family: "Montserrat", sans-serif;
  color: white;
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: var(--radius);
}
</style>
