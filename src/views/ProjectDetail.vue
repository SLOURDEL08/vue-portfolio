<template>
  <DefaultLayout>
    <div v-if="project" class="project-detail">
     <Header 
  :title="project.title"
  :description="project.description"
  :client="project.client"
  :year="project.year"
  :website="project.website"
  :tags="project.tags"
/>

      <ScaleSection
        :imagePath="project.imagePath"
        :minScale="1"
        :maxScale="2"
        class="-mx-16 max-md:-mx-10 max-md:my-10 my-16"
      />

      <GridContent
        title="(Process)"
        :services="project.services"
        variant="block"
      />

      <Gallery
        :max-scale="5"
        :min-scale="1.5"
        :max-translate-y="100"
        :animation-range="3"
        :gallery="project.gallery" 
        class="-mx-16 max-md:-mx-14 max-xs:-mx-10"
      />
      
      <Navigation 
        :prevProject="project.prevProject"
        :nextProject="project.nextProject"
      />
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'
import type { Project } from '../data/projects'
import ScaleSection from '../components/ScaleSection.vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import Header from '../components/project/Header.vue'
import GridContent from '../components/GridContent.vue'
import Navigation from '../components/project/Navigation.vue'
import Gallery from '../components/project/Gallery.vue'
const route = useRoute()
const project = ref<Project | undefined>(undefined)
watchEffect(() => {
  const slug = route.params.slug
  if (slug) {
    project.value = getProjectBySlug(slug as string)
    window.scrollTo(0, 0)
  }
})
</script>