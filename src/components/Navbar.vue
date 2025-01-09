<template>
  <div>
    <!-- Navbar avec bouton Menu -->
    <nav class="fixed !z-50 top-0 left-0 w-full px-8 py-8 max-md:p-4 flex justify-end items-start">
      <Button 
        @click="menuStore.toggleMenu"
        class="menu-button !z-[99999999] overflow-hidden" 
      >
        <div class="overflow-hidden">
          <span v-hover-slide class="inline-block py-0 -my-2 max-md:hidden">
            Menu
          </span>
          <img src="/images/menu-burger.png" width="20" height="20" class="md:hidden"/>
        </div>
      </Button>
    </nav>

    <!-- Bandes d'animation -->
    <div class="fixed top-0 left-0 w-full h-full z-[90] pointer-events-none">
      <div 
        v-for="i in 5" 
        :key="i" 
        class="stripe absolute top-0 w-[20%] h-full bg-secondary -translate-y-full"
        :style="{ left: `${(i-1) * 20}%` }"
      ></div>
    </div>

    <!-- Menu Container -->
    <div 
      class="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[95]"
      :class="{ 'pointer-events-auto': menuStore.isMenuOpen, 'pointer-events-none': !menuStore.isMenuOpen }"
    >
      <!-- Bouton Close -->
      <button 
        ref="closeButtonRef"
        @click="handleClose"
        class="close-button fixed top-8 right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center z-[100]"
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

      <!-- Menu Links -->
      <div class="menu-links flex flex-col gap-6">
        <router-link 
          v-for="(item, index) in menuStore.menuItems"
          :key="index"
          :to="item.path"
          class="text-white flex items-start gap-2 justify-center uppercase no-underline text-9xl max-md:text-6xl font-bold hover:text-gray-400 transition-colors duration-300 opacity-0"
          @click="menuStore.handleNavigation"
        >
          <svg class="w-14 max-md:w-8 max-md:-mt-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
          </svg>
          
          <span v-hover-slide class="block -my-4 h-auto">
            {{ item.name }}
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useMenuStore } from '../stores/menuStore'
import gsap from 'gsap'

const menuStore = useMenuStore()
const closeButtonRef = ref(null)

// Animation d'entrée du bouton close
const animateCloseButtonIn = () => {
  if (!closeButtonRef.value) return
  
  gsap.fromTo(closeButtonRef.value,
    {
      opacity: 0,
      scale: 0,
      rotation: -180
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }
  )
}

// Animation de sortie du bouton close
const animateCloseButtonOut = () => {
  if (!closeButtonRef.value) return
  
  gsap.to(closeButtonRef.value, {
    opacity: 0,
    scale: 0,
    rotation: 180,
    duration: 0.4,
    ease: "back.in(1.7)"
  })
}

// Gestion de la fermeture avec animation
const handleClose = () => {
  animateCloseButtonOut()
  // Attendre que l'animation soit terminée avant de fermer le menu
  setTimeout(() => {
    menuStore.toggleMenu()
  }, 400)
}

// Observer les changements d'état du menu
watch(() => menuStore.isMenuOpen, (isOpen) => {
  if (isOpen) {
    animateCloseButtonIn()
  }
})

onMounted(() => {
  menuStore.initializeMenuLinks()
  // Initialiser l'état du bouton
  if (!menuStore.isMenuOpen) {
    gsap.set(closeButtonRef.value, {
      opacity: 0,
      scale: 0,
      rotation: -180
    })
  }
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