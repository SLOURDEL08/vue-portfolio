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
            <p class="font-semibold text-secondary text-xl">{{ year }}</p>
          </div>
          <LineSeparator/>
          <div v-if="website" class="flex items-center justify-between w-full border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Website)</h3>
            <a :href="website" target="_blank" class="font- text-secondary text-base underline">
              {{ website }}
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
    </div>
  </div>
</template>

<script setup lang="ts">
import LineSeparator from '../../components/LineSeparator.vue'

interface HeaderProps {
  title: string
  description: string
  client: string
  year: string
  website?: string
  tags: string[]
}

defineProps<HeaderProps>()
</script>