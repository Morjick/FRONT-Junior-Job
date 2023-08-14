<template>
  <div class="user-info">
    <router-link
      to="/notification"
      class="account__notifications"
      v-if="isAuth"
    >
      <img
        src="~/shared/assets/images/notifications.png"
        class="user-info__notifications-image"
      />
    </router-link>

    <router-link
      to="/message-list"
      class="account__chat"
      v-if="isAuth"
    >
      <img
        src="~/shared/assets/images/chat_bubble.png"
        class="user-info__chat-image"
      />
    </router-link>

    <div class="account">
      <img
        src="~/shared/assets/images/account_circle.png"
        alt=""
        class="account__image"
        v-if="!avatar || !avatar.length"
      >
      <img
        :src="avatar"
        alt=""
        class="account__image"
        v-else
      >
      <div
        class="account__info"
        v-if="isAuth"
      >
        {{ getMainUser.firstname }} {{ getMainUser.lastname }}
        <br>
        <span
          class="account__exit"
          @click="signOut"
        >Выйти</span>
      </div>
      <div
        class="account__info"
        v-if="!isAuth"
      >
        <router-link
          to="/auth?form=all&methods=singin"
          class="account__enter"
        >
        Вход
        </router-link>
        <router-link
          to="/join?methods=singup"
          class="account__registration"
        >
        Регистрация
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiUserInfo',
  props: {},
  computed: {
    isAuth () {
      return this.$store.getters.isAuth
    },
    getMainUser () {
      return this.$store.getters.getMainUser
    },
    avatar (): string {
      if (!this.$store.getters.getMainUser) return ''
      return this.$store.getters.defaultImageUrl + this.$store.getters.getMainUser.avatar
    },
  },
  data: () => ({}),
  methods: {
    signOut () {
      this.$store.dispatch('signOut')
    },
  },
  mounted () {
  },
})
</script>

<style lang="scss">
.user-info {
  display: flex;
  align-items: center;
  &__notifications-image, &__chat-image {
    margin-right: 20px;
  }
}
.account {
  display: flex;
  align-items: center;
  &__image {
    height: 45px;
    margin-right: 10px;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }
  &__enter, &__registration {
    font-family: 'Marmelad';
    font-weight: 400;
    font-size: 25px;
    color: var(--color-helper);
  }
  &__exit {
    margin: 10px 0 0;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
