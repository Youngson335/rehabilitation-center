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
      <div class="vue-feedback__content-item white-bg feedback-items">
        <vue-icon :icon="phone_green_icon" />
        <vue-phone-input v-model="phoneValue" />
        <vue-button>Заказать звонок</vue-button>
      </div>
    </div>
    <div class="vue-feedback__image">
      <vue-image :image="bckg1_image" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { bckg1_image } from "../../assets/exports/bg";
import { phone_green_icon } from "../../assets/exports/icons";
import VueImage from "../Images/VueImage.vue";
import VueIcon from "../Images/VueIcon.vue";
import VuePhoneInput from "../Inputs/VuePhoneInput.vue";
import VueButton from "../Buttons/VueButton.vue";

const phoneValue = ref("");
</script>
<style lang="scss">
.vue-feedback {
  position: relative;
  padding: 50px;
  background-color: var(--light-green);
  color: var(--dark-green);
  border-radius: 50px;
  overflow: hidden;
  &__content {
    position: relative;
    z-index: 1;
    &-item {
      margin-bottom: 30px;
      max-width: 475px;
    }
  }
  &__image {
    position: absolute;
    top: -1px;
    right: 0;
    & .vue-image {
      max-width: 900px;
    }
  }
}
.feedback-items {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  & .vue-icon {
    max-width: 30px;
  }
  & .vue-button {
    max-width: 160px;
  }
}
</style>
