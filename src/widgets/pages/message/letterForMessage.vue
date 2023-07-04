<template>
  <div :class="'letter ' + side">
    <div class="letter__content">
      <div class="letter__name">{{ name }}</div>
      <div class="letter__text">{{ text }}</div>
      <div class="letter__time">{{ time }}</div>
    </div>
    <div class="letter__tail"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'letterForMessage',
  data: () => ({}),
  components: {},
  props: {
    name: {
      type: String,
      default: () => '',
    },
    text: {
      type: String,
      default: () => '',
    },
    time: {
      type: String,
      default: () => '',
    },
    author: {
      type: String,
      default: () => 'user',
    },
  },
  computed: {
    side: function () {
      if (this.author === 'user') {
        return ''
      } else {
        return 'letter_left'
      }
    },
  },
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

  .letter {
    width: 50%;
    min-height: 30px;
    margin-bottom: 20px;
    align-self: flex-end;
    display: flex;
    align-items: flex-end;
    @include mixin.adaptive(tablet) {
      width: 40%;
    }
    @include mixin.adaptive(desktop) {
      width: 30%;
    }
    &__content {
      min-height: 30px;
      width: 100%;
      background: var(--color-primery);
      border-radius: 15px 15px 0 15px;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
    }
    &__tail {
      width: 15px;
      height: 15px;
      background: var(--color-primery);
      &::after {
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background: var(--color-main);
        border-radius: 0 0 0 20px;
      }
    }
    &__name {
      font-weight: 700;
      font-size: 14px;
      color: var(--color-helper);
    }
    &__text {
      font-weight: 400;
      font-size: 14px;
      color: var(--color-helper);
    }
    &__time {
      font-weight: 400;
      font-size: 14px;
      color: var(--color-border);
      align-self: flex-end;
    }
    &_left {
      align-self: flex-start;
      flex-direction: row-reverse;
      display: flex;
      align-items: flex-end;
      .letter__content {
        background: var(--color-placeholder);
        border-radius: 15px 15px 15px 0;
      }
      .letter__tail {
        background: var(--color-placeholder);
        &::after {
          content: '';
          background: var(--color-main);
          border-radius: 0 0 20px 0;
        }
      }
    }
  }
</style>
