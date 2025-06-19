<template>
  <div class="vue-condition-content">
    <div class="vue-condition__cards">
      <div
        class="vue-condition__card"
        v-for="condition of conditions"
        :key="condition.id"
      >
        <vue-image :image="condition.img" />
        <p>{{ condition.description }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  home_image,
  drop_image,
  notepad_image,
  peoples_image,
} from "../../assets/exports/images";
import VueImage from "../Images/VueImage.vue";

const conditions = [
  {
    id: 1,
    img: home_image,
    description:
      "Комфортное проживание в отдельном обустроенном доме со всеми необходимыми удобствами и оборудованием для реабилитации: зал для групповой терапии, кухня, душевые, сауна, комнаты для индивидуальной работы с психологом, комфортабельный спортзал, тренажеры Kettler",
  },
  {
    id: 2,
    img: peoples_image,
    description:
      "Постоянно проводятся коллективные игры и тренинги, направленные на сплочение, смекалку, командное взаимодействие, взаимопомощь и единство. И конечно же, во время таких мероприятий ребята получают море позитивных эмоций.",
  },
  {
    id: 3,
    img: notepad_image,
    description:
      "Проживание и реабилитация проходят в небольших группах. Курс реабилитации, в зависимости от плана лечения, составленного под каждого пациента индивидуально, может занимать от 2 до 9 месяцев.",
  },
  {
    id: 4,
    img: drop_image,
    description:
      "Центр находится в живописном месте в экологически чистом г. Иваново. Потрясающая природа, сосновый бор и пение птиц, свежий чистый воздух, огороженный зеленый дворик с уютными беседками - все это делает духовное исцеление пациентов максимально естественным.",
  },
];
</script>
<style lang="scss">
.vue-condition {
  &__cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1%;
  }
  &__card {
    width: 45%;
    padding: 30px;
    background-color: var(--dark-green);
    border: 1px solid var(--green);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-child(2n + 1) {
      margin-bottom: 40px;
    }
    & .vue-image {
      width: 400px;
      position: relative;
      top: -30px;
      opacity: 0.5;
    }
  }
}
</style>
