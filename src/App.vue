<template>
  <Navbar />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'

</script>

