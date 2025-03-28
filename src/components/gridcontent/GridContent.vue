<template>
  <section 
    :id="id" 
    class="relative" 
    v-if="variant !== 'block'" 
    :aria-labelledby="`${id}-title`"
  >
    <LineSeparator class="pb-16 max-md:pb-10" :trigger-section-id="id" />
    <div class="grid max-lg:flex max-lg:flex-col grid-cols-[0.5fr_2px_1fr] gap-x-16 gap-y-16 auto-rows-auto">
      <!-- En-tête de section -->
      <div class="w-full">
        <div class="sticky top-0 flex justify-between items-center">
          <h2 :id="`${id}-title`" class="smart-text !leading-none !pt-0 !mt-0">
            {{ title }}
          </h2>
          <OptimizedImage
            src="/images/arrow-botleft.png"
            webpSrc="/images/arrow-botleft.webp"
            alt=""
            width="24"
            height="24"
            className="w-6 h-6"
          />
        </div>
      </div>

      <VerticalSeparator :trigger-section-id="id" class="max-md:hidden"/>

      <div class="w-full">
        <div class="grid grid-cols-1 gap-16 max-md:gap-6">
          <!-- Premier groupe de services -->
          <ServiceGroup 
            :services="groupedServices[0]" 
            :trigger-section-id="id" 
            :is-mobile="isMobile" 
          />

          <LineSeparator :trigger-section-id="id"/>

          <!-- Deuxième groupe de services -->
          <ServiceGroup 
            v-if="groupedServices.length > 1"
            :services="groupedServices[1]" 
            :trigger-section-id="id" 
            :is-mobile="isMobile" 
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Affichage en bloc -->
  <section 
    v-else 
    :id="id"
    class="grid grid-cols-[0.5fr_2px_1fr] max-md:flex max-md:flex-col max-md:gap-6 gap-x-16 gap-y-16 pb-16 max-md:pb-14 max-xs:pb-10 auto-rows-auto"
    :aria-labelledby="`${id}-title`"
  >
    <div class="w-full relative">
      <div class="sticky top-0 flex justify-between items-center">
        <h2 :id="`${id}-title`" class="smart-text">
          {{ title }}
        </h2>
        <OptimizedImage
          src="/images/arrow-botleft.png"
          webpSrc="/images/arrow-botleft.webp"
          alt=""
          width="24"
          height="24"
          className="w-6 h-6"
        />
      </div>
    </div>
    
    <VerticalSeparator/>
    
    <div class="w-full h-max grid grid-cols-1 gap-16">
      <div class="space-y-16 max-md:space-y-6">
        <template v-for="(service, index) in services" :key="index">
          <ServiceItem 
            :title="service.title" 
            :description="service.description"
          />
          <LineSeparator v-if="index < services.length - 1" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { defineAsyncComponent } from 'vue'
import LineSeparator from '../ui/LineSeparator.vue'
import VerticalSeparator from '../ui/VerticalSeparator.vue'

const OptimizedImage = defineAsyncComponent(() => import('../OptimizedImage.vue'))
const ServiceGroup = defineAsyncComponent(() => import('./ServiceGroup.vue'))
const ServiceItem = defineAsyncComponent(() => import('./ServiceItem.vue'))

interface Service {
  title: string
  description: string
}

interface Props {
  id?: string
  title: string
  services: Service[]
  variant?: 'default' | 'block'
}

const props = withDefaults(defineProps<Props>(), {
  id: 'project-section',
  variant: 'default'
})

const isMobile = ref(false)

// Groupe les services par paires pour la mise en page par défaut
const groupedServices = computed(() => {
  const groups = []
  const servicesCopy = [...props.services]
  
  // Assurons-nous d'avoir un nombre pair d'éléments
  if (servicesCopy.length % 2 !== 0) {
    servicesCopy.push({ title: '', description: '' })
  }
  
  for (let i = 0; i < servicesCopy.length; i += 2) {
    groups.push(servicesCopy.slice(i, i + 2))
  }
  return groups
})

// Gestion du responsive avec debounce pour optimisation des performances
let resizeTimeout: number | null = null
const updateMobileState = () => {
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout)
  }
  
  resizeTimeout = window.setTimeout(() => {
    isMobile.value = window.innerWidth < 768
  }, 150) // Debounce de 150ms
}

onMounted(() => {
  updateMobileState()
  window.addEventListener('resize', updateMobileState)
})

onUnmounted(() => {
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout)
  }
  window.removeEventListener('resize', updateMobileState)
})
</script>

<style scoped>
.sticky {
  transition: all 0.3s ease;
  margin-top: -1rem;
}
</style>