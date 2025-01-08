<template>
  <DefaultLayout class="!pb-0">
    <div>
      <div class="!mb-0">
        <div class="space-y-4 max-md:space-y-4 max-md:block max-xs:mb-10 max-md:mb-14 mb-16 max-md:gap-14 max-xs:gap-10 gap-16 flex items-end justify-between">
          <div class="w-[80%] max-md:w-full">
            <h1 class="smart-bigtitle mb-4">Work</h1>
            <p class="smart-subtitle">Experience Innovative Design Solutions and Concepts</p>
          </div>
          <div class="w-[20%] max-md:w-full text-right">
            <div class="flex items-center max-md:justify-end gap-3 cursor-pointer group" v-hover-diagonal>
              <div class="relative overflow-hidden w-6 h-6">
                <img 
                  src="/images/arrow-botleft.png" 
                  alt="arrow" 
                  loading="lazy"
                  class="w-full h-full object-contain" 
                />
              </div>
              <a v-hover-slide class="smart-text">Explore</a>
            </div>
          </div>
        </div>

        <!-- Projects Section -->
        <div v-if="firstFourProjects.length">
    <div class="" v-for="project in firstFourProjects" :key="project.id">
      <ScaleSection
        :imagePath="project.imagePath"
        :altImagePath="project.altImagePath"
        variant="enhanced"
        :linkPath="`/projects/${project.slug}`"
        useAltImage
      />
      <ScaleContent
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
  </div>
      </div>
      
      <Suspense>
        <ProjectGrid />
        <template #fallback>
          <div class="animate-pulse">Loading grid...</div>
        </template>
      </Suspense>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { getAllProjects } from '../data/projects'
//async
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const ScaleSection = defineAsyncComponent(() => import('../components/ScaleSection.vue'))
const ProjectGrid = defineAsyncComponent(() => import('../components/ProjectGrid.vue'))
const ScaleContent = defineAsyncComponent(() => import('../components/ScaleContent.vue'))

const projects = getAllProjects()
const firstFourProjects = computed(() => projects.slice(0, 4))
</script>