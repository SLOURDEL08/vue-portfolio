<template>
  <div class="space-y-12">
    <div class="">
      <div class="space-y-4 gap-16 flex items-end justify-between">
        <div class="w-[70%] ">
          <h1 class="smart-bigtitle text-secondary mb-4">{{ title }}</h1>
        <p class="smart-subtitle text-secondary !font-[600]">{{ description }}</p>
        </div>
              
        <div class="w-[30%] text-right">
          <div class="flex items-center justify-between w-full py-4">
            <h3 class="text-xl text-secondary font-medium">(Client)</h3>
            <p class="font-semibold text-secondary text-xl">{{ client }}</p>
          </div>
          <div class="flex items-center justify-between w-full border-t-2 border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Year)</h3>
            <p class="font-semibold text-secondary text-xl">{{ year }}</p>
          </div>
          <div v-if="website" class="flex items-center justify-between w-full border-t-2 border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Website)</h3>
            <a :href="website" target="_blank" class="font-semibold text-secondary text-xl underline">
              {{ website }}
            </a>
          </div>
          <div class="flex items-center justify-between w-full border-t-2 border-secondary py-4">
            <h3 class="text-xl text-secondary font-medium">(Services)</h3>
            <div class="flex justify-end gap-2 flex-wrap">
              <span class="bg-secondary text-white px-4 py-2 rounded-full font-semibold text-base">
                {{ mainService }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  client: string
  year: string
  website?: string
  mainService: string
}>()
</script>