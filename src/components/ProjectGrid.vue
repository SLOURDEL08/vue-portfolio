<template>
  <div class="space-y-4">
    <!-- Liste des sections par tag -->
    <div v-for="section in sections" :key="section.name" class=" border-b-2 border-secondary py-4">
      <button
        class="w-full flex justify-between items-center text-left text-4xl font-semibold text-secondary transition-colors duration-200"
        @click="toggleSection(section.name)"
      >
        {{ section.name }}
        <img 
                  src="/images/arrow-botleft-md.webp" 
                  alt="arrow" 
                  loading="lazy"
                  class="w-8 h-8 object-contain" 
                />
      </button>

      <!-- Projets dans la section -->
      <div v-if="openedSections.includes(section.name)" class="mt-6 -mx-16 grid grid-cols-3 max-md:grid-cols-2 max-xs:grid-cols-1">
        <div
          v-for="project in section.projects"
          :key="project.id"
          class="group flex flex-col h-full relative"
          :class="{ 'cursor-none': showOverlay && activeProjectId === project.id }"
          @mouseenter="handleMouseEnter(project.id)"
          @mouseleave="handleMouseLeave"
          @mousemove="handleMouseMove"
        >
          <!-- === Ton Card actuelle === -->
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
          
          <div class="p-10 flex-1  flex flex-col group-hover:bg-secondary text-secondary transition-colors duration-200 group-hover:text-white">
            <p class="text-lg leading-none mb-3 font-semibold group-hover:text-white">
              ({{ project.year }})
            </p>
            <span class="text-4xl leading-10 font-semibold group-hover:text-white">
              {{ project.title }}
            </span>
            <div class="mt-2 group-hover:text-white leading-7 text-truncate-3">
              {{ project.description }}
            </div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { getAllProjects } from '../data/projects'

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

// === Interaction overlay ===
const showOverlay = ref(false)
const cursorPos = ref({ x: 0, y: 0 })
const activeProjectId = ref<string | null>(null)

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

// === Données projet ===
const allProjects = computed(() => getAllProjects() as Project[])

// Liste des catégories (ajuste l'ordre si tu veux)
const categories = ['Intégration', 'WordPress', 'Fullstack', 'Maquette', 'Formation']

// Organise les projets par section
const sections = computed(() => {
  return categories.map(name => ({
    name,
    projects: allProjects.value.filter(p => p.tags.includes(name))
  })).filter(section => section.projects.length > 0)
})

// État des sections ouvertes
const openedSections = ref<string[]>([])

const toggleSection = (name: string) => {
  if (openedSections.value.includes(name)) {
    openedSections.value = openedSections.value.filter(n => n !== name)
  } else {
    openedSections.value.push(name)
  }
}
</script>
