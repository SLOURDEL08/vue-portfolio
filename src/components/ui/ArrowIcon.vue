<!-- components/ArrowIcon.vue -->
<template>
  <OptimizedImage 
    src="/images/arrow-botleft.png" 
    webpSrc="/images/arrow-botleft.webp" 
    alt="" 
    :className="className" 
    width="18"
    height="18"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const OptimizedImage = defineAsyncComponent(() => import('../OptimizedImage.vue'))

defineProps({
  className: {
    type: String,
    default: 'w-[18px] h-[18px]'
  }
})
</script>