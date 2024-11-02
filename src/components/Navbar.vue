<!-- src/components/Navbar.vue -->
<template>
  <div>
   
    <!-- Navbar simple avec bouton menu fixe -->
    <nav class="absolute top-0 left-0 w-full px-8 py-8 flex justify-end items-start z-[50]">
      <Button 
        @click="menuStore.toggleMenu"
        class="menu-button"
      >
        Menu
      </Button>
    </nav>

    <!-- Bandes d'animation -->
    <div class="fixed top-0 left-0 w-full h-full z-[90] pointer-events-none">
      <div 
        v-for="i in 5" 
        :key="i" 
        class="absolute top-0 w-[20%] h-full bg-black -translate-y-full"
        :style="{ left: `${(i-1) * 20}%` }"
      ></div>
    </div>

    <!-- Menu -->
    <div 
      class="fixed top-0 left-0 w-full !h-[100%] flex justify-center items-center z-[95] pointer-events-none"
      :class="{ '!pointer-events-auto': menuStore.isMenuOpen }"
    >
      <!-- Bouton Close -->
      <button 
        @click="menuStore.toggleMenu"
        class="close-button fixed top-8 right-8 w-14 h-14 bg-white rounded-full  flex items-center justify-center opacity-0 scale-0 rotate-0 z-[100]"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="26" 
          height="26" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="3" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

    <div class="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[95] pointer-events-none"
      :class="{ '!pointer-events-auto': menuStore.isMenuOpen }">


      <div class="text-center">
        <div class="menu-links flex flex-col gap-6">
          <router-link 
            v-for="(item, index) in menuStore.menuItems"
            :key="index"
            :to="item.path"
            class="text-white flex items-start gap-2 justify-center uppercase no-underline text-9xl font-bold hover:text-gray-400 transition-colors duration-300 opacity-0"
            @click="menuStore.handleNavigation"
          >
            <svg class="w-14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>
            
            <span v-hover-slide class="block -my-4 h-auto">
              {{ item.name }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMenuStore } from '../stores/menuStore'

const menuStore = useMenuStore()

onMounted(() => {
  menuStore.initializeMenuLinks()
})
</script>

<style scoped>
.router-link-active {
  @apply text-gray-400;
}

.close-button {
  transform-origin: center;
}

.menu-button {
  @apply relative;
}
</style>