<template>
  <section class="message-list">
    <h2 class="message-list__title">Сообщения</h2>

    <div
      class="message-list__messages"
      v-for="user in users"
      :key="user.id"
    >
      <router-link
        class="message-list__item"
        to="/message"
      >
        <img
          :src="user.avatar"
          class="message-list__avatar"
        >

        <div class="message-list__info">
          <div class="message-list__name">{{ user.name }}</div>
          <div class="message-list__last-message">{{ user.lastMessage }}</div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface user {
  name: string,
  avatar?: string,
  id: number,
  lastMessage: string,
}

export default defineComponent({
  name: 'MessageList',
  props: {},
  data: () => ({
    users: [
      {
        name: 'Чернявский Иван',
        avatar: require('shared/assets/images/temp-home-logo.png').default,
        lastMessage: 'Расскажите про свой опыт',
        id: 0,
      },
      {
        name: 'София Собачкина',
        avatar: require('shared/assets/images/temp-home-logo.png').default,
        lastMessage: 'Расскажите про свой опыт',
        id: 1,
      },
      {
        name: 'Чернявский Иван',
        avatar: require('shared/assets/images/temp-home-logo.png').default,
        lastMessage: 'Расскажите про свой опыт',
        id: 2,
      },
    ] as Array<user>,
  }),
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
  .message-list {
    padding: 30px 30px;
    &__title {
      font-family: 'Source Sans Pro';
      font-weight: 600;
      font-size: 25px;
      line-height: 20px;
      color: var(--color-helper);
      margin-bottom: 30px;
    }
    &__item {
      display: flex;
    }
    &__avatar {
      margin-right: 10px;
      width: 50px;
      height: 50px;
    }
    &__name {
      font-family: 'Marmelad';
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 5px;
      color: #000;
    }
    &__last-message {
      font-weight: 300;
      font-size: 20px;
      margin-bottom: 20px;
      color: #000;
    }
  }
</style>
