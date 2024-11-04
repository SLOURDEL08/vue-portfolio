<template>
  <div class="grid grid-cols-[0.5fr_2px_1fr] gap-x-12 gap-y-12 pb-16 auto-rows-auto">
    <div class="w-full min-h-screen relative">
      <span class="text-3xl sticky top-0 pt-8 text-secondary leading-none font-[500] block">
        {{ stickyTitle }}
      </span>
    </div>
    
    <div class="w-0.5 h-full bg-secondary"></div>
    
    <div class="w-full grid grid-cols-1 gap-16">
      <div class="space-y-16">
        <template v-for="(item, index) in items" :key="index">
          <div class="space-y-3 text-lg">
            <div class="mb-2 text-secondary font-[500]">{{ item.subtitle }}</div>
            <span class="text-4xl text-secondary font-[600]">{{ item.title }}</span>
            <p class="smart-desc">{{ item.description }}</p>
          </div>
          
          <div v-if="index < items.length - 1" class="w-full h-0.5 bg-secondary"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  subtitle: string
  title: string
  description: string
}

interface Props {
  stickyTitle: string
  items: Item[]
}

defineProps<Props>()
</script>

<style scoped>
.sticky {
  transition: opacity 0.3s ease;
}

.grid {
  min-height: 100vh;
}
</style>