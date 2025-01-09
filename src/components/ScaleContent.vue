<template>
    <div class="flex max-md:flex-col max-md:gap-6 py-14 max-md:py-12">
      <span class="w-[60%] max-md:w-full smart-bigtitle tracking-tighter !leading-[0.9] font-semibold">
        {{ title }}
      </span>
      <div class="w-[40%] max-md:w-full pr-10 space-y-6">
        <span class="smart-desc text-truncate-3">
          {{ description }}
        </span>
        <div class="flex gap-4 text-white flex-wrap items-center">
          <i 
            v-for="(tag, index) in limitedTags" 
            :key="index"
            class="bg-secondary text-sm p-2 px-4 rounded-full"
          >
            {{ tag }}
          </i>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProjectHeaderProps {
  title: string
  description: string
  tags: string[] // Maintenant c'est un tableau de strings qui vient de Project.tags
}

const props = withDefaults(defineProps<ProjectHeaderProps>(), {
  tags: () => []
})

// Limiter à 2 tags maximum
const limitedTags = computed(() => props.tags.slice(0, 2))
</script>