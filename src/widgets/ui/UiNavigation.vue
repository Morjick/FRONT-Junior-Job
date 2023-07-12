<template>
  <div
    v-bind:class="'navigation' + ' ' + showingClass"
    @click="hideNav"
    ref="closeArea"
    v-if="screen < 700"
  >
    <div class="navigation__sidebar">
      <!-- Вход/регистрация -->
      <div
        v-if="!isAuth"
        class="navigation__user-wrapper"
      >
        <img
          src="~/shared/assets/images/account_circle.png"
          class="navigation__user-icon"
        />
        <div class="navigation__user-account">
          <router-link
            to="/auth?form=all&methods=singin"
            class="navigation__user-enter"
            >Вход</router-link
          >
          <router-link
            to="/join?methods=singup"
            class="navigation__user-registration"
            >Регистрация</router-link
          >
        </div>
      </div>
      <div
        class="account__info"
        v-else
      >{{ getMainUser.firstname }} {{ getMainUser.lastname }}</div>

      <nav class="navigation__desktop">
        <ul class="navigation__list">
          <!-- Вакансии -->
          <li class="navigation__element">
            <router-link
              to="/categories"
              class="navigation__element-link"
            >
              <img
                src="~/shared/assets/images/work.png"
                class="navigation__element-icon"
              />
              <div class="navigation__element-text">Вакансии</div>
            </router-link>
          </li>

          <!-- Уведомления -->
          <li class="navigation__element">
            <router-link
              to="/notification"
              class="navigation__element-link">
              <img
                src="~/shared/assets/images/notifications.png"
                class="navigation__element-icon">
              <div class="navigation__element-text">Уведомления</div>
            </router-link>
          </li>

          <!-- Статьи -->
          <li class="navigation__element">
            <router-link to="/articles"
              class="navigation__element-link">
              <img
                src="~/shared/assets/images/note.png"
                class="navigation__element-icon"
              />
              <div class="navigation__element-text">Статьи</div>
            </router-link>
          </li>

          <li class="navigation__element">
            <router-link to="/message-list"
              class="navigation__element-link">
              <img
                src="~/shared/assets/images/chat_bubble.png"
                class="navigation__element-icon"
              />
              <div class="navigation__element-text">Сообщения</div>
            </router-link>
          </li>

          <!-- Настройки -->
          <li class="navigation__element">
            <router-link
              to="/settings"
              class="navigation__element-link"
            >
              <img
                src="~/shared/assets/images/settings.png"
                class="navigation__element-icon"
              />
              <div class="navigation__element-text">Настройки</div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <nav
    class="nav-desktop"
    v-else
  >
    <ul class="nav-desktop__list">
      <li class="nav-desktop__list-item">
            <router-link
              to="/categories"
              class="navigation__element-link"
            >
              <img
                src="~/shared/assets/images/work.png"
                class="nav-desktop__img"
              />
              <div class="navigation__element-text">Вакансии</div>
            </router-link>
          </li>

      <li class="nav-desktop__list-item">
        <router-link to="/articles">
          <img
            src="~/shared/assets/images/note.png"
            class="nav-desktop__img"
          />
          статьи
        </router-link>
      </li>

      <li class="nav-desktop__list-item">
        <router-link to="/settings">
          <img
            src="~/shared/assets/images/settings.png"
            class="nav-desktop__img"
          />
          настройки
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiNavigation',
  props: ['showingClass', ],
  methods: {
    hideNav (event) {
      if (event.target === this.$refs.closeArea) {
        this.$emit('hideNav')
      }
    },
  },
  computed: {
    screen () {
      return this.$store.getters.getScreenWidth
    },
    isAuth () {
      return this.$store.getters.isAuth
    },
    getMainUser () {
      return this.$store.getters.getMainUser
    },
  },
  created () {
    window.addEventListener('resize', () => this.$store.commit('updateScreenWidth'))
  },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.navigation {
  display: block;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: -100%;
  background: rgba(0, 0, 0, 0.4);
  backface-visibility: hidden;
  overflow: hidden;
  z-index: 1;
  transition: 0.3s all;
  &.navigation_show {
    left: 0;
  }
  &__sidebar {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--color-main);
    padding: 30px 15px 0 15px;
    width: 260px;
    height: 100%;

    .account__info {
      margin: 20px 0;
      font-weight: bold;
      font-size: 24px;
    }
  }
  &__user-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  &__user-icon {
    width: 36px;
    height: 36px;
    margin-right: 15px;
  }
  &__user-account {
    display: flex;
    flex-direction: column;
  }
  &__user-account a {
    font-weight: 400;
    font-size: 25px;
    text-decoration: none;
  }
  &__element {
    margin-bottom: 30px;
  }
  &__element-link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &__element-icon {
    width: 28px;
    height: 28px;
    margin-right: 15px;
  }
  &__element-text {
    font-weight: 400;
    font-size: 25px;
    color: var(--color-font-alternative);
  }
  &__element:last-child {
    margin-bottom: 0;
  }
}

.nav-desktop {
  &__list {
    display: flex;
    @include mixin.adaptive(tablet) {
      justify-content: space-between;
    }
    @include mixin.adaptive(desktop) {
      justify-content: flex-start;
    }
  }
  &__list-item {
    @include mixin.adaptive(desktop) {
      margin-right: 70px;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__list-item a {
    font-weight: 400;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 18px;
    color: var(--color-font-alternative)
  }
  &__img {
    margin-right: 5px;
  }
}
</style>
