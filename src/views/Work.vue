<template>
  <DefaultLayout class="!pb-0">
    <div>
      <header class="!mb-0">
        <div class="space-y-4 max-md:space-y-4 max-md:block max-xs:mb-10 max-md:mb-14 mb-16 max-md:gap-14 max-xs:gap-10 gap-16 flex items-end justify-between">
          <div class="w-[80%] max-md:w-full">
            <h1 class="smart-bigtitle mb-4">Projets</h1>
            <p class="smart-subtitle max-md:text-3xl tracking-tighter">Retrouvez mes différents projets web professionnel, personnels ou réalisé durant mes différentes formations</p>
          </div>
          <div class="w-[20%] max-md:w-full text-right">
            <div class="flex items-center max-md:justify-end gap-3 cursor-pointer group" v-hover-diagonal>
              <div class="relative overflow-hidden w-6 h-6">
                <img 
                  src="/images/arrow-botleft-md.webp" 
                  alt="arrow" 
                  loading="lazy"
                  class="w-full h-full object-contain" 
                />
              </div>
              <a v-hover-slide class="smart-text">Explorez</a>
            </div>
          </div>
        </div>

        
      </header>
      
      <!-- Projects Grid Section -->
      <section aria-label="All Projects">
        <Suspense>
          <ProjectGrid />
          <template #fallback>
            <div class="animate-pulse" aria-live="polite">Loading project grid...</div>
          </template>
        </Suspense>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import {  defineAsyncComponent } from 'vue'

// Components async
const DefaultLayout = defineAsyncComponent(() => import('../components/layouts/DefaultLayout.vue'))
const ProjectGrid = defineAsyncComponent(() => import('../components/ProjectGrid.vue'))

</script>