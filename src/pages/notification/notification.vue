<template>
 <div class="notification-page">
    <h1 class="notification-head">Уведомления</h1>
    <div
        class="notification-text"
        v-for="item in nots"
        :key="item.id"
    >
        <img src="~/shared/assets/images/check.png" class="notification-chek">
        <p>{{  item.text }}</p>
    </div>
 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
 name: 'notification',
 data: () => ({
    nots: [
        {
            id: 1,
            text: 'Добавила в друзья'
        },
        {
            id: 2,
            text: 'Выбрала исполнителем'
        }
    ]
 }),
 components: {},
 props: {},
 computed: {},
 methods: {},
 mounted () {},
})
</script>

<style lang="scss">
.notification-page{
    padding: 10px 20px 0;
}
.notification-head{
margin-top: 40px;
margin-left: 35px;
font-size: 30px;
}
.notification-text{
    display: flex;
    margin-left: 35px;
    margin-top: 35px;
}
.notification-chek{
    margin-right: 10px;
    cursor: pointer;
}
</style>