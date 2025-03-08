<template>
  <div class="space-y-2">
    <label :for="id" class="sr-only">{{ label }}</label>
    <template v-if="type === 'textarea'">
      <textarea
        :id="id"
        :value="modelValue"
        @input="handleInput"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          'w-full placeholder:text-secondary px-5 py-4 bg-[#e4e1da] font-[500] border border-transparent',
          'focus:outline-none focus:ring-2 focus:ring-primary/20',
          'transition-colors duration-200 resize-none',
          error ? 'border-red-500' : 'border-neutral-800',
        ]"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : undefined"
      ></textarea>
    </template>
    <template v-else>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          'w-full px-5 py-4 bg-[#e4e1da] placeholder:text-secondary font-[500] border border-transparent',
          'focus:outline-none focus:ring-2 focus:ring-primary/20',
          'transition-colors duration-200',
          error ? 'border-red-500' : 'border-neutral-800',
        ]"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${id}-error` : undefined"
      />
    </template>
    <span 
      v-if="error" 
      :id="`${id}-error`" 
      class="text-sm text-red-500"
      role="alert"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 4
  }
})

const emit = defineEmits(['update:modelValue'])

// Gestion typée de l'événement input
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  if (target) {
    emit('update:modelValue', target.value);
  }
}
</script>

<style scoped>
/* Smooth transition for input borders */
input, textarea {
  @apply transition-all duration-200;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  @apply bg-transparent;
}

textarea::-webkit-scrollbar-thumb {
  @apply bg-neutral-800 rounded-full;
}

textarea::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral-700;
}
</style>