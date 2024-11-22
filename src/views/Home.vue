<template>
        <DefaultLayout>

  <Header />

  <ScaleSection
    imagePath="/images/wall.webp"
 :minScale="1.2"  
  :maxScale="2.5" 
    
  />

        <div id="myheader" class="grid my-16 max-md:my-14 max-md:flex max-md:gap-8  max-md: flex-col-reverse grid-cols-[1fr_2px_.5fr] gap-x-16 gap-y-16 auto-rows-auto">
            <div class="w-full">
                <span class="smart-title">As a Front-End Developer, I bring designs to life with precise integration and complex animations.</span>
            </div>
                        <VerticalSeparator class="max-md:hidden"  trigger-section-id="myheader"/>
            <div class="w-full flex flex-col justify-between">
                <span class="smart-text max-md:mb-4">(About Me)</span>
                <div class="flex max-md:gap-3 gap-4">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Linkedin class="text-white" :size="22" /> 
                    </div>
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Github class="text-white" :size="22" />
                    </div>
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Gitlab class="text-white" :size="22" />
                    </div>
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <FileBadge class="text-white" :size="22" />
                    </div>
                </div>
            </div>
        </div>
 <GridContent
  title="(My Projects)"
  :services="services"
class=""/>
<LineSeparator class="mt-16 max-md:mt-14" trigger-section-id="myproject" />
<InfiniteHorizontalScroll/>

  <div v-for="project in firstProjects" :key="project.id">
    <ScaleSection
  :imagePath="project.imagePath"
  variant="enhanced"
  :linkPath="`/images/projects/${project.slug}`"
  :minScale="1.2"  
  :maxScale="2.5" 
/>
    <ScaleContent
      :title="project.title"
      :description="project.description"
      :tags="project.tags"
    />
  </div>

 <GridContent
  title="(My Projects)"
  :services="services"
class=""/>
    </DefaultLayout>

</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Linkedin, Github, Gitlab, FileBadge } from 'lucide-vue-next'
import { getAllProjects } from '../data/projects'

// async
const ScaleSection = defineAsyncComponent(() => import('../components/ScaleSection.vue'))
const Header = defineAsyncComponent(() => import('../components/Header.vue'))
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const ScaleContent = defineAsyncComponent(() => import('../components/ScaleContent.vue'))
const LineSeparator = defineAsyncComponent(() => import('../components/LineSeparator.vue'))
const VerticalSeparator = defineAsyncComponent(() => import('../components/VerticalSeparator.vue'))
const GridContent = defineAsyncComponent(() => import('../components/GridContent.vue'))
const InfiniteHorizontalScroll = defineAsyncComponent(() => import('../components/InfiniteHorizontalScroll.vue'))

const projects = getAllProjects()
const firstProjects = computed(() => projects.slice(0, 3))


const services = [
  {
    title: "Digital Design",
    description: "I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills."
  },
  {
    title: "Art Direction",
    description: "I specialize in designing intuitive user experiences that are both functional and beautiful."
  },
  {
    title: "Interaction Design",
    description: "From animated logos to explainer videos, I bring your message to life with visually stunning motion design."
  },
  {
    title: "Motion Design",
    description: "My art direction expertise ensures that your project is on brand, on message, and visually stunning. Let's tell your story together."
  }
]
</script>