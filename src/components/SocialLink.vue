<template>
  <a :href="href" :aria-label="ariaLabel" :download="download">
    <div class="bg-secondary max-md:scale-105 p-3 rounded-full">
      <slot></slot>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: true
  },
  ariaLabel: {
    type: String,
    required: true
  },
  download: {
    type: String,
    default: ''
  }
})
</script>