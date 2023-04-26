<template>
  <div class="add-review">
    <div class="add-review__user">
      <img
        src=""
        class="add-review__user-logo"
      >

      <div>
        <div class="add-review__user-name">{{ user[0].name }}</div>

        <rating-choice
          @select-rating="selectRating"
          :isNeedToReset="isNeedToResetRating"
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
      :text="buttonText"
      :classMod="buttonClass"
      @click="sendReview"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from '../../ui/UiButton.vue'
import { type IReview } from 'shared/interface/review'
import RatingChoice from './RatingChoice.vue'

export default defineComponent({
  name: 'AddReview',
  props: {},
  data: () => ({
    buttonText: 'Отправить',
    buttonClass: 'ui-button_small',
    reviewContent: '',
    selectedRating: 0,
    isNeedToResetRating: false,
    isEmptyField: false,
  }),
  components: {
    UiButton,
    RatingChoice,
  },
  computed: {
    user () {
      return this.$store.getters.getUsers
    },
  },
  methods: {
    selectRating (receivedRating: number) {
      this.isNeedToResetRating = false
      this.selectedRating = receivedRating
    },

    sendReview () {
      const review: IReview = {
        rating: this.selectedRating,
        review: this.reviewContent,
      }

      this.reviewContent = ''
      this.isNeedToResetRating = true
      this.selectedRating = 0

      if (!review.rating || !review.review) {
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
      color: var(--color-header);
    }
  }
  &__button {
    margin: 0;
  }
}
.error {
  color: red;
  margin-bottom: 15px;
}
</style>
