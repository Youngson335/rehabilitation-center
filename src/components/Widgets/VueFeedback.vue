<template>
  <div class="vue-feedback">
    <div class="vue-feedback__content">
      <div class="vue-feedback__content-item">
        <h3>Работаем по Иваново и области</h3>
      </div>
      <div class="vue-feedback__content-item">
        <h1>Реабилитационный центр «12-й шаг»</h1>
      </div>
      <div class="vue-feedback__content-item">
        <p>
          Пожалуйста, укажите номер телефона, чтобы мы могли с вами связаться.
        </p>
      </div>
    </div>
    <div class="vue-feedback__image">
      <vue-image :image="bckg1_image" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { bckg1_image } from "../../assets/exports/bg";
import VueImage from "../Images/VueImage.vue";
</script>
<style lang="scss"></style>
