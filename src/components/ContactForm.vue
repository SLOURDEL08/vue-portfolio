<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-20 h-full justify-between">
    <div class="space-y-4">
        <span class="smart-text">(About Me)</span>
      <h2 class="smart-bigtitle !leading-[85%] w-[90%]">Let's get in touch</h2>
    </div>

    <div class="space-y-4">
      <div class="space-y-2">
        <input
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="Your Name"
          :class="[
            'w-full px-5 py-4 bg-[#e4e1da] placeholder:text-secondary font-[500] border border-transparent',
            'focus:outline-none focus:ring-2 focus:ring-primary/20',
            'transition-colors duration-200',
            errors.name ? 'border-red-500' : 'border-neutral-800',
          ]"
          :disabled="isSubmitting"
        />
        <span v-if="errors.name" class="text-sm text-red-500">{{ errors.name }}</span>
      </div>

      <div class="space-y-2">
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="Your Email"
          :class="[
            'w-full px-5 py-4 bg-[#e4e1da] placeholder:text-secondary font-[500] border border-transparent',
            'focus:outline-none focus:ring-2 focus:ring-primary/20',
            'transition-colors duration-200',
            errors.email ? 'border-red-500' : 'border-neutral-800',
          ]"
          :disabled="isSubmitting"
        />
        <span v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</span>
      </div>

      <div class="space-y-2">
        <textarea
          id="message"
          v-model="formData.message"
          rows="6"
          placeholder="Your Message"
          :class="[
            'w-full placeholder:text-secondary px-5 py-4 bg-[#e4e1da] font-[500]  border border-transparent',
            'focus:outline-none focus:ring-2 focus:ring-primary/20',
            'transition-colors duration-200 resize-none',
            errors.message ? 'border-red-500' : 'border-neutral-800',
          ]"
          :disabled="isSubmitting"
        ></textarea>
        <span v-if="errors.message" class="text-sm text-red-500">{{ errors.message }}</span>
      </div>
        <Button
      type="submit"
      :disabled="isSubmitting"
      class="group relative px-6 py-3 w-full"
    >
      <span :class="{ 'opacity-0': isSubmitting }">
        Send Message
      </span>
      
      <div 
        v-if="isSubmitting" 
        class="absolute inset-0 flex items-center justify-center"
      >
        <svg 
          class="animate-spin h-5 w-5" 
          xmlns="http://www.w3.org/2000/svg" 
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
          ></circle>
          <path 
            class="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </Button>
    </div>
    <div 
      v-if="showSuccess" 
      class="fixed bottom-8 right-8 bg-green-500/10 border border-green-500/20 px-6 py-4 rounded-lg"
    >
      Message sent successfully!
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Button from '../components/ui/Button.vue'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  message: ''
})

const errors = reactive<FormErrors>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  errors.name = !formData.name ? 'Name is required' : undefined
  errors.email = !formData.email 
    ? 'Email is required' 
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ? 'Please enter a valid email'
    : undefined
  errors.message = !formData.message ? 'Message is required' : undefined

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  // Reset state
  errors.name = undefined
  errors.email = undefined
  errors.message = undefined
  showSuccess.value = false

  // Validate form
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.message = ''

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Error sending message:', error)
  } finally {
    isSubmitting.value = false
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