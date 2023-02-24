<template>
  <div @click="pushToMain" class="logotype-component">
    <img src="~/shared/assets/images/logo.png" alt="">
    <span>unior Job</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logotype',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToMain () {
      this.$router.push('/')
    }
  },
  mounted () {}
})
</script>