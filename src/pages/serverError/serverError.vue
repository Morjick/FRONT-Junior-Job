<template>
  <div class="server-error-page">
    <img src="~/shared/assets/images/server-error.png"
alt=""
class="server-error-page__logo">
    <h2 class="server-error-page__title">501</h2>
    <div class="server-error-page__text">
      Ремонтируем<br>
      сервер
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'serverError',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
  .server-error-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__title {
      font-family: 'Marmelad';
      text-align: center;
      font-weight: 400;
      font-size: 55px;
    }
    &__text {
      text-align: center;
      font-family: 'Source Sans Pro';
      font-weight: 400;
      font-size: 25px;
    }
  }
</style>
