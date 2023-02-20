<template>
  <section class="root" :class="theme">
    <!-- <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense> -->
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppComponent',
  components: {},
  data () {
    return {
      theme: 'light'
    }
  },
  methods: {
  },
  mounted () {
  }
})
</script>
