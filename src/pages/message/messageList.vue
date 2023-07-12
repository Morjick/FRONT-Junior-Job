<template>
  <section class="message-list">
    <h2 class="message-list__title">Сообщения</h2>

    <div v-if="users.length">
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
            <div class="message-list__name">{{ user.firstname }}</div>
            <div class="message-list__last-message">{{ user.lastname }}</div>
          </div>
        </router-link>
      </div>
    </div>
    <p v-else>У вас пока нет сообщений</p>
  </section>
</template>

<script lang="ts">
import { UserI } from 'app/store/modules/auth.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageList',
  props: {},
  data: () => ({
    users: [] as UserI[],
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
