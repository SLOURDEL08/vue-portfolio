<template>
  <header class="space-y-12">
    <div>
                <h1 class="smart-bigtitle max-md:!text-5xl text-secondary mb-4 max-md:w-[70%]">{{ title }}</h1>
      <div class=" max-lg:block gap-16 flex items-start justify-between">
        <!-- Section principale du titre -->
        <div class="w-[70%] max-lg:w-full">
          <p class="smart-subtitle text-secondary max-md:text-2xl !font-[600]">{{ description }}</p>
           <!-- Technologies utilisées -->
      <section class="mt-8" aria-label="Technologies utilisées">
        <div class="flex flex-wrap gap-4">
          <div 
            v-for="tech in techs" 
            :key="tech.name"
            class="flex items-center gap-0 transition-all duration-300 rounded-lg p-1"
            :title="tech.name"
          >
            <Icon 
              :icon="tech.icon"
              class="w-10 !text-secondary h-10"
              :aria-label="tech.name"
              :class="{
                'text-yellow-400': tech.name === 'JavaScript',
                'text-blue-500': tech.name === 'TypeScript',
                'text-blue-400': tech.name === 'React',
                'text-cyan-500': tech.name === 'Tailwind CSS'
              }"
            />
          </div>
        </div>
      </section>
        </div>
        
        <!-- Détails du projet -->
        <section class="w-[30%] max-lg:w-full text-right" aria-label="Détails du projet">
          <!-- Client -->
          <div class="flex items-center justify-between w-full pb-4">
            <h2 class="text-xl text-secondary font-medium">(Client)</h2>
            <p class="font-semibold text-secondary text-xl">{{ client }}</p>
          </div>
          <LineSeparator/>
          
          <!-- Année -->
          <div class="flex items-center justify-between w-full border-secondary py-4">
            <h2 class="text-xl text-secondary font-medium">(Year)</h2>
            <time datetime="{{ year }}" class="font-semibold text-secondary text-xl">{{ year }}</time>
          </div>
          <LineSeparator/>
          
          <!-- Site web -->
          <div v-if="website" class="flex items-center justify-between w-full border-secondary py-4">
            <h2 class="text-xl text-secondary font-medium">(Website)</h2>
            <a 
              :href="website" 
              target="_blank" 
              rel="noopener noreferrer"
              class="font-semibold text-secondary text-lg underline"
              :aria-label="`Visiter le site ${formattedWebsite} (s'ouvre dans un nouvel onglet)`"
            >
              {{ formattedWebsite }}
            </a>
          </div>
          <LineSeparator v-if="website"/>
          
          <!-- Repository -->
          <div v-if="repository" class="flex items-center justify-between w-full border-secondary py-4">
            <h2 class="text-xl text-secondary font-medium">(Repository)</h2>
            <a 
              :href="repository" 
              target="_blank" 
              rel="noopener noreferrer"
              class="font-semibold text-secondary text-lg underline text-right"
              :aria-label="`Voir le code source du projet ${formattedRepositoryName} (s'ouvre dans un nouvel onglet)`"
            >
              <span class="block">/{{ formattedRepositoryName }}</span>
            </a>
          </div>
          <LineSeparator v-if="repository"/>
          
          <!-- Tags -->
         <div class="flex items-center justify-between w-full border-secondary py-4">
  <h2 class="text-xl text-secondary font-medium">(Tags)</h2>
  <div class="flex justify-end gap-2 flex-wrap relative h-10">
    <transition name="fade" mode="out-in">
      <span 
        :key="currentTagIndex"
        class="bg-secondary w-max text-white px-4 py-2 rounded-full font-semibold text-base absolute right-0"
      >
        {{ tags[currentTagIndex] }}
      </span>
    </transition>
  </div>
</div>
        </section>
      </div>
      
     
    </div>
  </header>
</template>

<script setup lang="ts">
import LineSeparator from '../ui/LineSeparator.vue'
import { Icon } from '@iconify/vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'

interface Tech {
  name: string
  icon: string
}

interface HeaderProps {
  title: string
  description: string
  client: string
  year: string
  repository?: string
  website?: string
  tags: string[]
  techs?: Tech[]
}

const props = withDefaults(defineProps<HeaderProps>(), {
  techs: () => []
})

const formattedWebsite = computed(() => {
  if (!props.website) return ''
  return props.website.replace(/^https?:\/\//i, '')
})



const formattedRepositoryName = computed(() => {
  if (!props.repository) return ''
  
  try {
    const url = new URL(props.repository)
    
    // Pour GitHub, GitLab, etc.
    if (url.hostname.includes('github.com') || url.hostname.includes('gitlab.com')) {
      const pathParts = url.pathname.split('/').filter(part => part)
      if (pathParts.length >= 2) {
        return pathParts[1] // Nom du repository
      }
    }
    
    // Fallback pour les autres URL
    return url.pathname.replace(/^\//, '')
  } catch (e) {
    // Si l'URL n'est pas valide, retourner une chaîne vide
    return ''
  }
})

// Dans votre section script
const currentTagIndex = ref(0)

// Mettre en place l'intervalle pour faire défiler les tags
let tagInterval: number | null = null

onMounted(() => {
  if (props.tags.length > 1) {
    tagInterval = window.setInterval(() => {
      currentTagIndex.value = (currentTagIndex.value + 1) % props.tags.length
    }, 3000)
  }
})

onUnmounted(() => {
  if (tagInterval !== null) {
    clearInterval(tagInterval)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>