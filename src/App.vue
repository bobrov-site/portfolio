<script setup>
import NavbarHeader from './components/Navbar-header.vue'
import FooterBar from './components/Footer-bar.vue'
</script>

<template>
  <div class="app">
    <NavbarHeader />
    <RouterView />
    <FooterBar />
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
