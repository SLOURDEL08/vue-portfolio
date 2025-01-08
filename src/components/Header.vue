<template >
  <div class="mb-16 max-md:mb-10">
     <h1 class="smart-bigtitle mb-6 text-secondary">
      Sébastien L.<br />
      Développeur Web
    </h1>
    <div class="justify-between items-end flex">
      <h2 class="smart-text">
        (Arras, France)
      </h2>
     
      <!-- Container principal avec hover -->
      <div 
        class="flex items-center gap-3 cursor-pointer group"
        v-hover-diagonal
      >
        <div class="relative overflow-hidden w-6 h-6">
          <img 
            src="/images/arrow-botleft.png" 
            alt="arrow"
            class="w-full h-full object-contain"
          />
        </div>
        <span v-hover-slide class="smart-text">Scroll down</span>
      </div>
    </div>
  </div>
   
</template>

<script setup lang="ts">

</script>