<template>
  <div
    ref="lineContainer"
    class="line-container"
  >
    <div
      class="line"
      :class="{ 'animate-line': isVisible }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const lineContainer = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        // Arrêter d'observer une fois que l'animation est déclenchée
        if (observer && lineContainer.value) {
          observer.unobserve(lineContainer.value)
        }
      }
    })
  }, {
    threshold: 0, // Déclenche dès qu'une partie de l'élément est visible
    rootMargin: '50px' // Déclenche 50px avant que l'élément soit visible
  })

  if (lineContainer.value) {
    observer.observe(lineContainer.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.line-container {
  height: 100%;
  width: 2px;
  overflow: hidden;
}

.line {
  height: 0;
  width: 2px;
  background-color: #1E1E21;
  opacity: 0;
  transform-origin: top;
}

.animate-line {
  animation: expandLine 1.5s ease-out forwards;
}

@keyframes expandLine {
  0% {
    height: 0;
    opacity: 1;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}
</style>