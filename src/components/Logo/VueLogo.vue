<template>
  <div class="vue-logo">
    <vue-image :image="logo_image" />
  </div>
</template>
<script lang="ts" setup>
import { logo_image } from "../../assets/exports/images";
import VueImage from "../Images/VueImage.vue";
</script>
<style lang="scss"></style>
