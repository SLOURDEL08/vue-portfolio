<template>
  <section :aria-labelledby="`${titleId}`" class="font-[500] text-xl flex flex-col gap-4 items-start">
    <h3 :id="titleId" class="text-lg text-white/50 mb-4">({{ title }})</h3>
    <nav>
      <ul class="flex flex-col gap-4">
        <li v-for="item in items" :key="item.name" class="text-left underline-effect">
          <!-- Liens internes (Router links) -->
          <router-link v-if="itemType === 'internal'" :to="(item as any).path">
            <span class="underline-effect-wrapper">{{ item.name }}</span>
          </router-link>
          
          <!-- Emails ou liens externes personnalisés -->
          <template v-else-if="itemType === 'custom'">
            <a 
              v-if="(item as Link).type === 'email'" 
              :href="`mailto:${(item as Link).url}`"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Envoyer un email à ${item.name}`"
            >
              <span class="underline-effect-wrapper">{{ item.name }}</span>
            </a>
            <a 
              v-else 
              :href="(item as Link).url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Visiter ${item.name} (s'ouvre dans un nouvel onglet)`"
            >
              <span class="underline-effect-wrapper">{{ item.name }}</span>
            </a>
          </template>
          
          <!-- Liens externes simples -->
          <a 
            v-else
            :href="(item as Repository).url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Visiter mon profil ${item.name} (s'ouvre dans un nouvel onglet)`"
          >
            <span class="underline-effect-wrapper">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <!-- Emplacement pour des actions supplémentaires (comme les boutons) -->
    <slot name="action"></slot>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Link {
  name: string
  url: string
  type: 'email' | 'external'
}

interface Repository {
  name: string
  url: string
}

interface Props {
  title: string
  items: Array<any>
  itemType: 'internal' | 'external' | 'custom'
}

const props = defineProps<Props>();

// ID unique pour le titre (pour l'accessibilité)
const titleId = computed(() => `${props.title.toLowerCase().replace(/\s+/g, '-')}-heading`);
</script>