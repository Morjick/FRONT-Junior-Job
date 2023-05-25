<template>
  <section class="profile">
      <div class="profile__wrapp">
        <div class="profile__main-info">
        <img
          src="~shared/assets/images/temp-home-logo.png"
          alt="user"
          class="profile__main-info-img"
        />

        <div class="profile__main-info-text">
          <div class="profile__main-info-name">
            {{ userData.surname }} {{ userData.name }}
          </div>
        </div>
      </div>

      <div class="profile__sub-info">
        <div class="profile__sub">
          <img
            src="~shared/assets/images/location.png"
            alt="location"
            class="profile__sub-img"
          />
          <div class="profile__sub-text">{{ userData.location }}</div>
        </div>
      </div>
    </div>

    <div class="profile__descr">{{ userData.descr }}</div>
    <div class="compliance-container">
      <div
        v-for="item in compliance"
        :key="item"
        class="compliance-item"
      >{{ item }}</div>
    </div>

    <ui-reviews :reviews="userData.reviews"
class="profile__dynamic-info" />
    <ui-vacancies
      :vacancies="userData.vacancies"
      class="profile__dynamic-info"
    />
    <div>
      <ui-button :text="btnText" />
      <ui-button
        :text="userData.favorites"
        :classMod="classMod"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiReviews from './UiReviews.vue'
import UiButton from 'widgets/ui/UiButton.vue'
import UiVacancies from './UiVacancies.vue'

export default defineComponent({
  name: 'ProfilePage',
  data: () => ({
    userData: {
      name: 'Иван',
      surname: 'Чернявский ',
      location: 'Киселевка',
      subInfo: 'Есть рекоммендации из школы',
      descr: `
        Ответственный и люблю животных. Готов заботиться о 
        вашем питомце (кормить, гулять и гладить) каждый день в 
        любое время с 15:00 до 19:00
      `,
      reviews: [
        {
          imgSrc: '#',
          name: 'Елена',
          surname: 'Карпова',
          rating: 4,
          descr: 'Шпицы довольны. 5 звезд!',
          id: 1,
        },
        {
          imgSrc: '#',
          name: 'Андрей',
          surname: 'Алхимов',
          rating: 3,
          descr: 'Все хорошо',
          id: 2,
        },
        {
          imgSrc: '#',
          name: 'Алина',
          surname: 'Киселева',
          rating: 5,
          descr: 'Супер!',
          id: 3,
        },
      ],
      vacancies: [
        {
          time: 'Ежедневно 10:00-15:00',
          tasks: 'Собирать продукцию...',
          id: 1,
        },
        {
          time: 'Четверг 12:00-17:00',
          tasks: 'Сортировка огуречной...',
          id: 2,
        },
        {
          time: '23 июля 14:00-20:00 ',
          tasks: 'В ростовом костюме огурца...',
          id: 3,
        },
      ],
      favorites: 'В избранном',
      rating: 5,
    },
    btnText: 'Написать',
    classMod: 'ui-button_invisible',
    compliance: [
      'Вежливость',
      'Грамотная устная речь',
      'Грамотная письменная речь',
      'Общение с клиентами',
      'Навыки презентации',
      'Харизма',
      'Коммуникабельность',
      'Публичные выступления',
      'Уборка',
      'Готовка',
      'Шитье',
      'Рукоделие',
      'Уход за  домашними животными',
      'Уход за детьм',
      'Уход за пожилыми людьми',
      'Фотосъемка',
      'Видеосъемка',
      'Видеомонтаж',
      'Работа с фотографиями',
      'Управляю транспортным средством, требующим специальных прав',
      'Управляю транспортным средством, не требующим специальных прав',
      'Работа с компьютером',
      'Работа с документами',
      'MS Office',
      'Программирование',
      'Дизайн',
      'Работа с продукцией',
      'Учет',
      'Есть медкнижка',
      'Работа с сельско-хозяйственными культурами',
      'Работа с кормовыми животными',
      'Ремонт',
      'Строительство',
    ],
  }),
  components: {
    UiReviews,
    UiButton,
    UiVacancies,
  },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.compliance-container {
  margin-bottom: 20px;
}

.compliance-item {
  display: inline-block;
  background: var(--color-font-alternative);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 16px;
  color: var(--admin-alternative-color-font);
  margin: 0 5px 5px 0;
}

.profile {
  padding: 20px;
  @include mixin.adaptive(tablet) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 20px 30px;
  }
  @include mixin.adaptive(desktop) {
    padding: 20px 50px;
  }
  &__main-info {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    @include  mixin.adaptive(tablet) {
      position: inherit;
      transform: translateX(0);
      justify-content: flex-start;
      margin-bottom: 20px;
    }
    &-img {
      margin-right: 15px;
      width: 70px;
      height: 70px;
      @include mixin.adaptive(tablet) {
        width: 110px;
        height: 110px;
      }
    }
    &-name {
      font-family: 'Marmelad';
      font-weight: 400;
      font-size: 28px;
      color: #000;
    }
  }
  &__sub {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &-img {
      margin-right: 10px;
    }
    &-text {
      font-weight: 300;
      font-size: 25px;
      color: var(--color-font-alternative);
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
  &__descr {
    font-weight: 300;
    font-size: 25px;
    line-height: 31px;
    color: #000;
    margin-bottom: 20px;
  }
  &__dynamic-info {
    margin-bottom: 30px;
  }
}
</style>
