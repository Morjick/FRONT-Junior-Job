<template>
  <div class="reviews">
    <h2 class="reviews__title"
v-if="reviews.length > 0">Отзывы</h2>

    <div
      class="reviews__review"
      v-for="{ name, surname, rating, descr, id } in reviews as Review[]"
      :key="id"
    >
      <div class="reviews__review-user">
        <img
          src="~shared/assets/images/temp-home-logo.png"
          alt="user"
          class="reviews__review-img"
        />
        <!-- <img :src="imgSrc" :alt="imgAlt" class="reviews__review-img"> -->

        <div class="reviews__review-text">
          <div class="reviews__review-name">{{ surname }} {{ name }}</div>
          <ui-rating :rating="rating" />
        </div>
      </div>

      <div class="reviews__review-comment">{{ descr }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiRating from 'widgets/ui/UiRating.vue'

interface Review {
  id: number
  imgSrc: string
  name: string
  surname: string
  rating: number
  descr: string
}

export default defineComponent({
  name: 'UiReviews',
  props: {
    reviews: {
      type: Array,
      default: (): Review[] => [],
    },
  },
  components: {
    UiRating,
  },
  data: () => ({}),
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.reviews {
  &__title {
    font-weight: 400;
    font-size: 25px;
    color: var(--color-font-alternative);
    margin-bottom: 10px;
    @include mixin.adaptive(tablet) {
      margin-bottom: 20px;
    }
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
