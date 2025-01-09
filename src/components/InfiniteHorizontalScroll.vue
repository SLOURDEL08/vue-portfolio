<template>
  <div 
    ref="scrollContainer" 
    class="flex max-md:py-14 py-16 max-md:-mx-10 -mx-16 overflow-hidden relative justify-center"
    @mousemove="handleMouseMove"
    @mouseleave="resetHorizontalScroll"
  >
    <div
      class="scroll-content flex gap-10 transition-transform text-secondary duration-700 ease-out min-w-max"
      :style="{ transform: `translateX(${totalOffset}px)` }"
    >
      <span 
        v-for="(text, index) in scrollTexts" 
        :key="index" 
        class="text-[100px] !leading-none uppercase italic max-md:text-6xl font-bold"
      >
        <b class="font-light">*</b>{{ text }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const scrollTexts = [
  'Front-End',
  'France',
  'Available',
  'Freelance',
  'Remote',
  'Animation',
]

const scrollContainer = ref<HTMLElement | null>(null)
const scrollOffset = ref(0)
const horizontalOffset = ref(0)
const scrollSpeed = 2
let lastScroll = 0
let requestId: number | null = null

// Calcul de l'offset total combinant le défilement vertical et horizontal
const totalOffset = computed(() => scrollOffset.value + horizontalOffset.value)

const startSmoothScroll = () => {
  if (requestId) return
  requestId = requestAnimationFrame(smoothScroll)
}

const smoothScroll = () => {
  const currentScroll = window.scrollY
  const direction = currentScroll - lastScroll > 0 ? 1 : -1

  scrollOffset.value += direction * scrollSpeed
  lastScroll = currentScroll
  requestId = null

  if (Math.abs(window.scrollY - lastScroll) > 0) {
    requestId = requestAnimationFrame(smoothScroll)
  }
}

// Gestion du défilement horizontal au survol
const handleMouseMove = (event: MouseEvent) => {
  if (!scrollContainer.value) return

  const containerWidth = scrollContainer.value.offsetWidth
  const mouseX = event.clientX - scrollContainer.value.getBoundingClientRect().left
  const containerCenter = containerWidth / 2
  const distance = mouseX - containerCenter
  const maxScroll = 300 // Ajustez cette valeur selon vos besoins

  // Calcul de l'offset horizontal basé sur la position de la souris
  horizontalOffset.value = -(distance / containerCenter) * maxScroll
}

// Réinitialisation du défilement horizontal
const resetHorizontalScroll = () => {
  horizontalOffset.value = 0
}

onMounted(() => {
  lastScroll = window.scrollY
  window.addEventListener('scroll', startSmoothScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', startSmoothScroll)
  if (requestId) cancelAnimationFrame(requestId)
})
</script>

<style scoped>
.scroll-content {
  white-space: nowrap;
  transition: transform 0.3s ease-out;
}
</style>