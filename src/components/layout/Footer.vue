<template>
  <footer 
    class="text-white text-center bg-secondary p-16 py-20 fixed-size-footer" 
    role="contentinfo" 
    aria-label="Informations de contact et liens"
  >
    <div class="grid grid-rows-[auto_1fr] gap-36 max-md:gap-20">
      <!-- Section Connect -->
      <section aria-labelledby="connect-heading">
        <div class="flex flex-col gap-14 max-md:gap-10">
          <div class="h-[200px] flex flex-col justify-center">
            <p class="text-3xl mb-4 max-md:text-xl font-[500]">(Connect)</p>
            <h2 id="connect-heading" class="smart-bigtitle leading-none !text-white font-semibold">Let's Talk</h2>
          </div>
          <router-link to="/contact">
            <Button class="mt-4 bg-white text-secondary">
              <span v-hover-slide class="inline-block py-0 -my-3">Get in Touch</span>
            </Button>
          </router-link>
        </div>
      </section>

      <!-- Section Links Grid -->
      <div class="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-16">
        <!-- Sections de liens -->
        <LinkSection 
          title="Pages" 
          :items="pages" 
          itemType="internal"
        >
          <template #action>
            <router-link to="/work">
              <Button class="mt-4 bg-white text-secondary">
                <span v-hover-slide class="inline-block py-0 -my-3">My Project</span>
              </Button>
            </router-link>
          </template>
        </LinkSection>

        <LinkSection 
          title="Links" 
          :items="links" 
          itemType="custom"
        />

        <LinkSection 
          title="Repository" 
          :items="repositories" 
          itemType="external"
        />
      </div>
    </div>
    <div class="w-full mt-8">
      © Powered by Vercel [Reproduction of 
      <a 
        class="underline italic" 
        href="https://bent-template.webflow.io/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Lien vers le portfolio de Bent Lindberg (s'ouvre dans un nouvel onglet)"
      >
        Bent Lindberg's portfolio
      </a>]
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';

// Import des composants en mode asynchrone pour améliorer les performances
const Button = defineAsyncComponent(() => import('../ui/Button.vue'));
const LinkSection = defineAsyncComponent(() => import('../LinkSection.vue'));

// Préchargement des ressources critiques
onMounted(() => {
  // Précharger les styles du footer
  document.body.classList.add('footer-loaded');
});

interface Page {
  name: string
  path: string
}

interface Link {
  name: string
  url: string
  type: 'email' | 'external'
}

interface Repository {
  name: string
  url: string
}

const pages: Page[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' }
]

const links: Link[] = [
  { 
    name: 'Linkedin', 
    url: 'https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/',
    type: 'external'
  },
  { 
    name: 'contact@slourdel.fr', 
    url: 'contact@slourdel.fr',
    type: 'email'
  },
  { 
    name: 'portfolio.slourdel.fr', 
    url: 'https://portfolio.slourdel.fr',
    type: 'external'
  }
]

const repositories: Repository[] = [
  { 
    name: 'Github', 
    url: 'https://github.com/SLOURDEL08' 
  },
  { 
    name: 'Gitlab', 
    url: 'https://gitlab.com/slourdel08'
  },
  { 
    name: 'Behance', 
    url: 'https://www.behance.net/lourdel00'
  }
]
</script>

<style scoped>
footer {
  box-sizing: border-box;
}

/* Classe spécifique pour la taille fixe du footer */

.smart-bigtitle {
  height: min-content;
}

/* Optional: Add hover effect for external links */
a:hover .underline-effect-wrapper {
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

/* Style pour le chargement progressif */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.footer-loaded footer {
  animation: fadeIn 0.3s ease-in;
}
</style>