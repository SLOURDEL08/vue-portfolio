<template>
  <Transition name="fade">
    <div 
      class="lightbox fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
      @click.self="handleClose"
    >
      <div class="absolute top-4 right-4 z-50">
        <button 
          @click="handleClose"
          class="p-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="h-full w-full flex flex-col items-center justify-center p-4">
        <!-- Navigation buttons -->
        <div class="absolute left-4 top-1/2 -translate-y-1/2 z-50">
          <button 
            @click="previousImage"
            class="p-2 text-white hover:text-gray-300 transition-colors"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div class="absolute right-4 top-1/2 -translate-y-1/2 z-50">
          <button 
            @click="nextImage"
            class="p-2 text-white hover:text-gray-300 transition-colors"
            :disabled="currentIndex === images.length - 1"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === images.length - 1 }"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Main image -->
        <Transition name="slide" mode="out-in">
          <div
            :key="currentIndex"
            class="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
          >
          <OptimizedImage 
  :src="images[currentIndex]" 
  :webpSrc="getWebpPath(images[currentIndex])"
  :alt="`Image ${currentIndex + 1} en plein écran`"
  className="max-w-full max-h-[80vh] object-contain"
  :responsive="false" 
  @click.stop
/>

          </div>
        </Transition>

        <!-- Thumbnails -->
        <div class="absolute bottom-4 left-0 right-0">
          <div class="flex justify-center items-center gap-2 px-4 overflow-x-auto py-2 thumbnails">
            <button
              v-for="(image, index) in images"
              :key="index"
              @click="updateIndex(index)"
              class="relative flex-shrink-0 w-20 h-20 transition-all duration-200 transform hover:scale-105"
              :class="{ 'ring-2 ring-white ring-offset-2 ring-offset-black': currentIndex === index }"
            >
              <OptimizedImage 
                :src="image"
                :webpSrc="getWebpPath(image)"
                :alt="`Miniature ${index + 1}`"
                className="w-full h-full object-cover"
                sizes="80px"
                :class="{ 'opacity-50': currentIndex !== index }"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType } from 'vue'
import OptimizedImage from '../../components/OptimizedImage.vue'

export default defineComponent({
  name: 'Lightbox',
  components: {
    OptimizedImage
  },
  props: {
    images: {
      type: Array as PropType<string[]>,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  emits: ['close', 'update:current-index'],
  
  setup(props, { emit }) {
    // Fonction pour générer le chemin WebP
    const getWebpPath = (imagePath: string) => {
      if (!imagePath) return '';
      const lastDotIndex = imagePath.lastIndexOf('.');
      if (lastDotIndex === -1) return '';
      const basePath = imagePath.substring(0, lastDotIndex);
      return `${basePath}.webp`;
    };

    const handleClose = () => {
      emit('close')
    }

    const updateIndex = (index: number) => {
      emit('update:current-index', index)
    }

    const previousImage = () => {
      if (props.currentIndex > 0) {
        updateIndex(props.currentIndex - 1)
      }
    }

    const nextImage = () => {
      if (props.currentIndex < props.images.length - 1) {
        updateIndex(props.currentIndex + 1)
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          previousImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'Escape':
          handleClose()
          break
      }
    }

    onMounted(() => {
      window.addEventListener('keydown', handleKeydown)
      // Empêcher le défilement du body quand la lightbox est ouverte
      document.body.style.overflow = 'hidden'
    })

    onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown)
      // Réactiver le défilement du body quand la lightbox est fermée
      document.body.style.overflow = ''
    })

    return {
      handleClose,
      previousImage,
      nextImage,
      updateIndex,
      getWebpPath
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Amélioration du style des boutons */
button:not(:disabled) {
  transition: all 0.2s ease;
}

button:not(:disabled):hover {
  transform: scale(1.1);
}

/* Style du conteneur de miniatures */
.thumbnails {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.thumbnails::-webkit-scrollbar {
  height: 6px;
}

.thumbnails::-webkit-scrollbar-track {
  background: transparent;
}

.thumbnails::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

/* Animation pour le survol des miniatures */
.thumbnails button {
  transition: all 0.2s ease;
}

.thumbnails button:hover {
  transform: scale(1.05);
}
</style>