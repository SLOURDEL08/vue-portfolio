<template>
  <div class="flex justify-between items-center pt-24">
    <router-link
      :to="`/projects/${prevSlug}`"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
        <div class="relative overflow-hidden w-6 h-6">
          <img src="/images/arrow-botleft.png" alt="arrow" class="w-full rotate-90 h-full object-contain" />
        </div>
        <span v-hover-slide class="text-3xl text-secondary font-medium">Previous Project</span>
      </div>
    </router-link>

    <router-link
      :to="`/projects/${nextSlug}`"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
        <span v-hover-slide class="text-3xl text-secondary font-medium">Next Project</span>
        <div class="relative overflow-hidden w-6 h-6">
          <img src="/images/arrow-botleft.png" alt="arrow" class="w-full h-full object-contain" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { projects } from '../../data/projects';

const props = defineProps<{
  currentSlug: string
}>();

const currentIndex = computed(() => {
  return projects.findIndex(project => project.slug === props.currentSlug);
});

const nextSlug = computed(() => {
  const nextIndex = currentIndex.value === projects.length - 1 ? 0 : currentIndex.value + 1;
  return projects[nextIndex].slug;
});

const prevSlug = computed(() => {
  const prevIndex = currentIndex.value === 0 ? projects.length - 1 : currentIndex.value - 1;
  return projects[prevIndex].slug;
});
</script>