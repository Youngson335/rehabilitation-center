<template>
  <div class="vue-info-content container">
    <vue-header />
    <vue-main>
      <vue-feedback />
    </vue-main>
  </div>
</template>
<script lang="ts" setup>
import VueHeader from "../Header/VueHeader.vue";
import VueMain from "./VueMain.vue";
import VueFeedback from "../Widgets/VueFeedback.vue";
</script>
<style lang="scss"></style>
