<template>
  <div class="rating-choice">
    <ui-star
      :is-filled="currentRating <= selectedRating ? true : false"
      class="rating-choice__star"
      v-for="currentRating in 5"
      :key="currentRating"
      @click="selectRating(currentRating)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiStar from './UiStar.vue'

export default defineComponent({
  name: 'RatingChoice',
  components: {
    UiStar,
  },
  props: {
    isNeedToReset: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
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
    margin-right: 2px;
  }
}
</style>
