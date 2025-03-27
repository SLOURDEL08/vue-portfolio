<template>
  <div class="grid max-md:block grid-cols-[1fr_2px_1fr] gap-x-16 gap-y-16">
    <!-- Premier service avec une largeur fixe -->
    <div class="w-full">
      <ServiceItem
        :title="services[0].title"
        :description="services[0].description"
      />
    </div>
    
    <!-- Séparateurs avec gestion responsive -->
    <VerticalSeparator :trigger-section-id="triggerSectionId" class="max-md:hidden"/>
    <LineSeparator v-if="isMobile" :trigger-section-id="triggerSectionId" class="md:hidden my-6"/>
    
    <!-- Deuxième service avec une largeur fixe -->
    <div class="w-full">
      <ServiceItem
        v-if="services.length > 1"
        :title="services[1].title"
        :description="services[1].description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VerticalSeparator from '../ui/VerticalSeparator.vue'
import LineSeparator from '../ui/LineSeparator.vue'
import ServiceItem from './ServiceItem.vue'

interface Service {
  title: string
  description: string
}

defineProps({
  services: {
    type: Array as () => Service[],
    required: true
  },
  triggerSectionId: {
    type: String,
    default: ''
  },
  isMobile: {
    type: Boolean,
    default: false
  }
})
</script>