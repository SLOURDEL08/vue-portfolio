<template>
  <DefaultLayout>
    <Header />

    <ScaleSection
      imagePath="/images/home-profil.webp"
      :minScale="1.2"  
      :maxScale="2.5" 
      altText="Photo de profil"
    />

    <section id="content" class="grid my-16 max-md:my-14 max-md:flex max-md:gap-8 max-md:flex-col-reverse grid-cols-[1fr_2px_.5fr] gap-x-16 gap-y-16 auto-rows-auto">
      <div class="w-full">
        <h2 class="smart-title tracking-tighter max-md:text-4xl max-lg:text-5xl max-xl:text-6xl">Développeur web depuis 5 ans je suis spécialisé dans l'intégration front-end avec des notions de back-end et API Rest</h2>
      </div>
      <VerticalSeparator class="max-md:hidden" trigger-section-id="myheader"/>
      <div class="w-full flex flex-col justify-between">
        <h3 class="smart-text sticky mb-14 !leading-0 max-md:mb-4">(À Propos)</h3>
        <div class="flex max-md:gap-3 gap-4">
          <SocialLink 
  v-for="link in socialLinks" 
  :key="link.url" 
  :href="link.url" 
  :ariaLabel="link.ariaLabel"
  :download="link.download"
>
  <component :is="link.icon" class="text-white" :size="22" :color="link.color" />
</SocialLink>
        </div>
      </div>
    </section>

    <section aria-labelledby="expertise-title">
      <GridContent
        id="expertise-title"
        title="(Mon expertise)"
        :services="services"
        class=""
      />
    </section>

    <LineSeparator class="mt-16 max-md:mt-14" trigger-section-id="myproject" />
    
    <section aria-label="Projets mis en avant">
      <InfiniteHorizontalScroll/>

      <div v-for="project in firstProjects" :key="project.id">
        <ScaleSection
          :imagePath="project.imagePath"
          :altImagePath="project.altImagePath"
          :altText="`${project.title} - Image du projet`"
          variant="enhanced"
          :linkPath="`/projets/${project.slug}`"
          :minScale="1.2"  
          :maxScale="2.5" 
          useAltImage
        />
        <ScaleContent
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
        />
      </div>
    </section>

    <section aria-labelledby="projects-title">
      <GridContent
        id="projects-title"
        title="(Formations)"
        :services="formations"
        class=""
      />
    </section>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Linkedin, Github, FileBadge } from 'lucide-vue-next'
import BehanceIcon from '../components/BehanceIcon.vue';
import { getAllProjects } from '../data/projects'
import { services, formations } from '../data/content'

// Composants asynchrones
const ScaleSection = defineAsyncComponent(() => import('../components/ScaleSection.vue'))
const Header = defineAsyncComponent(() => import('../components/layout/Header.vue'))
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const ScaleContent = defineAsyncComponent(() => import('../components/ScaleContent.vue'))
const LineSeparator = defineAsyncComponent(() => import('../components/ui/LineSeparator.vue'))
const VerticalSeparator = defineAsyncComponent(() => import('../components/ui/VerticalSeparator.vue'))
const GridContent = defineAsyncComponent(() => import('../components/gridcontent/GridContent.vue'))
const InfiniteHorizontalScroll = defineAsyncComponent(() => import('../components/InfiniteHorizontalScroll.vue'))
const SocialLink = defineAsyncComponent(() => import('../components/SocialLink.vue'))

const projects = getAllProjects()
const firstProjects = computed(() => projects.slice(0, 3))

const socialLinks = [
  {
    url: "https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/",
    icon: Linkedin,
    ariaLabel: "Mon profil LinkedIn"
  },
  {
    url: "https://github.com/SLOURDEL08",
    icon: Github,
    ariaLabel: "Mon profil GitHub"
  },
  {
    url: "https://www.behance.net/lourdel00",
    icon: BehanceIcon,
    color: "white",
    ariaLabel: "Mon portfolio Behance"
  },
  {
    url: "/images/cv/cv2025.pdf",
    icon: FileBadge,
    ariaLabel: "Télécharger mon CV en PDF",
    download: "cv-sebastien-lourdel-2025.pdf"
  }
]
</script>

<style>
.sticky {
  transition: all 0.3s ease;
}
</style>