<template>
  <DefaultLayout class="-mb-16">
    <div class="flex max-md:block max-md:-mt-14 max-xs:-mt-10 -mt-16 max-md:-mx-14 -mx-16">
      <div class="w-1/2 max-md:w-full relative">
        <div class="sticky top-0 max-md:h-[500px] h-screen">
          <img 
            src="/images/wall.webp" 
            class="h-screen w-full max-md:h-[500px] object-cover object-center"
            alt="Profile image"
          />
        </div>
      </div>

      <div class="w-1/2 max-md:w-full max-lg:p-12  p-16 space-y-8">
        <ContactForm />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import ContactForm from '../components/ContactForm.vue'

</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}
</style>