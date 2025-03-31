<template>
  <nav class="flex justify-between items-center pt-24" aria-label="Navigation entre les projets">
    <router-link
      :to="`/projets/${prevSlug}`"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
      :aria-label="`Projet précédent: ${prevTitle}`"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
        <div class="relative overflow-hidden w-6 h-6">
          <OptimizedImage 
            src="/images/arrow-botleft.png" 
            webpSrc="/images/arrow-botleft.webp" 
            alt=""
            className="w-full rotate-90 h-full object-contain" 
          />
        </div>
        <span v-hover-slide class="text-3xl text-secondary font-medium">Projet précédent</span>
      </div>
    </router-link>

    <router-link
      :to="`/projets/${nextSlug}`"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
      :aria-label="`Projet suivant: ${nextTitle}`"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
        <span v-hover-slide class="text-3xl text-secondary font-medium">Projet suivant</span>
        <div class="relative overflow-hidden w-6 h-6">
          <OptimizedImage 
            src="/images/arrow-botleft.png" 
            webpSrc="/images/arrow-botleft.webp" 
            alt=""
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { projects } from '../../data/projects';

const OptimizedImage = defineAsyncComponent(() => import('../OptimizedImage.vue'));

const props = defineProps<{
  currentSlug: string
}>();

const currentIndex = computed(() => {
  return projects.findIndex(project => project.slug === props.currentSlug);
});

const nextProject = computed(() => {
  const nextIndex = currentIndex.value === projects.length - 1 ? 0 : currentIndex.value + 1;
  return projects[nextIndex];
});

const prevProject = computed(() => {
  const prevIndex = currentIndex.value === 0 ? projects.length - 1 : currentIndex.value - 1;
  return projects[prevIndex];
});

const nextSlug = computed(() => nextProject.value.slug);
const prevSlug = computed(() => prevProject.value.slug);
const nextTitle = computed(() => nextProject.value.title);
const prevTitle = computed(() => prevProject.value.title);
</script>