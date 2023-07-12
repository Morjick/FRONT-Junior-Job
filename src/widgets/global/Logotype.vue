<template>
  <div
    @click="pushToMain"
    class="logotype-component"
  >
    <img
      v-if="theme == 'default' || screen >= 700"
      src="~/shared/assets/images/logo.png"
      alt=""
    />
    <img
      v-else-if="theme == 'light'"
      src="~/shared/assets/images/logo-light.png"
      alt=""
    />
    <span
      :class="{
        light: theme == 'light',
      }"
      >unior Job</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LogotypeComponent',
  data: () => ({}),
  components: {},
  props: {
    //  theme="light"
    theme: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    screen () {
      return this.$store.getters.getScreenWidth
    },
  },
  methods: {
    pushToMain () {
      this.$router.push('/')
    },
  },
  created () {
    window.addEventListener('resize', () => this.$store.commit('updateScreenWidth'))
  },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.logotype-component {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logotype-component img {
  transform: translateX(6px);
  @include mixin.adaptive(tablet) {
    transform: translateX(0);
  }
}

.logotype-component span.light {
  color: var(--color-main);
  font-size: 30px;
  margin-left: 7px;
  @include mixin.adaptive(tablet) {
    color: var(--color-font-alternative);
    margin-left: 0;
  }
}
</style>
