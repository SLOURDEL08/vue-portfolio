<template>
  <DefaultLayout class="-mb-16">
    <div class="flex max-md:block max-xs:-mt-10 max-md:-mt-14 -mt-16 max-xs:-mx-10 max-md:-mx-14 -mx-16">
      <div class="w-1/2 max-md:w-full relative">
        <div class="sticky top-0 max-md:h-[500px] h-screen">
          <img 
            src="/images/wall.webp" 
            loading="lazy"
            class="h-screen w-full max-md:h-[500px] object-cover object-center"
            alt="Profile image"
          />
        </div>
      </div>

      <div class="w-1/2 max-md:w-full max-md:p-14 max-xs:p-10 p-16 space-y-8">
        <Suspense>
          <template #default>
            <div class="space-y-8">
              <div>
                <span class="smart-text">(About Me)</span>
                <h1 class="smart-bigtitle pt-2">Sébastien LOURDEL</h1>
              </div>

              <p class="text-[45px] max-md:text-3xl leading-[110%] font-[500]">
                A Berlin-based Digital Designer and Art Director with a Passion for Captivating Visual Experiences.
              </p>

              <div class="text-base space-y-6">
                <p class="smart-desc">
                  As a digital designer and art director, I am passionate about creating captivating visual experiences that leave a lasting impression. Based in Berlin, I draw inspiration from the city's vibrant energy and dynamic creative scene. With years of experience in the industry, I have honed my skills in digital design, art direction, interaction design, and motion design.
                </p>
                <p class="smart-desc">
                  Whether you need a stunning website, a memorable brand identity, or an engaging user experience, I have the expertise to bring your vision to life. From conceptualization to execution, I am committed to delivering exceptional work that exceeds your expectations. I take the time to understand your unique needs and tailor my approach to ensure that your project stands out from the competition.
                </p>
              </div>

              <LineSeparator />

              <div class="space-y-8">
                <h2 class="smart-subtitle">References</h2>
                <p class="text-[26px] leading-8 font-semibold">
                  Trusted by Leading Brands: A Look at the Companies That Have Benefited from Bent Lindberg's Expertise.
                </p>
                <ul class="grid grid-cols-3 font-[500] py-4 gap-4 text-xl">
                  <li v-for="company in companies" :key="company" class="flex gap-4 items-center">
                    <img src="/images/arrow-botleft.png" width="18" height="18" loading="lazy" alt="arrow" />
                    {{ company }}
                  </li>
                </ul>
              </div>

              <LineSeparator />

              <div class="mt-16 max-md:mt-14 max-xs:mt-10 space-y-8">
                <h2 class="smart-subtitle">Awards</h2>
                <p class="text-[26px] leading-8 font-semibold">
                  Recognized Excellence: Bent Lindberg's Awards and Accolades in Digital Design and Art Direction.
                </p>
              </div>

              <ul class="space-y-4 pb-4 font-[500] text-xl">
                <template v-for="(event, index) in timeline" :key="index">
                  <li class="flex justify-between gap-2">
                    {{ event.title }}<b class="font-[500]">({{ event.year }})</b>
                  </li>
                  <LineSeparator v-if="index < timeline.length - 1"/>
                </template>
              </ul>
            </div>
          </template>
          <template #fallback>
            <div class="animate-pulse">Loading...</div>
          </template>
        </Suspense>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
//async
const DefaultLayout = defineAsyncComponent(() => 
  import('../components/layouts/DefaultLayout.vue')
)
const LineSeparator = defineAsyncComponent(() => 
  import('../components/LineSeparator.vue')
)

const companies = [
  'Reactflix', 'Acolyte', 'Digitalizerr', 
  'UberEat', 'DietIA', 'Tesla',
  'KanbanM', 'Google', 'Microsoft'
]

const timeline = [
  { title: 'Baccalauréat STMG', year: '2016' },
  { title: 'Développeur web et application mobile', year: '2019' },
  { title: 'Stage DK Group', year: '2020' },
  { title: 'Freelance', year: '2020' },
  { title: 'Développeur web et application web', year: '2022' },
  { title: 'Alternance Toast Collectif', year: '2022' }
]
</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}
</style>