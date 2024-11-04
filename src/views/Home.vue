<template>
  <Header />

  <ScaleSection
    imagePath="/src/assets/wall.webp"
    :minScale="1"
    :maxScale="3"
    :maxTranslateY="100"
    :animationRange="3" 
  />

  <MainContent/>

  <div v-for="project in firstProjects" :key="project.id">
    <ScaleSection
      :imagePath="project.imagePath"
      variant="enhanced"
      :linkPath="`/projects/${project.slug}`"
    />
    <ScaleContent
      :title="project.title"
      :description="project.description"
      :tags="project.services"
    />
  </div>

  <GridProject />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ScaleSection from '../components/ScaleSection.vue'
import Header from '../components/Header.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import MainContent from '../components/MainContent.vue'
import ScaleContent from '../components/ScaleContent.vue'
import GridProject from '../components/GridProject.vue'
import { getAllProjects } from '../data/projects'

const projects = getAllProjects()
const firstProjects = computed(() => projects.slice(0, 3))
</script>