<template>
   <div class="general"
    @click="show=!show"  >
        <h1 class="title">Общее</h1>
        <div class="arrow_icon">
            <img class="arrow"
            :class="{'turn-arrow': show}"
            src="~/shared/assets/images/arrow_back_ios.png">
        </div>
   </div>
   <div class="bodyGeneral"
    v-show="show">
    <div class="Theme_box">
        <p class="theme_title">Тема</p>
            <div class="white"
                  @click.stop.prevent="switchTheme('light')"
            >
                <input class="whiteInput"
                type="radio"
                name="theme"
                id="theme_one">
                    <label class="whiteTheme"
                    for="theme_one"
                    >Светлая</label>
            </div>
            <div class="darck"
                @click.stop.prevent="switchTheme('dark')"
            >
                <input class="darckInput"
                name="theme"
                type="radio"
                id="theme_two">
                    <label class="darckTheme"
                    for="theme_two"
                    @click.stop
                    >Темная</label>
            </div>
    </div>
        <div class="notifications"
        @click="box=!box" >
            <h2 class="title_1">Уведомления</h2>
            <div class="arrow_icon">
                <img class="arrow"
                :class="{'turn-arrow':box}"
                src="~/shared/assets/images/arrow_back_ping.png">
            </div>
        </div>
        <div class="pyncts"
        v-show="box">
            <div class="box_one" >
                <UiCheckbox  class="checkOne"
                name="text1"/>
                    <label class="pynctsTextOne"
                    for="text1"
                    style="position: center;">
                         Вас выбрали исполнителем/На вашу вакансию откликнулись
                    </label>
            </div>
            <div class="box_two">
                    <UiCheckbox  class="checkTwo"
                    name="text2"/>
                    <label class="pynctsTextTwo"
                    for="text2">
                        Вакансия, на которую вы откликались, закрыта работодателем
                    </label>
            </div>
            <div class="box_three" >
                <UiCheckbox type="checkbox"
                class="checkThree"
                name="text3" />
                    <label class="pynctsTextThree"
                    for="text3">
                        Новые сообщения
                    </label>
            </div>
            <div class="box_four" >
                <UiCheckbox type="checkbox"
                class="checkFour"
                name="text4"/>
                    <label class="pynctsTextFour"
                    for="text4">
                        Новые вакансии/соискатели
                    </label>
            </div>
        </div>
   </div>
   <div class="account"
   @click="account=!account" >
        <h1 class="title">Аккаунт</h1>
            <div class="arrow_icon">
                <img class="arrow"
                :class="{'turn-arrow': account}"
                src="~/shared/assets/images/arrow_back_ios.png">
            </div>
   </div>
   <div class="bodyAccount"
   v-show="account"
   style="width: 100%; height: 180px; margin-left: 80px;">
        <div
            v-for="( Phone,value ) in object"
            :key="value"
            style=" padding-top:30px; color: #604D9E;"
        >
            <p style="display: inline-block;">{{ value }}</p>
            <a style="display: inline-block; padding-left: 200px;">{{ Phone }}</a>
        </div>
        <button
            style="color:#604D9E;padding-top: 30px; padding-right: 30px;"
        >Изменить пароль</button>
    </div>
    <div class="Help"
        @click="help=!help" >
            <h1 class="title">Помощь</h1>
            <div class="arrow_icon">
            <img class="arrow"
            :class="{'turn-arrow': help}"
            src="~/shared/assets/images/arrow_back_ios.png">
        </div>
    </div>
   <div class="bodyHelp"
        v-show="help"
        style="margin-left:80px;"
    >
        <UiInput placeholder="Имя"
        style=" width: 50%;" />
        <UiInput placeholder="Email"
        style="width: 50%;margin-top:20px;"
        />
        <UiTextarea placeholder="Опишите проблему"
        style="width:50% ; margin-top:20px;"
        />
        <UiButton text="Отправить"
        style="width: 25%; margin-top:20px;"
        />
   </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'
import UiCheckbox from 'widgets/ui/UiCheckbox.vue'
import UiInput from 'widgets/ui/UiInput.vue'
import UiTextarea from 'widgets/ui/UiTextarea.vue'
import { type theme as Theme } from 'app/store/modules/themeSwitcher.store'

export default defineComponent({
  name: 'SettingsPage',
  data: () => ({
    show: false,
    box: false,
    account: false,
    help: false,
    object: {
      Phone: '8950705####',
      Email: 'ilaBorisov@yahoo.com',
    },
  }),
  components: { UiCheckbox, UiInput, UiTextarea, UiButton, },
  props: {},
  computed: {
    arrowLeft () {
      const arrow = 'turn-arrow'
      if (this.show === true) {
        return arrow
      }
      return true
    },
    themeHelper (): Theme {
      return this.$store.getters.getTheme
    },
  },
  methods: {
    toggle () {
      this.show = !this.show
      this.box = !this.box
      this.account = !this.account
      this.help = !this.help
    },
    switchTheme (theme: string) {
      this.$store.commit('switchTheme', theme)
    },
  },
  mounted () {},
})
</script>

  <style lang="scss">
    .title{
        cursor: pointer;
        color: #2C1B47;
        padding: 0 40px;
        display: inline-block;
        margin: 30px 40px 40px;
        font-size: 30px ;
    };

    .title_1{
        display: inline-block;
        padding: 0 40px;
        margin-right: 5px;
        cursor: pointer;
    };

    .arrow_icon{
        display: inline-block;

    };
    .turn-arrow {
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    };

    .bodyGeneral{

        display: inline-block;
    };

    //Theme
    .theme_box{

        display: inline-block;
        padding-bottom: 40px;
        margin-bottom: 40px;

    };

    .theme_title{

        color: #604D9E;
        font-size: 20px;
        display: inline-block;
        padding-left: 80px;
    };
    .white{

        display: inline-block;

    };
    .whiteInput{
        display: none;
        opacity: 0;

    };

    .whiteTheme{
        margin-left: 180px;
        color: #604D9E;
        display: inline-block;
        cursor: pointer;

    };

    .darckInput{
        display: none;
        opacity: 0;
    };
    .darck{

        display: inline-block;
    };
    .darckTheme{
        margin-left: 30px;
        color:#604D9E;
        display: inline-block;
        cursor: pointer;
    };

    .notifications{

        color: #604D9E;
        padding-left:40px ;
        padding-top:50px;
        font-size: 20px;
    };

    .pyncts{

        width: 100%;
        height: 200px;
        padding-top:20px;
        padding-left:70px;

    };

    .pynctsTextOne ,
    .pynctsTextTwo ,
    .pynctsTextThree ,
    .pynctsTextFour{

       display: block;
       padding-left: 50px;
        color:#604D9E;
        cursor: pointer;
    };

    .checkOne,
    .checkTwo,
    .checkThree,
    .checkFour{

        position:absolute;
        padding-right:50px ;
        display: block;
        float: left;
        width: 25px;
        height: 25px;
    };

    .box_one,
    .box_two,
    .box_three,
    .box_four{

        margin-top:20px ;
        width: auto;

    };

  </style>
