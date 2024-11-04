<template>
  <DefaultLayout>
    <div v-if="project" class="project-detail">
      <Header 
        :title="project.title"
        :description="project.description"
        :client="project.client"
        :year="project.year"
        :website="project.website"
        :mainService="project.services[0]"
      />

      <ScaleSection
        :imagePath="project.imagePath"
        :minScale="1"
        :maxScale="2"
        class="-mx-16 my-16"
      />

      <GridContent
    sticky-title="(My Experience)"
    :items="[
      {
        subtitle: '(2020-2023)',
        title: 'Senior Designer',
        description: 'Led the design team at a major tech company, overseeing multiple successful product launches.'
      },
      {
        subtitle: '(2018-2020)',
        title: 'UI/UX Designer',
        description: 'Designed user interfaces for mobile applications with over 1 million downloads.'
       },
      {
        subtitle: '(2018-2020)',
        title: 'UI/UX Designer',
        description: 'Designed user interfaces for mobile applications with over 1 million downloads.'
      },
      {
        subtitle: '(2018-2020)',
        title: 'UI/UX Designer',
        description: 'Designed user interfaces for mobile applications with over 1 million downloads.'
      }
    ]"
  />

      <Gallery
        :max-scale="5"
  :min-scale="1.5"
  :max-translate-y="100"
  :animation-range="3"
      :gallery="project.gallery" class="-mx-16"/>
      

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
import GridContent from '../components/project/GridContent.vue'
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
