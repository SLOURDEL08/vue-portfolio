<template>
  <DefaultLayout>
    <article v-if="project" class="project-detail">
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

      <section aria-label="Image principale du projet">
        <ScaleSection
          :imagePath="project.imagePath"
          :minScale="1"
          :maxScale="2"
          class="-mx-16 max-md:-mx-10 max-md:my-10 my-16"
          :altText="`${project.title} - Image principale`"
          variant="enhanced"  
        />
      </section>

      <section aria-labelledby="process-section">
        <GridContent
          id="process-section"
          title="(Process)"
          :services="project.services"
          variant="block"
        />
      </section>
      
      <section aria-label="Galerie du projet" class="!-mx-16 -mb-16 max-md:!-mx-14 max-xs:!-mx-10">
        <Gallery
          :max-scale="5"
          :min-scale="1.5"
          :max-translate-y="100"
          :animation-range="3"
          :gallery="project.gallery" 
          class=""
        />
      </section>
    </article>
    
    <div v-else role="alert" class="text-center py-16">
      <p class="text-xl">Chargement du projet...</p>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref, watchEffect, defineAsyncComponent, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getProjectBySlug } from '../data/projects'
import type { Project } from '../data/projects'
import { useTransitionStore } from '../stores/transitionStore'

// Components async
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const Header = defineAsyncComponent(() => import('../components/project/Header.vue'))
const ScaleSection = defineAsyncComponent(() => import('../components/ScaleSection.vue'))
const GridContent = defineAsyncComponent(() => import('../components/gridcontent/GridContent.vue'))
const Navigation = defineAsyncComponent(() => import('../components/project/Navigation.vue'))
const Gallery = defineAsyncComponent(() => import('../components/project/Gallery.vue'))

const route = useRoute()
const transitionStore = useTransitionStore()
const project = ref<Project | undefined>(undefined)

// Charger le projet initial et lors des changements de route
watchEffect(async () => {
  const slug = route.params.slug
  if (slug) {
    project.value = getProjectBySlug(slug as string)
    await nextTick() // Attendre que le DOM soit mis à jour
    window.scrollTo(0, 0)
    await transitionStore.pageEnter() // Lancer la transition après le chargement
  }
})
</script>