<template>
        <DefaultLayout>

  <Header />

  <ScaleSection
    imagePath="/images/home-profil.png"
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
                  <a href="https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Linkedin class="text-white" :size="22" /> 
                    </div>
                    </a>
                    <a href="https://github.com/SLOURDEL08">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Github class="text-white" :size="22" />
                    </div>
                     </a>
                     <a href="https://gitlab.com/slourdel08">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <Gitlab class="text-white" :size="22" />
                    </div>
                    </a>
                     <a href="https://www.behance.net/lourdel00">
                    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
                        <BehanceIcon class="text-white" :size="22" color="white" />
                    </div>
                    </a>
                    <a href="/images/cv/cv2025.pdf" download="cv-sebastien-lourdel-2025.pdf" type="application/pdf">
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
  :services="formations"
class=""/>
    </DefaultLayout>

</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { Linkedin, Github, Gitlab, FileBadge } from 'lucide-vue-next'
import BehanceIcon from '../components/BehanceIcon.vue';
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

const formations = [
  {
    title: "Graphic Design",
    description: "I began my passion for design during my adolescence by working on personal projects using Photoshop, Illustrator, Cinema4D, and video editing. This experience allowed me to develop a deep understanding of visual creation tools."
  },
  {
    title: "POPSchool Intensive Training",
    description: "In February 2019, I started a 6-month intensive training at POPSchool, where I learned the fundamentals of web development (HTML, CSS, JavaScript, PHP), as well as professional practices like agile methodology, Git, and team project management."
  },
  {
    title: "Self-Employed Business Creation",
    description: "Since 2019, I have run my own business as a freelancer, offering services such as creating showcase websites, e-commerce sites, booking systems, logos, graphic design, tracking, and optimization. I gained solid experience in project management and client relations."
  },
  {
    title: "OpenClassrooms Work-Study",
    description: "In 2022-2023, I completed a work-study program at OpenClassrooms as a Web Developer and Integrator. I worked on both frontend and backend with REST APIs, and created and integrated custom components from mockups. I also ensured the design of custom responsive websites."
  }
];



</script>

<style>

.sticky {
  transition: all 0.3s ease;
  margin-top: -1rem;
  padding: 1rem 0;
}</style>