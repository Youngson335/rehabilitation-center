<template>
  <img class="vue-icon" :src="props.icon" alt="icon" />
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps<{
  icon: string;
}>();
</script>
<style lang="scss"></style>
