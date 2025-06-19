<template>
  <img class="vue-image" :src="props.image" alt="image" />
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  image: string;
}>();
</script>
<style lang="scss">
.vue-image {
  display: block;
  width: 100%;
}
</style>
