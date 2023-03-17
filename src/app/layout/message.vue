<template>
 <div class="message-layout">
    <header class="message-layout__header">
      <div class="message-layout__header-left">
        <img
          @click="pushToPrevPage"
          src="~/shared/assets/images/arrow_back_white.png"
          alt="click to go back"
          class="message-layout__prev"
        >

        <div class="destination-user">
          <img
            :src="imageSrc"
            class="destination-user__avatar"
            @click="pushToProfile"
          >
          <div class="destination-user__name">{{ name }}</div>
        </div>
      </div>
    </header>

    <div class="message-layout__body">
      <router-view />
    </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageLayout',
  data: () => ({
    name: 'Карпов Илья',
    imageSrc: require('shared/assets/images/account_circle.png').default,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToPrevPage () {
      this.$router.back()
    },
    pushToProfile () {
      this.$router.push('/profile')
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
  .message-layout {
    &__header {
      background-color: var(--color-primery);
      padding: 35px 20px 20px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-left {
        display: flex;
        align-items: center;
      }
    }
    &__prev {
      display: block;
      width: 24px;
      height: 24px;
      margin-right: 21px;
      cursor: pointer;
      pointer-events: all;
    }
    &__more {
      width: 35px;
      height: 35px;
      cursor: pointer;
      pointer-events: all;
    }
  }
  .destination-user {
    display: flex;
    align-items: center;
    &__avatar {
      width: 40px;
      height: 40px;
      margin-right: 5px;
      cursor: pointer;
      pointer-events: all;
    }
    &__name {
      font-family: 'Marmelad';
      font-weight: 400;
      font-size: 25px;
    }
  }
</style>
