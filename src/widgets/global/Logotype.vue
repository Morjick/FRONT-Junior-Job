<template>
  <div @click="pushToMain" class="logotype-component">
    <img v-if="theme == 'default'" src="~/shared/assets/images/logo.png" alt="">
    <img v-if="theme == 'light'" src="~/shared/assets/images/logo-light.png" alt="">
    <span :class="{
      light: theme == 'light'
    }">unior Job</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logotype',
  data: () => ({}),
  components: {},
  props: {
    //  theme="light"
    theme: {
      type: String,
      default: 'default'
    }
  },
  computed: {},
  methods: {
    pushToMain () {
      this.$router.push('/')
    }
  },
  mounted () {}
})
</script>