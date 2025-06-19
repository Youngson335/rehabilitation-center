<template>
  <div class="vue-card-border">
    <slot />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.vue-card-border {
  background-color: var(--dark-green);
  border: 1px solid var(--green);
  border-radius: 50px;
}
</style>
