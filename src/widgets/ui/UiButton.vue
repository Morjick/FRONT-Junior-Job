<template>
  <div 
    class="ui-button"
  >{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiButton',
  data: () => ({}),
  components: {},
  props: {
    text: {
      type: String,
      default: 'Подтвердить'
    },
    mod: {
      type: String,
      default: 'primery'
    },
    handler: {
      type: Function,
      default: () => ({})
    }
  },
  computed: {},
  methods: {},
  mounted () {}
})
</script>
