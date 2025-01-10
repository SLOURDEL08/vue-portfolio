<template>
  <div class="grid grid-cols-3 max-md:grid-cols-2 !z-40 max-xs:grid-cols-1 max-xs:-mx-10 max-md:-mx-14 -mx-16 grid-flow-dense">
    <div 
      v-for="project in remainingProjects" 
      :key="project.id" 
      class="group  flex flex-col h-full relative"
      :class="{ 'cursor-none': showOverlay && activeProjectId === project.id }"
      @mouseenter="handleMouseEnter(project.id)"
      @mouseleave="handleMouseLeave"
      @mousemove="handleMouseMove"
    >
      <div class="h-80 overflow-hidden relative">
        <img 
          :src="project.imagePath" 
          :alt="project.title"
          class="w-full h-full group-hover:scale-105 transition-all duration-200 object-cover"
        />
                           <div class="absolute inset-0 z-20 mix-blend-overlay opacity-30 pointer-events-none grain-pattern"></div>

        <router-link 
          :to="`/projects/${project.slug}`"
          class="absolute inset-0 !z-40 transition-all duration-300"
          :class="{ 
            'bg-secondary/20': showOverlay && activeProjectId === project.id,
            'opacity-0 pointer-events-none': !showOverlay || activeProjectId !== project.id 
          }"
        >
          <div 
            class="fixed backdrop-blur-sm w-20 h-20 bg-secondary/40 rounded-full flex items-center justify-center pointer-events-none transition-opacity duration-300"
            :class="{ 
              'opacity-100': showOverlay && activeProjectId === project.id,
              'opacity-0': !showOverlay || activeProjectId !== project.id,
              'animate-scale-rotate': showOverlay && activeProjectId === project.id
            }"
            :style="{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: 'translate(-50%, -50%)'
            }"
          >
            <div class="flex items-center  justify-center">
              <img 
                src="/images/arrow-botleft.png"
                class="w-5 h-5 invert rotate-180 scale-x-[-1]"
                alt="Arrow"
              />

            </div>
          </div>
        </router-link>
      </div>
      
      <div class="p-10 flex-1 flex flex-col group-hover:bg-secondary text-secondary transition-colors duration-200 group-hover:text-white">
        <p class="text-lg leading-none mb-3 font-semibold group-hover:text-white">
          ({{ project.year }})
        </p>
        <span class="text-4xl leading-10 font-semibold group-hover:text-white">
          {{ project.title }}
        </span>
        <div class="mt-2 group-hover:text-white leading-7 text-truncate-3">
          {{ project.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { getAllProjects } from '../data/projects'

const showOverlay = ref(false)
const cursorPos = ref({ x: 0, y: 0 })
const activeProjectId = ref<string | null>(null)

const remainingProjects = computed(() => {
  return getAllProjects().slice(4)
})

const handleMouseEnter = (projectId: string) => {
  showOverlay.value = true
  activeProjectId.value = projectId
}

const handleMouseLeave = () => {
  showOverlay.value = false
  activeProjectId.value = null
}

const handleMouseMove = (event: MouseEvent) => {
  cursorPos.value = {
    x: event.clientX,
    y: event.clientY
  }
}
</script>

<style scoped>
@keyframes scaleRotate {
  0% {
    transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(360deg);
  }
}

.animate-scale-rotate {
  animation: scaleRotate 0.5s forwards;
}

/* Seule règle CSS nécessaire pour le cursor-none */
.cursor-none * {
  cursor: none !important;
}

</style>