<template>
  <DefaultLayout class="-mb-16">
    <article class="flex max-md:block max-md:-mt-14 max-xs:-mt-10 -mt-16 max-md:-mx-14 -mx-16">
      <!-- Section photo de profil -->
      <div class="w-1/2 max-md:w-full relative">
        <div class="sticky top-0 max-md:h-[500px] h-screen">
          <OptimizedImage 
            src="/images/profilpic-contact.png" 
            webpSrc="/images/profilpic-contact.webp" 
            alt="Portrait de Sébastien Lourdel, développeur Front-End"
            className="h-screen w-full max-md:h-[500px] object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div class="absolute inset-0 z-20 mix-blend-overlay opacity-40 pointer-events-none grain-pattern"></div>
        </div>
      </div>

      <!-- Section contenu -->
      <div class="w-1/2 max-md:w-full max-md:p-14 max-xs:p-10 p-16 space-y-8">
        <!-- En-tête -->
        <header class="space-y-8">
          <span class="smart-text">(About Me)</span>
          <h1 class="smart-bigtitle max-lg:text-6xl max-lg:tracking-wide pt-2">Sébastien LOURDEL</h1>
        </header>
            
        <p class="text-[45px] max-lg:text-3xl max-md:text-3xl leading-[110%] font-[500]">
          A Front-End Developer passionate about crafting captivating visual experiences.
        </p>

        <!-- Biographie -->
        <section class="text-base space-y-6">
          <p 
            v-for="(paragraph, index) in bioParagraphs" 
            :key="index" 
            class="smart-desc !text-secondary"
          >
            {{ paragraph }}
          </p>
        </section>
        
        <LineSeparator />
        
        <!-- Compétences -->
        <section class="space-y-8" aria-labelledby="skills-section">
          <h2 id="skills-section" class="smart-subtitle">References</h2>
          <ul class="grid grid-cols-3 font-[500] py-4 gap-4 text-xl">
            <li 
              v-for="skill in skills" 
              :key="skill" 
              class="flex gap-4 items-center"
            >
              <ArrowIcon />
              {{ skill }}
            </li>
          </ul>
        </section>
        
        <LineSeparator />
        
        <!-- Formation -->
        <section class="mt-16 max-md:mt-14 max-xs:mt-10 space-y-8" aria-labelledby="education-section">
          <h2 id="education-section" class="smart-subtitle">Awards & Education</h2>
          <ul class="space-y-4 pb-4 font-[500] text-xl">
            <template v-for="(item, index) in educationItems" :key="index">
              <li class="flex justify-between gap-2">
                {{ item.title }} <b class="font-[500]">({{ item.year }})</b>
              </li>
              <LineSeparator />
            </template>
          </ul>
        </section>
      </div>
    </article>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent, reactive } from 'vue'

// Composants asynchrones
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const OptimizedImage = defineAsyncComponent(() => import('../components/OptimizedImage.vue'))
const LineSeparator = defineAsyncComponent(() => import('../components/LineSeparator.vue'))
const ArrowIcon = defineAsyncComponent(() => import('../components/ui/ArrowIcon.vue'))

// Données réutilisables
const bioParagraphs = reactive([
  "I am a Digital Designer and Front-End Developer based in Arras (France), dedicated to creating beautiful, engaging, and functional digital experiences. With a strong foundation in both design and development, I strive to deliver high-quality work that balances aesthetics and performance.",
  
  "My journey began in January 2019 with a 6-month training program at PopSchool Valenciennes. During this time, I gained hands-on experience by working on various WordPress websites for DK Group, where I managed client services, updates, and internal development. This experience gave me a solid foundation in web design and development, and I quickly expanded my skill set by diving into areas like SEO optimization, plugin creation, debugging, and deployment.",
  
  "In 2020, I took the leap into freelancing while working part-time to continue learning and honing my skills. I started by building simple websites, brand identities, and logos, but soon began tackling more complex projects such as e-commerce sites and booking platforms. I also got deeply involved in optimizing websites for speed, performance, and SEO, while working directly with clients to understand their needs and deliver high-quality results.",
  
  "By 2022, I joined a one-year apprenticeship to refine my skills and deepen my understanding of modern web applications. This training allowed me to strengthen my knowledge of frontend technologies such as React and Vue.js, and delve into backend technologies like Node.js and Firebase. I've also gained experience with advanced JavaScript animations using GSAP, as well as responsive design practices with Tailwind CSS.",
  
  "My goal is to secure a position as a Front-End Developer where I can contribute to complex, animated, and responsive projects that challenge me and push my creative boundaries. I am equally passionate about full-stack development and enjoy working on projects involving Node.js, Express, REST APIs, and Firebase.",
  
  "With a keen eye for detail, a drive to keep learning, and a willingness to take on new challenges, I am ready to demonstrate my skills and contribute to your team's success. I am open to international opportunities and eager to collaborate with like-minded professionals on exciting projects."
])

const skills = reactive([
  "React", "Next.js", "Vue.js", "Node.js", "REST APIs", 
  "Firebase", "MongoDB", "JavaScript", "Vercel", 
  "Netlify", "Git", "Responsive", "Tailwind", "Figma", "Photoshop"
])

const educationItems = reactive([
  { title: "Baccalauréat STMG", year: "2016" },
  { title: "Web & Mobile Development Training at PopSchool Valenciennes", year: "2019" },
  { title: "Internship at DK Group", year: "2020" },
  { title: "Freelancer", year: "2020" },
  { title: "Apprenticeship at Toast Collectif", year: "2022" }
])
</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}

.grain-pattern {
  background-image: url('/images/grain.png');
  background-repeat: repeat;
  background-size: 600px;
}
</style>