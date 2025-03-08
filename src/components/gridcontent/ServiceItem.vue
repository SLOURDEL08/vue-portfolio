<template>
  <div class="space-y-3">
    <h3 v-if="title" class="smart-titlegrid">{{ title }}</h3>
    <p v-if="description" class="smart-desc">{{ description }}</p>
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