<template>
  <Navbar />
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

</script>

