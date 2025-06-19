<template>
  <div class="vue-info-content container">
    <vue-header />
    <vue-main>
      <vue-feedback class="vue-info-content__item" />
      <div class="vue-info-content__cards">
        <vue-card-border v-for="service of servicesInfo" :key="service.id">
          <div class="card-content">
            <vue-image :image="service.img" />
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
          </div>
        </vue-card-border>
      </div>
    </vue-main>
  </div>
</template>
<script lang="ts" setup>
import VueHeader from "../Header/VueHeader.vue";
import VueMain from "./VueMain.vue";
import VueFeedback from "../Widgets/VueFeedback.vue";
import VueCardBorder from "../Cards/VueCardBorder.vue";
import {
  socialization_image,
  codependency_image,
  rehabilitation_image,
  treatment_image,
} from "../../assets/exports/images";
import VueImage from "../Images/VueImage.vue";

interface ServicesInfo {
  id: number;
  img: string;
  title: string;
  description: string;
}

const servicesInfo: ServicesInfo[] = [
  {
    id: 1,
    img: rehabilitation_image,
    title: "Реабилитация",
    description:
      "Созданы все условия для восстановления душевного и эмоционального состояния пациентов.",
  },
  {
    id: 2,
    img: codependency_image,
    title: "Созависимость",
    description:
      "Постоянно проводим консультации для близких зависимых пациентов. Созависимость тоже болезнь.",
  },
  {
    id: 3,
    img: treatment_image,
    title: "Лечение",
    description:
      "Лечение наркомании и алкоголизма занимает от 2 до 9 месяцев, если работать на результат. Центр дает гарантию от срыва - 5 лет!",
  },
  {
    id: 4,
    img: socialization_image,
    title: "Социализация",
    description:
      "Мы предлагаем своим выходцам уникальные образовательные программы социальной адаптации.",
  },
];
</script>
<style lang="scss">
.vue-info-content {
  &__item {
    margin-bottom: 70px;
  }
  &__cards {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: normal;
  }
}
.card-content {
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  max-width: 270px;
  & .vue-image {
    max-width: 150px;
  }
  h4 {
    margin-bottom: 10px;
  }
  p {
    font-size: 10px;
  }
}
</style>
