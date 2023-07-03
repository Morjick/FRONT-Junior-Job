<template>
  <div class="switchBubble">
    <div class="switch_box_ur">
      <UiButton class="switch_button"
                :class="{
                  active: active === 'legal'
                }"
                @click="handleForm ('legal')"
                text="Юр.лицо"
      />
    </div>
    <div class="switch_box_fis">
      <UiButton class="switch_button"
                :class="{
                  active: active === 'physical'
                }"
                @click="handleForm('physical')"
                text="Физ.лицо"
      />
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from './UiButton.vue'

export default defineComponent({
  name: 'UiSwitchBubble',
  data: () => ({
    active: 'physical',
  }),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    handleForm (activeElement:string) {
      this.active = activeElement
    },
  },
  mounted () { },
})
</script>

<style lang="scss">
//Style//

.switchBubble {
  display: inline-block;
  border-radius: 15px;
  background-color: #AAA2D8;
  min-height: 50px;
  min-width: 311px;
  margin: 0;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

;

.switch_box_ur {
  display: inline-block;
  min-width: 164px;
  min-height: 50px;
  border-radius: 15px;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

;

.switch_box_fis {
  display: inline-block;
  min-width: 164px;
  min-height: 50px;
  border-radius: 15px;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

;

.switch_button {
  min-width: 164px;
  min-height: 50px;
  border-radius: 15px;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

;

//Active Button Style//

.switch_button.active {
  border-radius: 15;
  color: #AAA2D8;
  background-color: #fff;
  transition: 0.2s;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

//Active Box Style//

.switch_box_fis.switch_box_ur:hover {
  border-radius: 15;
  color: #AAA2D8;
  background-color: #fff;
  transition: 0.2s;
  margin: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
}

;</style>
