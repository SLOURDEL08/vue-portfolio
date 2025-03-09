<template>
  <Navbar />
  <main class="layout-main min-h-screen">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <div class="footer-placeholder" style="min-height: 100vh;"></div>
  <Footer class="fixed-size-footer" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';

// Charger le Footer de manière conditionnelle
const Footer = defineAsyncComponent(() => 
  import('./components/layout/Footer.vue')
);

onMounted(() => {
  // Précharger les ressources CSS critiques
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/assets/critical.css'; // Créez ce fichier avec vos styles critiques
  document.head.appendChild(link);
});
</script>

<style>
.layout-main {
  min-height: 100vh; /* Réserve l'espace pour le contenu principal */
}

.footer-placeholder {
  min-height: 100vh; /* Réserve l'espace pour le footer */
  visibility: hidden;
}

.fixed-size-footer {
  min-height: 100vh;
  contain: layout style;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>