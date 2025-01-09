<!-- src/components/ui/Button.vue -->
<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'px-7 py-2.5',
      'inline-flex text-xl tracking-wide items-center justify-center',
      'text-[#f5f3ef] bg-secondary',
      'rounded-full font-medium',
      'transition-all duration-200 ease-in-out',
      ' max-md:text-lg max-md:p-3.5',
      'focus:outline-none focus:ring-none focus:ring-none focus:ring-none',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      className
    ]"
    @click="$emit('click', $event)"
  >
    <!-- Loading spinner -->
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>

    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },

  emits: ['click']
})
</script>
