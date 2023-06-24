<template>
  <section class="vacancies">
    <h2 class="vacancies__title"
v-if="vacancies.length > 0">Вакансии</h2>

    <div
      class="vacancies__vacancy"
      v-for="{ time, tasks, id } in vacancies"
      :key="id"
    >
      <div class="vacancies_vacancy-time">{{ time }}</div>
      <div class="vacancies_vacancy-tasks">{{ tasks }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiVacancies',
  props: {
    vacancies: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.vacancies {
  &__title {
    font-weight: 400;
    font-size: 25px;
    color: var(--color-font-alternative);
    margin-bottom: 10px;
    @include mixin.adaptive(tablet) {
      margin-bottom: 20px;
    }
  }
  &__vacancy {
    margin-bottom: 15px;
    & div {
      font-weight: 300;
      font-size: 25px;
      color: var(--color-font-alternative);
    }
  }
}
</style>
