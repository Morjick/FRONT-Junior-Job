<template>
  <div class="add-review">
    <div class="add-review__user">
      <img
        src=""
        class="add-review__user-logo"
      >

      <div>
        <div class="add-review__user-name">Елена</div>

        <rating-choice
          @select-rating="selectRating"
          :is-need-to-reset="isNeedToResetRating"
        />
      </div>
    </div>

    <textarea
      class="add-review__textarea"
      v-model="reviewContent"
    ></textarea>

    <p
      class="error"
      v-if="isEmptyField"
    >
      Заполните все поля
    </p>

    <ui-button
      class="add-review__button"
      :text="'Отправить'"
      :class-mod="'ui-button_small'"
      @click="sendReview"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'
import { type IReview } from 'shared/interface/review'
import RatingChoice from './RatingChoice.vue'

export default defineComponent({
  name: 'AddReview',
  props: {},
  data: () => ({
    reviewContent: '',
    selectedRating: 0,
    isNeedToResetRating: false,
    isEmptyField: false,
  }),
  components: {
    UiButton,
    RatingChoice,
  },
  methods: {
    selectRating (receivedRating: number) {
      this.isNeedToResetRating = false
      this.selectedRating = receivedRating
    },

    sendReview () {
      const review: IReview = {
        userId: 1,
        rating: this.selectedRating,
        content: this.reviewContent,
      }

      this.reviewContent = ''
      this.isNeedToResetRating = true
      this.selectedRating = 0

      if (!review.rating || !review.content) {
        this.isEmptyField = true
        return false
      } else {
        this.isEmptyField = false
        this.$emit('send-review', review)
      }
    },
  },
})
</script>

<style lang="scss">
.add-review {
  &__textarea {
    border: 1px solid var(--color-textarea);
    border-radius: 10px;
    width: 313px;
    height: 132px;
    padding: 20px;
    resize: none;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    color: var(--color-font-alternative);
    margin-bottom: 15px;
  }
  &__user {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    &-logo {
      width: 50px;
      height: 50px;
      background: red;
      border-radius: 100px;
      margin-right: 10px;
    }
    &-name {
      font-family: 'Marmelad';
      font-weight: 400;
      font-size: 25px;
      color: var(--color-title);
    }
  }
  &__button {
    margin: 0;
  }
}
.error {
  color: var(--color-error);
  margin-bottom: 15px;
}
</style>
