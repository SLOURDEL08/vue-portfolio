<template>
  <header class="mb-16 max-md:mb-10 max-w-[1600px] mx-auto">
    <h1 class="smart-bigtitle mb-6 max-xs:!text-5xl text-secondary">
      Sébastien L.<br class="max-xs:!hidden" /> Développeur Web
    </h1>
    <div class="justify-between items-end max-xs:flex-col max-xs:gap-6 flex">
      <h2 class="smart-text max-xs:!text-left max-xs:w-full">
        (Arras, France)
      </h2>
     
      <a 
        href="#content" 
        class="flex items-center gap-3 cursor-pointer max-xs:!-mb-4  group"
        v-hover-diagonal
        aria-label="Descendre vers le contenu principal"
        @click.prevent="scrollToContent"
      >
        <div 
        class="flex items-center gap-3 cursor-pointer group"
        v-hover-diagonal
      >
        <div class="relative overflow-hidden w-6 h-6">
          <img 
            src="/images/arrow-botleft-md.webp" 
            alt="arrow"
            class="w-full h-full object-contain"
          />
        </div>
        <span v-hover-slide class="smart-text ">Scroll</span>
      </div>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
// Fonction pour un défilement fluide
const scrollToContent = () => {
  const contentElement = document.getElementById('content');
  if (contentElement) {
    contentElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'
    });
  }
};
</script>