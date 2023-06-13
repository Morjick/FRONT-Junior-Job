<template>
  <div class="user-info">
    <router-link
      to="/"
      class="account__notifications"
    >
      <img
        src="~/shared/assets/images/notifications.png"
        class="user-info__notifications-image"
      />
    </router-link>

    <router-link
      to="/message-list"
      class="account__chat"
    >
      <img
        src="~/shared/assets/images/chat_bubble.png"
        class="user-info__chat-image"
      />
    </router-link>

    <div class="account">
      <img
        src="~/shared/assets/images/account_circle.png"
        class="account__image"
      />
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
      <div
        class="account__info"
        v-else
      >
        {{ getMainUser.firstname }} {{ getMainUser.lastname }}
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
  },
  data: () => ({}),
  methods: {},
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
    width: 45px;
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
}
</style>
