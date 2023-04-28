<template>
  <svg
    class="star"
    :class="{
      'star_active': isFilled
    }"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
    d="
      M3.825 19L5.45 11.975L0
      7.25L7.2 6.625L10 0L12.8
      6.625L20 7.25L14.55 11.975L16.175
      19L10 15.275L3.825 19Z
    "
    fill="#FAFA00"/>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiStar',
  props: {
    isFilled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  methods: {},
})
</script>

<style lang="scss">
.star {
  cursor: pointer;
  font-size: 25px;
  width: 24px;
  height: 24px;
  & path {
    transition: .1s all;
    fill: var(--color-placeholder);
  }
  &_active path {
    fill: var(--color-accent);
  }
}
</style>
