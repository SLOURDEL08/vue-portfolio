<template>
  <div v-if="variant !== 'block'" class="relative">
    <LineSeparator class="pb-16 max-md:pb-10" :trigger-section-id="id" />
    <div class="grid max-md:flex max-md:flex-col grid-cols-[0.5fr_2px_1fr] gap-x-12 gap-y-12 auto-rows-auto">
      <div class="w-full">
        <div class="sticky top-0 flex justify-between items-center">
          <span class="smart-text">
            {{ title }}
          </span>
          <img
            src="/images/arrow-botleft.png"
            width="150"
            height="150"
            class="w-6 h-6"
          />
        </div>
      </div>

      <VerticalSeparator :trigger-section-id="id" class="max-md:hidden"/>

      <div class="w-full">
        <div class="grid grid-cols-1 gap-16 max-md:gap-6">
          <div class="grid max-md:flex max-md:flex-col max-md:gap-6 grid-cols-[1fr_2px_1fr] gap-x-12 gap-y-12">
            <div class="space-y-3">
              <span class="smart-titlegrid">{{ groupedServices[0][0].title }}</span>
              <p class="smart-desc">{{ groupedServices[0][0].description }}</p>
            </div>
            <VerticalSeparator :trigger-section-id="id" class="max-md:hidden"/>
            <LineSeparator v-if="isMobile" :trigger-section-id="id" class="md:hidden"/>
            <div class="space-y-3">
              <span class="smart-titlegrid">{{ groupedServices[0][1].title }}</span>
              <p class="smart-desc">{{ groupedServices[0][1].description }}</p>
            </div>
          </div>

          <LineSeparator :trigger-section-id="id"/>

          <div class="grid max-md:flex max-md:flex-col max-md:gap-6 grid-cols-[1fr_2px_1fr] gap-x-12 gap-y-12">
            <div class="space-y-3">
              <span class="smart-titlegrid">{{ groupedServices[1][0].title }}</span>
              <p class="smart-desc">{{ groupedServices[1][0].description }}</p>
            </div>
            <VerticalSeparator :trigger-section-id="id" class="max-md:hidden"/>
            <LineSeparator v-if="isMobile" :trigger-section-id="id" class="md:hidden"/>
            <div class="space-y-3">
              <span class="smart-titlegrid">{{ groupedServices[1][1].title }}</span>
              <p class="smart-desc">{{ groupedServices[1][1].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="grid grid-cols-[0.5fr_2px_1fr] max-md:flex max-md:flex-col max-md:gap-6  gap-x-12 gap-y-12 pb-16 max-md:pb-14 max-xs:pb-10 auto-rows-auto">
    <div class="w-full relative">
      <div class="sticky top-0 flex justify-between items-center">
          <span class="smart-text">
            {{ title }}
          </span>
          <img
            src="/images/arrow-botleft.png"
            width="150"
            height="150"
            class="w-6 h-6"
          />
        </div>
    </div>
    
    <VerticalSeparator/>
    
    <div class="w-full h-max grid grid-cols-1  gap-16">
      <div class="space-y-12 max-md:space-y-6">
        <template v-for="(service, index) in services" :key="index">
          <div class="space-y-3">
            <span class="smart-titlegrid">{{ service.title }}</span>
            <p class="smart-desc">{{ service.description }}</p>
          </div>
          <LineSeparator v-if="index < services.length - 1" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import LineSeparator from '../components/LineSeparator.vue'
import VerticalSeparator from '../components/VerticalSeparator.vue'

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
  for (let i = 0; i < props.services.length; i += 2) {
    groups.push(props.services.slice(i, i + 2))
  }
  return groups
})

// Gestion du responsive
const updateMobileState = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateMobileState()
  window.addEventListener('resize', updateMobileState)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMobileState)
})
</script>

<style scoped>
.sticky {
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  margin-top: -1rem;
  padding: 1rem 0;
}


</style>