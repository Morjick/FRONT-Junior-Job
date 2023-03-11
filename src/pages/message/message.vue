<template>
 <div class="message">
  <h1 class="message-main">Сообщения</h1>
  <div
        class="message-liter"
        v-for="item in nots"
        :key="item.id"
    >
        <img src="~/shared/assets/images/logo.png" class="message-icon">
        <p>{{  item.text }}</p>
    </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 name: 'message',
 data: () => ({
  nots: [
    { id: 1,
      text: 'Name Surname',
      messages: [
        {
          time: '',
          author: '',
        }
      ]
    },
    {
      id: 2,
      text: 'Name Surname',
      messages: [
        {
          time: '',
          author: '',
        }
      ]
    }
  ]
 }),
 components: {},
 props: {},
 computed: {},
 methods: {},
 mounted () {}
})
</script>

<style lang="scss">
.message{
  padding: 10px 20px 0;
}
.message-liter{
  display: flex;
  margin-left: 35px;
  margin-top: 35px;
}
.message-main{
  margin-top: 40px;
  margin-left: 35px;
  font-size: 30px;
}
.message-icon{
  margin-right: 40px;
  cursor: pointer;
}
</style>