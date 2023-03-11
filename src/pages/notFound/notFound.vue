<template>
  <div class="not-found-page">
    <img src="~/shared/assets/images/not-found.png"
alt="" />
    <h2>404</h2>
    <p>
      Страница <br />
      не найдена
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'notFound',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>
