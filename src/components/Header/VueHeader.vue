<template>
  <header class="vue-header">
    <div class="vue-header__item">
      <p>Время работы: Круглосуточно</p>
    </div>
    <div class="vue-header__item">
      <vue-icon :icon="location_icon" />
      <p>г. Иваново</p>
    </div>
    <div class="vue-header__item">
      <vue-logo />
    </div>
    <div class="vue-header__item">
      <vue-icon :icon="phone_icon" />
      <p>8 800 500 89 55З</p>
    </div>
    <div class="vue-header__item">
      <vue-button> Срочный вызов врача </vue-button>
    </div>
  </header>
</template>
<script lang="ts" setup>
import { phone_icon, location_icon } from "../../assets/exports/icons";
import VueLogo from "../Logo/VueLogo.vue";
import VueIcon from "../Images/VueIcon.vue";
import VueButton from "../Buttons/VueButton.vue";
</script>
<style lang="scss">
.vue-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    text-wrap: nowrap;
    & .vue-icon {
      max-width: 30px;
      margin-right: 5px;
    }
    & .vue-logo {
      max-width: 150px;
    }
  }
}
</style>
