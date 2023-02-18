<template>
  <div class="pages">
    <div class="pages-header">
      <ui-navigation :showingClass="showingClass" @hideNav="hideNav"/>

      <div class="burger-menu" @click="showNav">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <span class="page-logo">Junior Job</span>
    </div>
    <div class="pages-body">
      <router-view />
    </div>
  </div>
</template>

<script>
import UiNavigation from 'widgets/ui/UiNavigation.vue'

export default {
  name: 'DefaultLayout',
  components: {
    UiNavigation
  },
  data() {
    return {
      showingClass: ""
    }
  },
  methods: {
    showNav() {
      this.showingClass = "navigation_show";
    },
    hideNav() {
      this.showingClass = "";
    }
  }
}
</script>
