<template>
  <div class="ui-user-picker"
@click="targetShow">
    <div class="ui-user-picker-inner">
      <div class="ui-user-picker-avatar"></div>
      <div class="ui-user-picker-name">Matvey Khramov</div>
    </div>
    <div
      class="ui-user-picker-body"
      :class="{
        active: showPicker,
      }"
    >
      <p>Настройки</p>
      <p>Добавить аккаунт</p>
      <p class="singout">Выйти</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiUserPicker',
  data: () => ({
    showPicker: false,
  }),
  components: {},
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
  computed: {},
  methods: {
    targetShow () {
      this.showPicker = true

      setTimeout(() => {
        this.showPicker = false
      }, 2000)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ui-user-picker {
  position: relative;
  height: 50px;

  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(#000, 0.1);
  }

  &-inner {
    display: flex;
    align-items: center;

    height: 40px;
  }

  &-avatar {
    width: 40px;
    height: 40px;

    border-radius: 50%;
    background: var(--admin-main-color-font);
    margin-right: 10px;
  }

  &-body {
    position: absolute;
    width: 100%;

    margin: 10px;
    padding: 10px;

    transform: translate(-10px, -10px);
    background: var(--admin-main-color);
    transition: all 0.2s;
    z-index: 30;

    opacity: 0;
    pointer-events: none;

    &.active,
    &:hover {
      opacity: 1;
      pointer-events: all;
      transform: translate(-10px, 0);
    }

    p {
      margin-bottom: 5px;

      transition: all 0.2s;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        color: var(--admin-color-primery);
      }

      &.singout:hover {
        color: red;
      }
    }
  }
}
</style>
