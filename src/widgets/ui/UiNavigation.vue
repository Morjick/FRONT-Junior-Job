<template>
  <div
    v-bind:class="'navigation' + ' ' + showingClass"
    @click="hideNav"
    ref="closeArea"
  >
    <div class="navigation__sidebar">
      <!-- Вход/регистрация -->
      <div class="navigation__user-wrapper">
        <img src="~/shared/assets/images/account_circle.png" class="navigation__user-icon">
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

      <!-- Список с ссылками -->
      <nav class="navigation__nav">
        <ul class="navigation__list">
          <!-- Уведомления -->
          <li class="navigation__element">
            <a href="#" class="navigation__element-link">
              <img src="~/shared/assets/images/notifications.png" class="navigation__element-icon">
              <div class="navigation__element-text">Уведомления</div>
            </a>
          </li>

          <!-- Вакансии -->
          <li class="navigation__element">
            <a href="#" class="navigation__element-link">
              <img src="~/shared/assets/images/work.png" class="navigation__element-icon">
              <div class="navigation__element-text">Вакансии</div>
            </a>
          </li>

          <!-- Статьи -->
          <li class="navigation__element">
            <router-link to="/articles" class="navigation__element-link">
              <img src="~/shared/assets/images/note.png" class="navigation__element-icon">
              <div class="navigation__element-text">Статьи</div>
            </router-link >
          </li>

          <!-- Мои отзывы -->
          <li class="navigation__element">
            <a href="#" class="navigation__element-link">
              <img src="~/shared/assets/images/star.png" class="navigation__element-icon">
              <div class="navigation__element-text">Мои отзывы</div>
            </a>
          </li>

          <!-- Настройки -->
          <li class="navigation__element">
            <a href="#" class="navigation__element-link">
              <img src="~/shared/assets/images/settings.png" class="navigation__element-icon">
              <div class="navigation__element-text">Настройки</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiNavigation",
  props: ["showingClass"],
  methods: {
    hideNav(event) {
      if (event.target === this.$refs.closeArea) {
        this.$emit("hideNav");
      }
    },
  },
});
</script>

<style lang="scss">
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
}

.navigation.navigation_show {
  left: 0;
}

.navigation__sidebar {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-main);
  padding: 30px 15px 0 15px;
  width: 260px;
  height: 100%;
}

.navigation__user-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.navigation__user-icon {
  width: 36px;
  height: 36px;
  margin-right: 15px;
}

.navigation__user-account {
  display: flex;
  flex-direction: column;
}

.navigation__user-account a {
  font-weight: 400;
  font-size: 25px;
  text-decoration: none;
}

.navigation__element {
  margin-bottom: 30px;
}

.navigation__element-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navigation__element-icon {
  width: 28px;
  height: 28px;
  margin-right: 15px;
}

.navigation__element-text {
  font-weight: 400;
  font-size: 25px;
  color: var(--color-font-alternative);
}

.navigation__element:last-child {
  margin-bottom: 0;
}
</style>