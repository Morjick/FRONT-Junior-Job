<template>
  <section class="new-items">
    <div
      href="#"
      class="item"
      v-for="newsItrem in (newItems as Vacancy[])"
      :key="newsItrem.id"
      @click="pushToCavancyPage(newsItrem)"
    >
      <img
        src="~/shared/assets/images/temp-home-logo.png"
        alt=""
        class="item__img"
      />

      <div class="item__text">
        <div class="item__title">{{ newsItrem.title }}</div>
        <!-- <div class="item__time">{{ newsItrem.timing }}</div>
        <div class="item__task">{{ newsItrem.task }}</div> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vacancy } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiNewVacancies',
  props: {
    newItems: {
      type: Array,
      default: () => [] as Vacancy[],
    },
  },
  methods: {
    pushToCavancyPage (vacancy: Vacancy) {
      this.$router.push(`/vacancy/${vacancy.href}`)
    },
  },
})
</script>

<style lang="scss">
.new-items {
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

.item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 300;
  font-size: 15px;
  &:last-child {
    margin-bottom: 0;
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
