<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-20 h-full justify-between" aria-labelledby="contact-heading">
    <div class="space-y-4">
      <span class="smart-text">(Contact)</span>
      <h2 id="contact-heading" class="smart-bigtitle !leading-[85%] w-[90%]">Let's get in touch</h2>
    </div>

    <div class="space-y-4">
      <FormField
        id="name"
        v-model="formData.name"
        type="text"
        label="Your Name"
        placeholder="Your Name"
        :error="errors.name"
        :disabled="isSubmitting"
      />

      <FormField
        id="email"
        v-model="formData.email"
        type="email"
        label="Your Email"
        placeholder="Your Email"
        :error="errors.email"
        :disabled="isSubmitting"
      />

      <FormField
        id="message"
        v-model="formData.message"
        type="textarea"
        label="Your Message"
        placeholder="Your Message"
        :rows="6"
        :error="errors.message"
        :disabled="isSubmitting"
      />

      <Button
        type="submit"
        :disabled="isSubmitting"
        class="group relative px-6 py-3 w-full"
        aria-label="Send contact form message"
      >
        <span :class="{ 'opacity-0': isSubmitting }">
          Send Message
        </span>
        
        <LoadingSpinner v-if="isSubmitting" />
      </Button>
    </div>

    <NotificationMessage 
      v-if="showSuccess" 
      type="success"
      message="Message sent successfully!"
      @close="showSuccess = false"
    />

    <NotificationMessage 
      v-if="showError" 
      type="error"
      message="Failed to send message. Please try again."
      @close="showError = false"
    />
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Button from '../../components/ui/Button.vue'
import FormField from './FormField.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import NotificationMessage from './NotificationMessage.vue'
import emailjs from '@emailjs/browser'
import { emailConfig } from '../../config/email'

onMounted(() => {
  emailjs.init(emailConfig.publicKey)
})

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
const showError = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.name = undefined
  errors.email = undefined
  errors.message = undefined
  
  if (!formData.name) {
    errors.name = 'Name is required'
    isValid = false
  }
  
  if (!formData.email) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }
  
  if (!formData.message) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  // Reset notifications
  showSuccess.value = false
  showError.value = false

  // Validate form
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sébastien Lourdel',
        reply_to: formData.email,
      },
      emailConfig.publicKey
    )
    
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
    showError.value = true
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      showError.value = false
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Custom scrollbar for textarea is handled in FormField component */
</style>