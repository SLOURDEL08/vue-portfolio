<template>
  <div class="w-full space-y-3">
    <h3 v-if="title" class="smart-titlegrid max-xl:text-3xl">{{ title }}</h3>
    <p v-if="description" class="smart-desc max-xl:text-base">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>