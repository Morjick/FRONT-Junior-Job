<template>
  <div class="empty-layout"><router-view /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmptyLayout',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {},
  mounted () {}
})
</script>