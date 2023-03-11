<template>
  <section class="new-items">
    <a href="#"
class="item"
    v-for="{title, timing, task, id} in newItems"
    :key="id"
    >
      <img src="~/shared/assets/images/temp-home-logo.png"
alt=""
class="item__img">
      <!-- <div class="vacancy__img"></div> -->

      <div class="item__text">
        <div class="item__title">{{ title }}</div>
        <div class="item__time">{{ timing }}</div>
        <div class="item__task">{{ task }}</div>
      </div>
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiNewVacancies',
  props: {
    newItems: {
      type: Array,
      default: () => [],
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
