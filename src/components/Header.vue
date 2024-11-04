<template>
    <DefaultLayout class="pt-0">
    <div class="h-16" />
    <h1 class="smart-bigtitle mb-4 text-secondary">
      Sébastien L.<br />
      Développeur web
    </h1>
    <div class="justify-between items-end flex">
      <h2 class="text-secondary text-3xl font-medium tracking-tighter">
        (Arras, France)
      </h2>
     
      <!-- Container principal avec hover -->
      <div 
        class="flex items-center gap-3 cursor-pointer group"
        v-hover-diagonal
      >
        <div class="relative overflow-hidden w-6 h-6">
          <img 
            src="../assets/arrow-botleft.png" 
            alt="arrow"
            class="w-full h-full object-contain"
          />
        </div>
        <span v-hover-slide class="text-3xl font-medium text-secondary">Scroll down</span>
      </div>
    </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

</script>