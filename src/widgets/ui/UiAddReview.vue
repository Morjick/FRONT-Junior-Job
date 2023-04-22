<template>
  <div class="add-review">
    <textarea
      class="add-review__textarea"
      v-model="reviewContent"
    ></textarea>

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
import UiButton from './UiButton.vue'
import { type IReview } from '../interface/review'

export default defineComponent({
  name: 'UiAddReview',
  data: () => ({
    buttonText: 'Отправить',
    buttonClass: 'ui-button_small',
    reviewContent: '',
  }),
  components: {
    UiButton,
  },
  methods: {
    sendReview () {
      const review: IReview = {
        userId: 1,
        review: this.reviewContent,
      }

      this.reviewContent = ''
      this.$emit('send-review', review)
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
  &__button {
    margin: 0;
  }
}
</style>
