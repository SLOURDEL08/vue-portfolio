<template>
  <div>
    <!-- Composant de filtres -->
    <ProjectFilters 
      :projects="allProjects" 
      @update:filtered-projects="filteredProjects = $event"
    />
    
    <!-- Message si aucun projet ne correspond aux filtres -->
    <div v-if="filteredProjects.length === 0" class="text-center py-16 text-secondary">
      <p class="text-2xl font-semibold mb-2">Aucun projet ne correspond à vos critères</p>
      <p>Essayez de modifier vos filtres pour voir plus de résultats.</p>
    </div>
    
    <!-- Grille de projets -->
    <div v-else class="grid grid-cols-3 max-md:grid-cols-2 !z-40 max-xs:grid-cols-1 max-xs:-mx-10 max-md:-mx-14 -mx-16 grid-flow-dense">
      <div 
        v-for="project in randomizedProjects" 
        :key="project.id" 
        class="group flex flex-col h-full relative"
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
            :to="`/projets/${project.slug}`"
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
              <div class="flex items-center justify-center">
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
          
          <!-- Ajout des tags -->
          <div class="mt-4 flex flex-wrap gap-2">
            <span 
              v-for="(tag, index) in project.tags.slice(0, 2)" 
              :key="index"
              class="text-xs px-2 py-1 rounded-full border border-secondary group-hover:border-white group-hover:text-white transition-colors duration-200"
            >
              {{ tag }}
            </span>
            <span 
              v-if="project.tags.length > 2" 
              class="text-xs px-2 py-1 rounded-full border border-secondary group-hover:border-white group-hover:text-white transition-colors duration-200"
            >
              +{{ project.tags.length - 2 }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { getAllProjects } from '../data/projects'
import ProjectFilters from './ProjectFilters.vue'

// Type pour les projets
interface Tech {
  name: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  year: string;
  imagePath: string;
  tags: string[];
  techs: Tech[];
  client?: string;
  repository?: string;
  website?: string;
  services?: any[];
  altImagePath?: string;
  date?: string;
  gallery?: string[];
}

const showOverlay = ref(false)
const cursorPos = ref({ x: 0, y: 0 })
const activeProjectId = ref<string | null>(null)

// Récupérer tous les projets disponibles
const allProjects = computed(() => {
  return getAllProjects().slice(4) as Project[] // Gardez le slice si vous voulez exclure les 4 premiers projets
})

// État pour les projets filtrés
const filteredProjects = ref<Project[]>(allProjects.value)

// Fonction pour mélanger un tableau
const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Mélange initial des projets
const randomizedFilter = ref<Project[]>([])

// Projets aléatoires dérivés des projets filtrés
const randomizedProjects = computed(() => {
  return randomizedFilter.value
})

// Observer les changements de filteredProjects pour mélanger les projets
watch(filteredProjects, (newProjects) => {
  randomizedFilter.value = shuffleArray(newProjects)
}, { immediate: true })

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

.text-truncate-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>