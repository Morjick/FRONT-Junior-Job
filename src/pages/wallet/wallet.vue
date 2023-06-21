<template>
  <section class="wallet">
    <div class="wallet__wrapper">
      <img
        src="~/shared/assets/images/bigLogo.png"
        class="wallet__logo"
      >

      <div class="wallet__balance-wrapp">
        <div class="wallet__balance">{{ balance }}₽</div>

        <ui-button
          :text="'Пополнить'"
          class="wallet__button"
        />
      </div>
    </div>

    <h2 class="wallet__title">История</h2>

    <div
      class="wallet__history history"
      v-for="operation in payment"
      :key="operation.id"
    >
      <div class="history__data">
        {{ operation.date }}
      </div>

      <div class="history__operation operation">
        <img
          v-if="operation.operationType === 'waste'"
          src="~/shared/assets/images/min_card.png"
          class="operation__img"
        >
        <img
          src="~/shared/assets/images/add_card.png"
          class="operation__img"
          v-else
        >

        <div class="operation__text">
          {{ operation.text }}
        </div>
        <div class="operation__sum">
          {{ operation.sum }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'
import { paymentOperationsI } from './payment.store'

export default defineComponent({
  name: 'WalletPage',
  components: {
    UiButton,
  },
  data: () => ({
    balance: 450,
  }),
  props: {},
  computed: {
    payment (): paymentOperationsI[] {
      return this.$store.getters.getPaymentHistory
    },
  },
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.wallet {
  padding: 0 30px;
  transform: translateY(-97px);
  @include mixin.adaptive(tablet) {
    transform: translateY(0);
    padding-top: 20px;
  }
  &__wrapper {
    @include mixin.adaptive(tablet) {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }
  }
  &__logo {
    display: block;
    width: 210px;
    height: 194px;
    margin: 0 auto;
    @include mixin.adaptive(tablet) {
      margin: 0;
      margin-right: 30px;
    }
  }
  &__balance {
    font-weight: 400;
    font-size: 50px;
    color: #000000;
    text-align: center;
    @include mixin.adaptive(tablet) {
      text-align: left;
    }
  }
  &__button {
    width: 160px;
    min-height: 40px;
    font-weight: 600;
    font-size: 20px;
    margin: 0 auto;
    margin-bottom: 30px;
    @include mixin.adaptive(tablet) {
      margin: 0;
      min-width: 200px;
    }
  }
  &__title {
    font-weight: 600;
    font-size: 25px;
    color: var(--color-font);
    margin-bottom: 20px;
  }
}
.history {
  &__data {
    font-weight: 300;
    font-size: 20px;
    color: var(--color-alternative);
    margin-bottom: 10px;
  }
}
.operation {
  display: flex;
  align-items: center;
  &__img {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
  &__text {
    font-weight: 300;
    font-size: 20px;
    color: var(--color-textarea);
    margin-right: 10px;
  }
  &__sum {
    font-weight: 400;
    font-size: 25px;
  }
}
</style>
