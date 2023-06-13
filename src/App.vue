<template>
  <section
    class="root"
    :class="theme"
  >
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { theme } from './app/store/modules/themeSwitcher.store'

export default defineComponent({
  name: 'AppComponent',
  components: {},
  computed: {
    theme (): theme {
      return this.$store.getters.getTheme || theme.light
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
  methods: {
    isAutorisation () {
      const token = localStorage.getItem('jj-token')

      if (token) {
        this.axios.defaults.headers.common.Authorization = `Bearer ${token}`
      }

      this.$store.dispatch('checkToken')
    },
  },
  mounted () {
    this.isAutorisation()
  },
})
</script>
