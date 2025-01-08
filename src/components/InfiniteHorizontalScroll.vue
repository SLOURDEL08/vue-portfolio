<template>
  <div ref="scrollContainer" class="flex max-md:py-14 py-16 max-md:-mx-10 -mx-16 overflow-hidden relative justify-center">
    <div
      class="scroll-content flex gap-10 transition-transform text-secondary duration-700 ease-out min-w-max"
      :style="{ transform: `translateX(${scrollOffset}px)` }"
    >
      <span v-for="(text, index) in scrollTexts" 
            :key="index" 
            class="text-8xl max-md:text-6xl font-bold">/{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrollTexts = [
  'FRONTEND',
  'FRANCE',
  'WORK',
  'FRONT-END',
  'FREELANCE',
  'ANIMATION',
  'REMOTE'
]

const scrollContainer = ref<HTMLElement | null>(null)
const scrollOffset = ref(0)
const scrollSpeed = 2
let lastScroll = 0
let requestId: number | null = null

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
  transition: transform 0.1s ease-out;
}
</style>