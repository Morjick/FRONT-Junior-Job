<template>
  <div class="rating-choice">
    <div
      class="rating-choice__star"
      v-for="currentRating in maxRating"
      :key="currentRating"
      :class="{
        'rating-choice__star-active': currentRating <= selectedRating
      }"
      @click="selectRating(currentRating)"
    >
      &#9733;
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RatingChoice',
  props: {
    isNeedToReset: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    maxRating: 5,
    selectedRating: 0,
  }),
  methods: {
    selectRating (currentRating: number) {
      this.selectedRating = currentRating
      this.$emit('select-rating', this.selectedRating)
    },
  },
  watch: {
    isNeedToReset () {
      if (this.isNeedToReset) {
        this.selectedRating = 0
      }
    },
  },
})
</script>

<style lang="scss">
.rating-choice {
  display: flex;
  &__star {
    color: var(--color-placeholder);
    cursor: pointer;
    transition: .2s all;
    font-size: 25px;
    &-active {
      color: var(--color-accent);
    }
  }
}
</style>
