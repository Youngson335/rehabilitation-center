<template>
  <div class="vue-description-content container">
    <vue-main>
      <div
        class="vue-description-content__item vue-description-content__titles"
      >
        <h2>Скажи жизни: ДА!</h2>
        <h2>Реабилитационный центр «12-й шаг»</h2>
      </div>
      <div class="vue-description-content__cards-wrapper">
        <div class="vue-description-content__cards">
          <div class="vue-description-content__card bg-light-green">
            <vue-image :image="lock_image" />
            <div>
              <span>Оказываем квалифицированную помощь</span>
              <p>
                зависимым. С вашим близким человеком будут работать
                дипломированные психологи, гештальт-терапевты, клинические,
                семейные психологи, психиатры, квалифицированная помощь в
                решении юридических проблем.
              </p>
            </div>
          </div>
          <div class="vue-description-content__card bg-white">
            <h3>15 лет</h3>
            <p>Более 15 лет продуктивной работы и тысячи спасённых жизней.</p>
          </div>
        </div>
        <div class="vue-description-content__cards">
          <div class="vue-description-content__card bg-gradient">
            <vue-image :image="medal_image" />
            <p>
              Клиника входит в систему «Национального антинаркотического союза
              (НАС)»
            </p>
          </div>
          <div class="vue-description-content__card-block column">
            <div
              class="vue-description-content__card flex-center column bg-light-green"
            >
              <h3>100%</h3>
              <p>Гарантируем анонимность.</p>
            </div>
            <div
              class="vue-description-content__card flex-center column bg-dark-gray"
            >
              <vue-image :image="location_image" />
              <p>Выезжаем за пациентом в любую точку России.</p>
            </div>
          </div>
          <div class="vue-description-content__card bg-light-green">
            <vue-image :image="cup_image" />
            <div>
              <p>
                Лауреат Национального конкурса «Лучшие частные клиники
                Российской Федерации - 2016»
              </p>
            </div>
          </div>
          <div class="bg-image-description-content">
            <vue-image :image="gradient_big_image" />
          </div>
        </div>
      </div>
    </vue-main>
  </div>
</template>
<script lang="ts" setup>
import VueMain from "./VueMain.vue";
import VueImage from "../Images/VueImage.vue";
import {
  lock_image,
  medal_image,
  cup_image,
  location_image,
} from "../../assets/exports/images";
import { gradient_big_image } from "../../assets/exports/bg";
</script>
<style lang="scss">
span {
  font-weight: 600;
}
.bg-image-description-content {
  position: absolute;
  top: 0;
}
.vue-description-content {
  &__titles {
    font-size: 25px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    align-items: normal;
    gap: 1%;
    &-wrapper {
      position: relative;
    }
  }
  &__card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    padding: 40px;
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
    & .vue-image {
      max-width: 200px;
      margin-bottom: 30px;
    }
  }
}

.bg-light-green {
  background-color: var(--light-green);
  color: black;
  & h3 {
    font-weight: 700;
    font-size: 65px;
    text-wrap: nowrap;
    color: var(--green);
  }
}
.bg-white {
  background-color: white;
  color: black;
  flex-direction: column;
  justify-content: center;
  & h3 {
    font-weight: 700;
    font-size: 65px;
    text-wrap: nowrap;
    color: var(--green);
  }
  & p {
    font-size: 15px;
  }
}
.bg-gradient {
  background: var(--gradient-green);
  color: black;
  flex-direction: column;
  justify-content: center;
  color: white;
}
.bg-dark-gray {
  background-color: var(--dark-green);
}
</style>
