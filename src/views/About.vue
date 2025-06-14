<template>
  <DefaultLayout class="">
    <article class="flex -mb-16 h-screen overflow-hidden max-md:block max-md:h-auto max-md:-mt-14 max-xs:-mt-10 -mt-16 max-md:-mx-14 -mx-16">
      
      <!-- Section photo de profil -->
      <div class="w-1/2 max-md:w-full relative">
        <div class="h-full sticky top-0">
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

      <!-- Section contenu (scrollable) -->
      <div class="w-1/2 no-scrollbar max-md:w-full overflow-y-auto max-md:overflow-visible max-md:p-14 max-xs:p-10 p-16 space-y-8">
        <!-- En-tête -->
        <header class="space-y-8">
          <span class="smart-text">(À Propos)</span>
          <h1 class="smart-bigtitle max-md:!text-5xl max-lg:text-6xl max-lg:tracking-wide pt-2">Sébastien LOURDEL</h1>
        </header>

        <p class="text-[45px] max-lg:text-3xl max-md:text-2xl leading-[100%] font-[600]">
          Développeur web Front-End depuis 5 ans...
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
          <h2 id="skills-section" class="smart-subtitle max-md:text-3xl">Compétences</h2>
          <ul class="grid grid-cols-3 max-md:flex max-md:gap-5 max-md:flex-wrap font-[500] py-4 gap-4 text-xl">
            <li 
              v-for="skill in skills" 
              :key="skill" 
              class="flex gap-4 max-md:gap-2.5 items-center"
            >
              <ArrowIcon />
              {{ skill }}
            </li>
          </ul>
        </section>

        <LineSeparator />

        <!-- Formation -->
        <section class="mt-16 max-md:mt-14 max-xs:mt-10 space-y-8" aria-labelledby="education-section">
          <h2 id="education-section" class="smart-subtitle max-md:text-3xl">Diplômes & Formation</h2>
          <ul class="space-y-4 pb-4 font-[500] text-xl">
            <template v-for="(item, index) in educationItems" :key="index">
              <li class="flex justify-between gap-2">
                {{ item.title }} <b class="font-[500] w-max">({{ item.year }})</b>
              </li>
              <LineSeparator class="last:hidden" />
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
const LineSeparator = defineAsyncComponent(() => import('../components/ui/LineSeparator.vue'))
const ArrowIcon = defineAsyncComponent(() => import('../components/ui/ArrowIcon.vue'))

// Données réutilisables
const bioParagraphs = reactive([
  "Développeur web front-end avec plus de 5 ans d'expérience, je réside à Vitry-en-Artois. Passionné par le design et le développement, je crée des interfaces web modernes, interactives et performantes. Je me spécialise dans l'intégration pixel-perfect, les animations avancées avec GSAP et le développement de composants complexes avec React, Next.js et Vue.js. Mon expertise couvre l'ensemble du processus de création web, de la conception UI/UX à l'optimisation des performances et du référencement. J'ai également des compétences en développement back-end avec Node.js, me permettant de créer des applications full-stack complètes.",
  
  "Mon parcours professionnel a débuté en 2019 avec une formation intensive de 6 mois chez PopSchool Valenciennes, où j'ai acquis les fondamentaux du développement web et les méthodologies Agile. Durant mon stage chez DK Group, j'ai travaillé sur des sites WordPress sur-mesure, gérant à la fois l'intégration, le service client, les mises à jour et le développement de fonctionnalités spécifiques. Cette première expérience m'a permis de développer une solide compréhension des besoins clients et des enjeux techniques du web professionnel.",
  
  "En 2020, j'ai lancé mon activité d'auto-entrepreneur tout en poursuivant un emploi à temps partiel pour sécuriser ma transition. J'ai accompagné des PME dans leur digitalisation en proposant des sites vitrines, des identités visuelles et des optimisations SEO. Cette période m'a permis d'affiner ma méthodologie de travail et de me former continuellement aux technologies front-end modernes. En parallèle, j'ai développé des projets personnels ambitieux pour approfondir mes compétences en React, Vue.js et les animations web avancées.",
  
  "En 2022, j'ai rejoint OpenClassrooms pour une formation en alternance d'un an comme développeur web/intégrateur. Cette expérience a considérablement enrichi mon expertise technique, notamment en React, Tailwind CSS, MongoDB et Node.js. J'ai travaillé sur des projets full-stack complexes qui m'ont donné une vision globale du développement d'applications modernes. Cette formation m'a également permis de structurer mes connaissances et d'adopter les meilleures pratiques de l'industrie en termes d'architecture, de performance et d'accessibilité.",
  
  "Je recherche aujourd'hui une entreprise innovante où je pourrai mettre à profit mes compétences en développement front-end et contribuer à des projets techniques ambitieux. J'ai une passion particulière pour la création d'interfaces utilisateurs fluides et les animations sophistiquées qui améliorent l'expérience utilisateur. Rigoureux et autonome, je m'intègre facilement dans les équipes et m'adapte rapidement aux nouveaux environnements et technologies.",
  
  "Au-delà de mes compétences techniques, j'apporte un regard créatif et une approche centrée sur l'utilisateur à chaque projet. Je reste constamment à l'affût des nouvelles tendances et meilleures pratiques du développement web. Mon parcours diversifié, combinant formation académique, expérience en entreprise et projets freelance, me donne une perspective unique et polyvalente. Je suis prêt à relever de nouveaux défis et à contribuer significativement à des projets innovants."
])



const skills = reactive([
  "HTML", "CSS", "Javascript", "React", "Next",
  "Vue.js", "Node.js", "REST APIs", "Typescript",
  "Firebase", "MongoDB", "MySQL","Git",
   "GSAP", 'SASS', "Tailwind", "Figma", "Photoshop", 
])

const educationItems = reactive([
  { title: "Baccalauréat STMG", year: "2016" },
  { title: "Développeur web et application mobile", year: "2019" },
  { title: "Stage chez DK Group", year: "2020" },
  { title: "Auto-entreprise", year: "2020 - 2025" },
  { title: "Alternance chez OpenClassRoom / ToastAgency", year: "2022" }
])
</script>



<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}



</style>