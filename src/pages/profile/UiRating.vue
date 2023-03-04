<template>
  <div class="rating">
    <img 
    src="~shared/assets/images/star.png" 
    alt="star" 
    class="rating__item"
    v-for="(rate, index) in rating"
    :key="index"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiRating',
  props: {
    rating: {
      type: Number,
      default: () => 0
    }
  },
  data: () => ({})
})
</script>

<style lang="scss">
  
</style>