<template>
  <div class="notification">
    <h1 class="notification-main">Уведомления</h1>
    <div v-if="notification.length">
      <div
        class="notification-objects"
        v-for="item in notification"
        :key="item.id"
      >
        <div>
          <img
            src="~/shared/assets/images/check.png"
            alt=""
            v-if="item.icon === 'change'"
          />
          <img
            src="~/shared/assets/images/beenhere.png"
            alt=""
            v-if="item.icon === 'done'"
          />
          <img
            src="~/shared/assets/images/feed.png"
            alt=""
            v-if="item.icon === 'article'"
          />
          <span>{{ item.text }}</span>
        </div>
        <div
          v-if="item.icon === 'done'">
          <button
          class="notification-button">
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
    <p v-else>У вас пока нет уведомлений!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { notificationI } from 'app/store/modules/notification.store'

export default defineComponent({
  name: 'NotificationPage',
  data: () => ({}),
  components: {},
  props: {},
  computed: {
    notification (): notificationI[] {
      return this.$store.getters.getNotifications
    },
  },
  methods: {
    async getNotification () {
      try {
        const { data, }: any = await this.axios.get('notification/get-many')
        const notifications = data.notifications

        console.log(notifications)
      } catch (e) {
        return e
      }
    },
  },
  mounted () {
    this.getNotification()
  },
})
</script>

<style lang="scss">
.notification {
  padding: 27px 32px;
}
.notification-main {
  margin: 0px 0px 27px;
  font-size: 30px;
}
.notification-objects div {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    display: block;
    margin-left: 14px;
    font-size: 25px;
  }
  img {
    width: 24px;
    height: 24px;
  }
}
.notification-button {
  margin-left: 40px;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  color: white;
  background-color: var(--color-alternative);
  border-radius: 20px;
}
</style>
