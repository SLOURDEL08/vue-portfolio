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
          <span class="smart-text">(À Propos)</span>
          <h1 class="smart-bigtitle max-lg:text-6xl max-lg:tracking-wide pt-2">Sébastien LOURDEL</h1>
        </header>
            
        <p class="text-[45px] max-lg:text-3xl max-md:text-3xl leading-[100%] font-[600]">
          Développeur web Front-End depuis 5 ans, spécialisé en intégration et expérience utilisateur avec de solides compétences en back-end
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
          <h2 id="skills-section" class="smart-subtitle">Compétences</h2>
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
          <h2 id="education-section" class="smart-subtitle">Diplômes & Formation</h2>
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
  "Développeur web depuis plus de 5 ans, je réside à Vitry-en-Artois. Passionné par le design et le développement web, je crée des sites web et des applications modernes, réactives et performantes. Je me spécialise dans l'intégration front-end et dans la création de composants complexes et responsives. Grâce à mes différentes expériences et formations, je suis capable de développer des applications web sur-mesure, d'intégrer des maquettes et d'optimiser les pages pour le référencement et la rapidité, tout en suivant les meilleures pratiques. J'ai également quelques notions de backend, notamment avec Node.js et les API Rest.",
  
  "Mon parcours a débuté en janvier 2019 avec une formation de 6 mois à PopSchool Valenciennes. Pendant cette période, j'ai effectué mon stage en travaillant sur divers sites WordPress pour DK Group, où j'étais en charge des services clients, des mises à jour et du développement interne. Cette expérience m'a permis d'acquérir une solide base en design et développement web, et j'ai rapidement élargi mes compétences en optimisant des sites pour le SEO, en créant des plugins, et en m'occupant du débogage et du déploiement.",
  
  "En 2020, j'ai pris le virage du freelancing, tout en travaillant à temps partiel pour continuer à apprendre et perfectionner mes compétences. J'ai commencé par réaliser des sites web simples, des identités visuelles et des logos, mais j'ai rapidement évolué vers des projets plus complexes comme des sites e-commerce et des plateformes de réservation. J'accompagne également les petites et moyennes entreprises dans leur digitalisation et leur présence en ligne, en leur proposant des solutions complètes et sur-mesure.",
  
  "En 2022, j'ai rejoint un programme d'apprentissage d'un an afin de perfectionner mes compétences et approfondir ma maîtrise des applications web modernes. Cette formation m'a permis de renforcer mes connaissances des technologies front-end comme React et Vue.js, et de découvrir des technologies back-end telles que Node.js et Firebase. J'ai aussi acquis de l'expérience dans l'animation JavaScript avancée avec GSAP et les pratiques de design responsive grâce à Tailwind CSS.",
  
  "Mon objectif est de rejoindre une entreprise ambitieuse où je pourrais contribuer à des projets complexes et innovants. Je suis motivé par les défis et j'aime donner le meilleur de moi-même pour atteindre les objectifs fixés. Autonome et capable de m'adapter rapidement aux nouvelles technologies et environnements de travail, j'apprécie particulièrement le travail en équipe et la collaboration.",
  
  "Avec un œil attentif aux détails, une volonté d'apprendre constamment et un fort désir de relever de nouveaux défis, je suis prêt à mettre mes compétences au service de votre équipe et à contribuer à son succès. Je suis ouvert aux opportunités internationales et impatient de collaborer avec des professionnels partageant les mêmes idées sur des projets passionnants."
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