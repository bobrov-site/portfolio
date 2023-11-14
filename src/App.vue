<script setup>
import NavbarHeader from './components/Navbar-header.vue'
import FooterBar from './components/Footer-bar.vue';
</script>

<template>
  <NavbarHeader />

  <RouterView />
  <FooterBar/>
</template>

<style scoped></style>
