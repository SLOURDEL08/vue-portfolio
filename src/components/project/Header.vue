<template>
  <div class="space-y-12">
    <div class="">
      <div class="space-y-4 max-lg:block gap-16 flex items-end justify-between">
        <div class="w-[70%] max-lg:w-full ">
          <h1 class="smart-bigtitle text-secondary mb-4">{{ title }}</h1>
          <p class="smart-subtitle text-secondary !font-[600]">{{ description }}</p>
        </div>
        
        <div class="w-[30%] max-lg:w-full text-right">
          <div class="flex items-center justify-between w-full py-4">
            <h3 class="text-xl text-secondary font-medium">(Client)</h3>
            <p class="font-semibold text-secondary text-xl">{{ client }}</p>
          </div>
          <LineSeparator/>
          <div class="flex items-center justify-between w-full border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Year)</h3>
            <span class="font-semibold text-secondary text-xl">{{ year }}</span>
          </div>
          <LineSeparator/>
           <div v-if="website" class="flex items-center justify-between w-full border-secondary py-4">
    <h3 class="text-xl text-secondary font-medium">(Website)</h3>
    <a :href="website" target="_blank" class="font-semibold text-secondary text-xl underline">
      {{ formattedWebsite }}
    </a>
  </div>
          <LineSeparator/>
          <div class="flex items-center justify-between w-full border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Tags)</h3>
            <div class="flex justify-end gap-2 flex-wrap">
              <span 
                v-if="tags.length > 0"
                class="bg-secondary text-white px-4 py-2 rounded-full font-semibold text-base"
              >
                {{ tags[0] }}
              </span>
            </div>
          </div>
        </div>
      </div>
     <div class="mt-8">
    <div class="flex flex-wrap gap-4">
      <div 
        v-for="tech in techs" 
        :key="tech.name"
        class="flex items-center gap-0 transition-all duration-300 rounded-lg  p-1"
      >
        <Icon 
          :icon="tech.icon"
          class="w-10 !text-secondary h-10"
          :class="{
            'text-yellow-400': tech.name === 'JavaScript',
            'text-blue-500': tech.name === 'TypeScript',
            'text-blue-400': tech.name === 'React',
            'text-cyan-500': tech.name === 'Tailwind CSS'
          }"
        />
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineSeparator from '../../components/LineSeparator.vue'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

interface Tech {
  name: string
  icon: string
}

interface HeaderProps {
  title: string
  description: string
  client: string
  year: string
  website?: string
  tags: string[]
  techs?: Tech[]
}

const props = defineProps<HeaderProps>()

const formattedWebsite = computed(() => {
  if (!props.website) return ''
  return props.website.replace(/^https?:\/\//i, '')
})
</script>