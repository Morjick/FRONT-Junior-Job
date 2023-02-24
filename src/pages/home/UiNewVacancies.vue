<template>
  <section class="new-vacancies">
    <div class="new-vacancies__title">Новые вакансии</div>
    
    <a href="#" class="vacancy"
    v-for="{title, timing, task, id} in newVacancies"
    :key="id"
    >
      <div class="vacancy__img"></div>

      <div class="vacancy__text">
        <div class="vacancy__title">{{ title }}</div>
        <div class="vacancy__time">{{ timing }}</div>
        <div class="vacancy__task">{{ task }}</div>
      </div>
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiNewVacancies',
  props: {
    newVacancies: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
  .new-vacancies {
    margin-bottom: 28px;
    &__title {
      font-weight: 600;
      font-size: 25px;
      color: var(--color-font);
      margin-bottom: 15px;
    }
    &__wrapp {
      margin: 0 auto;
    }
  }

  .vacancy {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      transform: scale(1.05);
    }
    &__img {
      width: 50px;
      height: 50px;
      background: red;
      border-radius: 100%;
      margin-right: 10px;
    }
    &__title {
      font-weight: 400;
      font-size: 18px;
      margin-bottom: 5px;
      color: #000;
    }
    &__time {
      font-weight: 300;
      font-size: 15px;
      color: var(--color-font-alternative);
    }
    &__task {
      font-weight: 300;
      font-size: 15px;
      color: var(--color-font-alternative);
    }
  }
</style>