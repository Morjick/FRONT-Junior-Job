<template>
  <div
    class="admin-layout"
    :class="theme"
  >
    <div class="admin-sidebar">
      <h1>In Theme</h1>
      <ul class="admin-sidebar-list">
        <li
          v-for="item in menu"
          :key="item.id"
          class="admin-sidebar-list-item"
          :class="{
            active: $route && $route.path == `/admin/${item.path}`
          }"
          @click="pushToMenuPage(item)"
        >
          {{  item.title  }}
        </li>
      </ul>
    </div>
    <div class="admin-window">
      <div class="admin-window-header">
        <router-link
          to="/tasks"
          class="admin-window-header-link"
        >
          <img
            src="~/shared/assets/images/task.png"
            alt=""
          >
        </router-link>
        <ui-user-picker />
      </div>
      <div class="admin-window-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiUserPicker from 'widgets/admin/UiUserPicker.vue'

interface menuItem {
  id: number
  title: string
  path: string
}

export default defineComponent({
  name: 'AdminLayout',
  data: () => ({
    theme: 'light',
    menu: [
      {
        id: 1,
        title: 'Обращения',
        path: 'appeals',
      },
      {
        id: 2,
        title: 'Статьи',
        path: 'articles',
      },
      {
        id: 3,
        title: 'Пользователи',
        path: 'users',
      },
      {
        id: 4,
        title: 'Вакансии',
        path: 'jobs',
      },
      {
        id: 5,
        title: 'Категории вакансий',
        path: 'category',
      },
      {
        id: 6,
        title: 'Настройки',
        path: 'settings',
      },
    ],
  }),
  components: { UiUserPicker, },
  props: {},
  computed: {},
  methods: {
    pushToMenuPage (item: menuItem) {
      this.$router.push(item.path)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.admin-layout {
  display: flex;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
}

.admin-sidebar {
  width: 300px;
  height: 100vh;

  background: var(--admin-color-primery);

  h1 {
    font-size: 34px;
    text-align: center;
    color: var(--admin-alternative-color-font);
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    text-shadow: 0 0 2px var(--admin-main-color-font);
    border: 1px solid var(--admin-alternative-color-font);
  }

  &-list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    padding: 20px 0 0;

    &-item {
      color: var(--admin-alternative-color-font);
      transition: all .2s;
      cursor: pointer;
      padding: 10px 15px;

      &:hover, &.active {
        background: var(--admin-main-color);
        color: var(--admin-color-primery);
      }
    }
  }
}

.admin-window {
  width: calc(100vw - 300px);
  background: blue;

  &-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: 100%;
    height: 50px;

    background: var(--admin-main-color);
    padding: 0 20px;

    &-link {
      width: 30px;
      height: 30px;
      margin-right: 20px;

      img {
        width: 100%;
      }
    }
  }

  &-body {
    background: var(--admin-main--background-color);
    height: calc(100vh - 50px);
    padding: 20px 10px;

    overflow-y: auto;
  }
}
</style>
