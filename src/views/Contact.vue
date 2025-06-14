<template>
  <DefaultLayout class="-mb-16">
    <article class="flex max-md:block max-md:h-auto max-md:-mt-14 max-xs:-mt-10 -mt-16 -mx-16 max-md:-mx-10 h-screen overflow-hidden">
      <!-- Section photo de profil -->
      <div class="w-1/2 max-md:w-full max-lg:w-1/3 relative">
        <div class="sticky top-0 h-full">
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
      
      <!-- Section formulaire de contact (scrollable) -->
      <section
        ref="scrollContent"
        aria-labelledby="contact-form-title"
        class="w-1/2 max-lg:w-2/3 max-md:w-full overflow-y-auto max-md:overflow-visible max-md:px-6 max-sm:px-4 max-md:py-10 max-md:!p-10 max-lg:p-12 p-16 space-y-8"
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
import { defineAsyncComponent, onMounted, onBeforeUnmount, ref } from 'vue'

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

// Réf pour contrôler le scroll
const scrollContent = ref<HTMLElement | null>(null)

// Gestion du blocage du scroll global
const lockBodyScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockBodyScroll = () => {
  document.body.style.overflow = ''
}

const onContentScroll = () => {
  if (!scrollContent.value) return

  const { scrollTop, scrollHeight, clientHeight } = scrollContent.value

  // Débloquer le body si on atteint le bas
  if (scrollTop + clientHeight >= scrollHeight - 1) {
    unlockBodyScroll()
  } else {
    lockBodyScroll()
  }
}

onMounted(() => {
  lockBodyScroll()
  scrollContent.value?.addEventListener('scroll', onContentScroll)
})

onBeforeUnmount(() => {
  unlockBodyScroll()
  scrollContent.value?.removeEventListener('scroll', onContentScroll)
})
</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}
</style>
