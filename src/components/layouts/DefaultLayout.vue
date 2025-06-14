<template>
  <div class="bg-primary  min-h-screen">
    <main class="layout-main max-xs:p-10 max-md:p-14 p-16">
      <!-- Header est toujours au-dessus -->
      <slot class="" name="header"></slot>
      
      <!-- Les sections seront insérées ici -->
      <slot class=""></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  // Préchargement des ressources critiques
  const links = [
    '/assets/index.css',
    '/images/home-profil.webp'
  ];
  
  links.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = url.endsWith('.css') ? 'style' : 'image';
    document.head.appendChild(link);
  });
});
</script>

<style>
html, body {
  overflow-x: hidden;
  max-width: 100%;
}

.layout-main {
  min-height: 100vh;
  overflow-x: hidden; /* Empêche le scroll horizontal */
}

/* Styles pour les conteneurs standard et pleine largeur */
.container-standard {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}
</style>