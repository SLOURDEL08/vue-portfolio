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
    :techs="project.techs"

/>
      <Navigation :currentSlug="project.slug" />

          <ScaleSection
            :imagePath="project.imagePath"
            :minScale="1"
            :maxScale="2"
            class="-mx-16 max-md:-mx-10 max-md:my-10 my-16"
              :altImagePath="project.imagePath"

          />

      <GridContent
        title="(Process)"
        :services="project.services"
        variant="block"
      />
<div class="!-mx-16 -mb-16 max-md:!-mx-14 max-xs:!-mx-10">
   <Gallery
        :max-scale="5"
        :min-scale="1.5"
        :max-translate-y="100"
        :animation-range="3"
        :gallery="project.gallery" 
        class=""
      />
</div>
     
      
    
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'
import type { Project } from '../data/projects'

// async
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const Header = defineAsyncComponent(() => import('../components/project/Header.vue'))
const ScaleSection = defineAsyncComponent(() => import('../components/ScaleSection.vue'))
const GridContent = defineAsyncComponent(() => import('../components/GridContent.vue'))
const Navigation = defineAsyncComponent(() => import('../components/project/Navigation.vue'))
const Gallery = defineAsyncComponent(() => import('../components/project/Gallery.vue'))

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