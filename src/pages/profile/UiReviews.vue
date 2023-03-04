<template>
  <div class="reviews">
    <h2 class="reviews__title" v-if="reviews.length > 0">Отзывы</h2>

    <div 
    class="reviews__review"
    v-for="{imgSrc, imgAlt, name, surname, rating, descr, id} in reviews"
    :key="id"
    >
      <div class="reviews__review-user">
        <img src="~shared/assets/images/temp-home-logo.png" alt="user" class="reviews__review-img">
        <!-- <img :src="imgSrc" :alt="imgAlt" class="reviews__review-img"> -->

        <div class="reviews__review-text">
          <div class="reviews__review-name">{{ surname }} {{ name }}</div>
          <ui-rating :rating="rating"/>
        </div>
      </div>

      <div class="reviews__review-comment">{{ descr }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiRating from './UiRating.vue';

export default defineComponent({
  name: 'UiReviews',
  props: {
    reviews: {
      type: Array,
      default: () => []
    }
  },
  components: {
    UiRating
  },
  data: () => ({})
})
</script>

<style lang="scss">
  .reviews {
    &__title {
      font-weight: 400;
      font-size: 25px;
      color: var(--color-font-alternative);
      margin-bottom: 10px;
    }
    &__review {
      width: 100%;
      margin-bottom: 25px;
      &-user {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      &-img {
        margin-right: 15px;
        width: 70px;
        height: 70px;
      }
      &-name {
        font-family: 'Marmelad';
        font-weight: 400;
        font-size: 25px;
        color: #000;
      }
      &-comment {
        font-weight: 300;
        font-size: 25px;
        color: var(--color-font-alternative);
      }
    }
  }
</style>