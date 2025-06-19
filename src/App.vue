<template>
  <vue-info-content class="mb" />
  <vue-description-content class="mb" />
  <vue-stages-content class="mb" />
  <vue-conditions-content class="mb" />
</template>

<script setup lang="ts">
import VueInfoContent from "./components/Contents/VueInfoContent.vue";
import VueDescriptionContent from "./components/Contents/VueDescriptionContent.vue";
import VueStagesContent from "./components/Contents/VueStagesContent.vue";
import VueConditionsContent from "./components/Contents/VueConditionsContent.vue";
</script>

<style scoped>
.mb {
  margin-bottom: 70px;
}
</style>
