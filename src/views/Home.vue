<template>
        <DefaultLayout>

  <Header />

  <ScaleSection
    imagePath="/images/wall.webp"
        altImagePath="/images/wall.webp"
 :minScale="1.2"  
  :maxScale="2.5" 
    
  />

        <div id="content" class="grid my-16 max-md:my-14 max-md:flex max-md:gap-8  max-md: flex-col-reverse grid-cols-[1fr_2px_.5fr] gap-x-16 gap-y-16 auto-rows-auto">
            <div class="w-full">
                <span class="smart-title">As a Front-End Developer, I bring designs to life with precise integration and complex animations.</span>
            </div>
                        <VerticalSeparator class="max-md:hidden"  trigger-section-id="myheader"/>
            <div class="w-full flex flex-col justify-between">
                <span class="smart-text sticky -top-1 mb-14 !leading-0 max-md:mb-4">(About Me)</span>
                <div class="flex max-md:gap-3 gap-4">
                  <a href="https://linkedin.com">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                      
                        <Linkedin class="text-white" :size="22" /> 
                      
                    </div>
                    </a>
                    <a href="https://linkedin.com">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                      
                        <Github class="text-white" :size="22" />
                       
                    </div>
                     </a>
                     <a href="https://linkedin.com">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                      
                        <Gitlab class="text-white" :size="22" />
                        
                    </div>
                    </a>
                    <a href="https://linkedin.com">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                       
                        <FileBadge class="text-white" :size="22" />
                        
                    </div>
                    </a>
                </div>
            </div>
        </div>
 <GridContent
  title="(My Expertise)"
  :services="services"
class=""/>
<LineSeparator class="mt-16 max-md:mt-14" trigger-section-id="myproject" />
<InfiniteHorizontalScroll/>

  <div v-for="project in firstProjects" :key="project.id">
    <ScaleSection
        :imagePath="project.imagePath"
        :altImagePath="project.altImagePath"
  variant="enhanced"
  :linkPath="`/projects/${project.slug}`"
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
    title: "Web Design & Development",
    description: "I design and develop engaging, responsive websites that not only look great but work seamlessly. From the initial concept to the final product, I ensure your website meets both user needs and business goals."
  },
  {
    title: "Frontend Development",
    description: "I specialize in building interactive, dynamic user interfaces using modern technologies like React and Vue.js. I focus on creating smooth, fast experiences that are easy to use and highly functional."
  },
  {
    title: "Motion Graphics & Animations",
    description: "I bring your brand to life with creative animations and motion graphics. Whether it's a micro-interaction, a complex animation, or an animated explainer video, I focus on making your content both engaging and memorable."
  },
  {
    title: "UI/UX Design",
    description: "I design user-centered interfaces with a focus on usability and aesthetics. By understanding the needs of your users, I create intuitive and visually appealing experiences that enhance engagement and satisfaction."
  }
]

</script>

<style>

.sticky {
  transition: all 0.3s ease;
  margin-top: -1rem;
  padding: 1rem 0;
}</style>