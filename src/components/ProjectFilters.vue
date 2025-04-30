<template>
  <div class="mb-12 flex gap-6 items-center max-md:px-14 max-xs:px-10">
    <div class="flex gap-6 justify-between items-center">
  
      
      <span class="smart-subtitle">Filtrer les projets</span>
      <button 
        @click="toggleFilters" 
        :class="{ 'bg-secondary text-white': showFilters }"
        class="flex items-center justify-center w-12 h-12 rounded-full border-2 border-secondary bg-transparent text-secondary transition-all duration-300 z-10"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 transition-transform duration-300" 
          :class="{ 'rotate-180': showFilters }"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
      </button>
    </div>
    
    <!-- Filtres (sur la même ligne) -->
    <div 
      v-if="showFilters" 
      class="filter-container -mr-4" 
    >
      <div class="flex items-center gap-4 flex-wrap">
        <!-- Filtre par année -->
        <div 
          class="filter-item relative"
          :style="{ animationDelay: '0ms' }"
        >
          <div class="flex group items-center select-wrapper">
            <select 
              v-model="selectedYear" 
              :class="{ 'bg-secondary text-white': selectedYear !== '' }"
              class="appearance-none bg-transparent border-2 font-medium border-secondary text-secondary pl-4 pr-10 py-2 rounded-full hover:bg-secondary hover:text-white focus:outline-none focus:ring-0 focus:ring-secondary transition-colors duration-200"
            >
              <option value="">Année</option>
              <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
            </select>
            <img 
              src="/images/arrow-botleft-md.webp" 
              alt="arrow" 
              loading="lazy"
              :class="{ 'invert': selectedYear !== '' }"
              class="arrow-icon group-hover:invert pointer-events-none absolute right-3 h-4 w-4 object-contain transition-transform duration-300" 
            />
          </div>
        </div>
        
        <!-- Filtre par tag (modifié pour n'afficher que les tags spécifiques) -->
        <div 
          class="filter-item relative"
          :style="{ animationDelay: '100ms' }"
        >
          <div class="flex items-center group select-wrapper">
            <select 
              v-model="selectedTag" 
              :class="{ 'bg-secondary text-white': selectedTag !== '' }"
              class="appearance-none  bg-transparent font-medium border-2 border-secondary text-secondary pl-4 pr-10 py-2 rounded-full hover:bg-secondary hover:text-white focus:outline-none focus:ring-0 focus:ring-secondary transition-colors duration-200"
            >
              <option value="">Tag</option>
              <option v-for="tag in specificTags" :key="tag" :value="tag">{{ tag }}</option>
            </select>
            <img 
              src="/images/arrow-botleft-md.webp" 
              alt="arrow" 
              loading="lazy"
              :class="{ 'invert': selectedTag !== '' }"
              class="arrow-icon group-hover:invert pointer-events-none absolute right-3 h-4 w-4 object-contain transition-transform duration-300" 
            />
          </div>
        </div>
        
        <!-- Filtre par technologie -->
        <div 
          class="filter-item relative"
          :style="{ animationDelay: '200ms' }"
        >
          <div class="flex group items-center select-wrapper">
            <select 
              v-model="selectedTech" 
              :class="{ 'bg-secondary text-white': selectedTech !== '' }"
              class="appearance-none font-medium bg-transparent border-2 border-secondary text-secondary pl-4 pr-10 py-2 rounded-full hover:bg-secondary hover:text-white focus:outline-none focus:ring-0 focus:ring-secondary transition-colors duration-200"
            >
              <option value="">Technologie</option>
              <option v-for="tech in availableTechs" :key="tech" :value="tech">{{ tech }}</option>
            </select>
            <img 
              src="/images/arrow-botleft-md.webp" 
              alt="arrow" 
              loading="lazy"
              :class="{ 'invert': selectedTech !== '' }"
              class="arrow-icon group-hover:invert pointer-events-none absolute right-3 h-4 w-4 object-contain transition-transform duration-300" 
            />
          </div>
        </div>
        
        
      </div>
      
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

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

// Définition des props et emits
const props = defineProps({
  projects: {
    type: Array as () => Project[],
    required: true
  }
})

const emit = defineEmits(['update:filtered-projects'])

// États des filtres
const selectedYear = ref('')
const selectedTag = ref('')
const selectedTech = ref('')
const searchQuery = ref('')
const showFilters = ref(false) // Par défaut, on cache les filtres

// Liste des tags spécifiques à afficher
const specificTags = ['WordPress', 'Frontend', 'Fullstack', 'WebApp']

// Toggle pour afficher/masquer les filtres
const toggleFilters = () => {
  showFilters.value = !showFilters.value
}

// Données disponibles pour les filtres
const availableYears = computed(() => {
  const years = new Set(props.projects.map(project => project.year))
  return [...years].sort((a, b) => Number(b) - Number(a)) // Tri par ordre décroissant
})



const availableTechs = computed(() => {
  const techs = new Set<string>()
  props.projects.forEach(project => {
    if (project.techs) {
      project.techs.forEach(tech => techs.add(tech.name))
    }
  })
  return [...techs].sort()
})

// Projets filtrés
const filteredProjects = computed(() => {
  let result = [...props.projects]
  
  // Filtre par année
  if (selectedYear.value) {
    result = result.filter(project => project.year === selectedYear.value)
  }
  
  // Filtre par tag (uniquement les tags spécifiques)
  if (selectedTag.value) {
    result = result.filter(project => 
      project.tags && project.tags.includes(selectedTag.value)
    )
  }
  
  // Filtre par technologie
  if (selectedTech.value) {
    result = result.filter(project => 
      project.techs && project.techs.some(tech => tech.name === selectedTech.value)
    )
  }
  
  // Filtre par recherche
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    result = result.filter(project => 
      project.title.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query) ||
      (project.client && project.client.toLowerCase().includes(query))
    )
  }
  
  return result
})







// Émettre l'événement de mise à jour des projets filtrés
watch(filteredProjects, (newFilteredProjects) => {
  emit('update:filtered-projects', newFilteredProjects)
}, { immediate: true })
</script>

<style scoped>
/* Animation pour les flèches au survol */
.select-wrapper:hover .arrow-icon {
  transform: rotate(180deg);
}

/* Maintien de la rotation pour les sélecteurs actifs */
.select-wrapper .arrow-icon.invert {
  transform: rotate(180deg);
  filter: invert(1);
}

/* Suppression de la flèche native des selects */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* Animations pour les éléments de filtre */
.filter-container {
  animation: fadeIn 0.4s ease-out forwards;
  overflow: hidden;
}

.filter-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInHorizontal 0.5s ease-out forwards;
}

.filter-chip {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInSlideUp 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px; /* Valeur suffisamment grande */
  }
}

@keyframes slideInHorizontal {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>