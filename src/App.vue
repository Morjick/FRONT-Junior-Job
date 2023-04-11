<template>
  <section class="root"
:class="theme">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { themeSwitcherI } from './app/store/themeSwitcher.store'

export default defineComponent({
  name: 'AppComponent',
  components: {},
  computed: {
    theme (): themeSwitcherI['theme'] {
      return this.$store.getters.getTheme || 'light'
    },
  },
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  data () {
    return {}
  },
  methods: {},
})
</script>
