<template>
  <div 
    class="fixed bottom-8 right-8 px-6 py-4 rounded-lg flex items-center justify-between"
    :class="{
      'bg-green-500/10 border border-green-500/20 text-green-800': type === 'success',
      'bg-red-500/10 border border-red-500/20 text-red-500': type === 'error'
    }"
    role="alert"
  >
    <span>{{ message }}</span>
    <button 
      @click="$emit('close')" 
      class="ml-4 text-current hover:opacity-75"
      aria-label="Close notification"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value: string) => ['success', 'error'].includes(value)
  },
  message: {
    type: String,
    required: true
  }
})

defineEmits(['close'])
</script>