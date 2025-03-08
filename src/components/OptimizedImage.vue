<template>
  <picture>
    <source
      v-if="webpSrc"
      :srcset="generateSrcSet(webpSrc)"
      :sizes="sizes"
      type="image/webp"
    />
    <source
      :srcset="generateSrcSet(src)"
      :sizes="sizes"
      :type="getImageType(src)"
    />
    <img
      :src="src"
      :alt="alt"
      :class="className"
      loading="lazy"
      :width="width"
      :height="height"
      v-bind="$attrs"
    />
  </picture>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  webpSrc: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  width: {
    type: [Number, String],
    default: ''
  },
  height: {
    type: [Number, String],
    default: ''
  },
  sizes: {
    type: String,
    default: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  }
});

// Fonction pour générer automatiquement le srcset
const generateSrcSet = (baseSrc: string) => {
  if (!baseSrc) return '';
  
  // Extraction du nom et de l'extension
  const lastDotIndex = baseSrc.lastIndexOf('.');
  const baseName = baseSrc.substring(0, lastDotIndex);
  const extension = baseSrc.substring(lastDotIndex);
  
  return `
    ${baseName}-sm${extension} 400w,
    ${baseName}-md${extension} 800w,
    ${baseName}-lg${extension} 1200w
  `;
};

// Déterminer le type MIME basé sur l'extension
const getImageType = (src: string) => {
  if (src.endsWith('.jpg') || src.endsWith('.jpeg')) return 'image/jpeg';
  if (src.endsWith('.png')) return 'image/png';
  if (src.endsWith('.svg')) return 'image/svg+xml';
  if (src.endsWith('.gif')) return 'image/gif';
  if (src.endsWith('.avif')) return 'image/avif';
  return 'image/jpeg'; // par défaut
};
</script>