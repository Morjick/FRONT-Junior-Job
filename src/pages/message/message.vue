<template>
 <div class="message">
  <div class="message__letter-list">
    <ui-letter
      v-for="{name, text, time, author, id} in messages"
      :key="id"
      :name="name"
      :text="text"
      :time="time"
      :author="author"
    />
  </div>

  <div class="message__send-wrapper">
    <div class="message__send">
      <ui-input
        :placeholder="inputPlaceholder"
        class="message__input"
        v-model="inputValue"
      />
      <img
        src="~/shared/assets/images/send.png"
        alt="click to send message"
        class="message__send-btn"
      />
    </div>
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiInput from 'widgets/ui/UiInput.vue'
import UiLetter from 'widgets/ui/UiLetter.vue'

interface Message {
  name: string,
  text: string,
  time: string,
  author: string,
  id: number
}

export default defineComponent({
  name: 'MessagePage',
  props: {},
  components: {
    UiInput,
    UiLetter,
  },
  data: () => ({
    inputPlaceholder: 'Сообщение' as string,
    messages: [
      {
        name: 'Елена',
        text: 'Илья, добрый день!',
        time: '00:00',
        author: 'elena',
        id: 1,
      },
      {
        name: '',
        text: 'Здравствуйте!',
        time: '00:00',
        author: 'user',
        id: 2,
      },
      {
        name: 'Елена',
        text: 'Хотим предложить вам работу',
        time: '00:01',
        author: 'elena',
        id: 3,
      },
      {
        name: '',
        text: 'Извините, но я уже нашел работу',
        time: '00:02',
        author: 'user',
        id: 4,
      },
      {
        name: 'Елена',
        text: 'Вы уверены, что не нуждаетесь в работе? Мы можем предложить большую зарплату',
        time: '00:02',
        author: 'elena',
        id: 5,
      },
      {
        name: '',
        text: 'Да, я уверен в этом',
        time: '00:02',
        author: 'user',
        id: 6,
      },
    ] as Array<Message>,
    inputValue: '',
  }),
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
  .message {
    &__send-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      width: 100%;
    }
    &__send {
      padding: 12px 20px;
      background: var(--color-primery);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    &__input {
      width: 80%;
      border: none;
      background: var(--color-main);
    }
    &__send-btn {
      width: 35px;
      height: 35px;
      cursor: pointer;
      pointer-events: all;
    }
    &__letter-list {
      min-height: calc(100vh - 95px - 74px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-top: 20px;
    }
  }
</style>
