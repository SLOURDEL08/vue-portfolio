<template>
  <DefaultLayout class="-mb-16">
    <article class="flex max-md:block max-md:-mt-14 max-xs:-mt-10 -mt-16 max-md:-mx-14 -mx-16">
      <!-- Section photo de profil -->
      <div class="w-1/2 max-md:w-full relative">
        <div class="sticky top-0 max-md:h-[500px] h-screen">
          <OptimizedImage 
            src="/images/profilpic-contact.png" 
            webpSrc="/images/profilpic-contact.webp" 
            alt="Portrait de Sébastien Lourdel, développeur Front-End"
            className="h-screen w-full max-md:h-[500px] object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div class="absolute inset-0 z-20 mix-blend-overlay opacity-40 pointer-events-none grain-pattern"></div>
        </div>
      </div>

      <!-- Section formulaire de contact -->
      <section 
        aria-labelledby="contact-form-title" 
        class="w-1/2 max-md:w-full max-lg:p-12 p-16 space-y-8"
      >
        <h1 id="contact-form-title" class="sr-only">Formulaire de contact</h1>
        <Suspense>
          <ContactForm />
          <template #fallback>
            <div class="animate-pulse" aria-live="polite">Chargement du formulaire...</div>
          </template>
        </Suspense>
      </section>
    </article>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// Composants asynchrones
const DefaultLayout = defineAsyncComponent(() => 
  import('../components/layouts/DefaultLayout.vue')
)
const ContactForm = defineAsyncComponent(() => 
  import('../components/form/ContactForm.vue')
)
const OptimizedImage = defineAsyncComponent(() => 
  import('../components/OptimizedImage.vue')
)
</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}


</style>