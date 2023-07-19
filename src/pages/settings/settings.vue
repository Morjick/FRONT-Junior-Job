<template>
  <div class="settings">
    <h1>Настройки</h1>

    <div
      class="settings-accordion"
      v-if="false"
    >
      <p class="settings-accordion-title">Общие</p>
      <div class="settings-accordion-body">
        <div class="settings-accordion-item">
          <span>Тема</span>

          <div>
            <span
              style="margin-right: 10px"
              :class="{
                themeActive: theme === 'light'
              }"
              @click="switchTheme('light')"
            >Светлая</span>
            <span
              :class="{
                  themeActive: theme === 'dark'
              }"
              @click="switchTheme('dark')"
            >Темная</span>
          </div>
        </div>
      </div>
    </div>

    <div
      class="settings-accordion"
      v-if=" mainUser?.email"
    >
      <p
        class="settings-accordion-title"
      >Аккаунт</p>

      <div class="settings-accordion-body">
        <div class="settings-accordion-item">
          <span>Email:</span>
          <span class="themeActive">{{ mainUser?.email }}</span>
        </div>
      </div>
    </div>

    <div class="settings-accordion">
      <p class="settings-accordion-title">Помощь</p>

      <ui-input
        placeholder="Имя"
        v-model="name"
      />

      <ui-input
        placeholder="Телефон"
        v-model="phone"
        style="margin-top: 15px;"
      />

      <ui-input
        placeholder="Email"
        v-model="email"
        style="margin: 15px 0;"
      />

      <ui-textarea
        placeholder="Опишите проблему"
        v-model="body"
      />

      <ui-button
        text="Отправить"
        style="max-width: 200px;"
        @click="sendSupportMessage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { type ThemeEnum } from '../../app/store/modules/themeSwitcher.store'
import UiInputVue from '../../widgets/ui/UiInput.vue'
import UiTextareaVue from '../../widgets/ui/UiTextarea.vue'
import UiButtonVue from '../../widgets/ui/UiButton.vue'

const UiInput: any = UiInputVue
const UiTextarea: any = UiTextareaVue
const UiButton: any = UiButtonVue

export default defineComponent({
  name: 'SettingsPage',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    body: '',
  }),
  components: { UiInput, UiTextarea, UiButton, },
  props: {},
  computed: {
    theme (): ThemeEnum {
      return this.$store.getters.getTheme
    },
    mainUser () {
      return this.$store.getters.getMainUser
    },
  },
  methods: {
    switchTheme (theme: string) {
      this.$store.commit('switchTheme', theme)
    },
    async sendSupportMessage () {
      // if (!this.name?.length || !this.name?.email || !this.body?.lengt) {
      //   return false
      // }
      const message = {
        name: this.name,
        email: this.email,
        body: this.body,
        phonoe: this.phone,
      }

      await this.axios.post('support/create', message)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.themeActive {
  border-bottom: 1px solid var(--color-font-alternative);
}

.settings {
  padding: 20px 40px;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  &-accordion {
    margin-top: 20px;

    &-title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    &-item {
      max-width: 400px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      cursor: pointer;

      span {
        color: var(--color-font-alternative);
      }
    }
  }
}
</style>
