<template>
  <div class="flex justify-between items-center pt-24">
    <router-link
      v-if="prevProject"
      :to="{ name: 'project', params: { slug: prevProject }}"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
        <div class="relative overflow-hidden w-6 h-6">
          <img src="/images/arrow-botleft.png" alt="arrow" class="w-full rotate-90 h-full object-contain" />
        </div>
        <span v-hover-slide class="text-3xl text-secondary font-medium">Previous Project</span>
      </div>
    </router-link>

    <router-link
      v-if="nextProject"
      :to="{ name: 'project', params: { slug: nextProject }}"
      class="flex items-center gap-4 hover:opacity-70 transition-opacity"
    >
      <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal>
                <span v-hover-slide class="text-3xl text-secondary font-medium">Next Project</span>
        <div class="relative overflow-hidden w-6 h-6">
          <img src="/images/arrow-botleft.png" alt="arrow" class="w-full h-full object-contain" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  prevProject?: string
  nextProject?: string
}>()
</script>