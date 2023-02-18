<template>
  <section>
    <ui-search-form class="main-search-form"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    UiSearchForm
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  },
  mounted () {
  }
})
</script>
