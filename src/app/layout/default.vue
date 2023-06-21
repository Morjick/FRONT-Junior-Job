<template>
  <div class="pages">
    <div class="pages__header">
      <div
        class="burger-menu"
        @click="showNav"
        v-if="screen < 700"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="pages__header-wrapper">
        <logotype
          theme="light"
          class="pages__logo"
        />

        <ui-user-info v-if="screen >= 700"/>
      </div>

      <ui-navigation
        :showingClass="showingClass"
        @hideNav="hideNav"
        class="pages__nav"
      />

      <ui-search-form
        v-if="screen >= 700"
        class="pages__search"
      />
    </div>

    <div
      class="pages__space"
      v-if="$route.path === '/profile' || $route.path === '/wallet'"
    ></div>

    <div class="pages__body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Logotype from 'widgets/global/Logotype.vue'
import UiNavigation from 'widgets/ui/UiNavigation.vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiUserInfo from 'widgets/ui/UiUserInfo.vue'

export default {
  name: 'DefaultLayout',
  components: {
    UiNavigation,
    Logotype,
    UiSearchForm,
    UiUserInfo,
  },
  data () {
    return {
      showingClass: '',
    }
  },
  methods: {
    showNav () {
      this.showingClass = 'navigation_show'
    },
    hideNav () {
      this.showingClass = ''
    },
  },
  computed: {
    screen () {
      return this.$store.getters.getScreenWidth
    },
  },
  created () {
    window.addEventListener('resize', () => this.$store.commit('updateScreenWidth'))
  },
}
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.pages {
  background-color: var(--color-primery);
  @include mixin.adaptive(tablet) {
    background-color: var(--color-main);
  }
  &__nav {
    @include mixin.adaptive(tablet) {
      margin-bottom: 10px;
    }
  }
  &__search {
    width: 80%;
    height: 40px;
    & input {
      min-width: 94%;
    }
  }
  &__logo {
    margin-bottom: 10px;
  }
  &__header {
    background-color: var(--color-primery);
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    @include mixin.adaptive(tablet) {
      padding: 20px 30px;
      height: 185px;
      display: block;
      background-color: var(--color-main);
    }
    @include mixin.adaptive(desktop) {
      padding: 20px 50px;
    }
    &-wrapper {
      @include mixin.adaptive(tablet) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
      }
    }
  }
  &__body {
    background-color: var(--color-main);
    border-radius: 60px 60px 0 0;
    min-height: calc(100vh - 90px);
  }
  &__space {
    height: 70px;
    @include mixin.adaptive(tablet) {
      height: 0;
    }
  }
}

.burger-menu {
  width: 24px;
  height: 16px;
  cursor: pointer;
  & span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-main);
    margin-bottom: 4px;
  }
  & span:last-child {
    margin-bottom: 0;
  }
}
</style>
