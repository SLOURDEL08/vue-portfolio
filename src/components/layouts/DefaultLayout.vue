<template>
  <div class="bg-[#f5f3ef] max-xs:p-10 max-md:p-14 p-16 min-h-screen">
    <main class="layout-main">
      <div class="content-container">
        <slot></slot>
      </div>
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
.layout-main {
  min-height: 100vh;
}

.content-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}
</style>