<template>
  <div>
    <router-link to="/">General</router-link>
    <router-link to="/about">About Us</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
