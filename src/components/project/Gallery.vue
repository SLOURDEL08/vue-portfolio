<template>
 <div class="gallery w-full grid grid-cols-2 overflow-hidden relative">
   <div 
     v-for="(image, index) in gallery" 
     :key="index"
     :ref="el => setContainerRef(el as HTMLDivElement, index)"
     class="overflow-hidden w-full relative"
     :class="{ 'cursor-none': variant === 'enhanced' }"
     @mouseenter="handleMouseEnter(index)"
     @mouseleave="handleMouseLeave"
     @mousemove="handleMouseMove($event, index)"
   >
     <div class="relative w-full h-full">
       <!-- Image principale avec OptimizedImage -->
       <OptimizedImage
         :ref="el => setImageRef(el as HTMLImageElement, index)"
         :src="image"
         :webpSrc="getWebpPath(image)"
         :alt="`Image ${index + 1} de la galerie`"
         className="w-full h-[600px] max-md:h-80 object-cover object-left relative z-10"
         :style="{ 
           transform: `scale(${scales[index]}) translateY(${translates[index]}px)`
         }"
       />

       <!-- Gradient overlay -->
       <div class="w-full absolute h-full inset-0 z-20 bg-gradient-to-t from-black/20 to-transparent" />

       <!-- Effet de grain -->
       <div class="absolute inset-0 z-30 mix-blend-overlay opacity-35 pointer-events-none grain-pattern"></div>

       <!-- Overlay et curseur personnalisé -->
       <div 
         v-show="variant === 'enhanced' && showOverlay && activeIndex === index"
         class="absolute inset-0 !z-40 transition-opacity duration-300 pointer-events-auto"
         :class="{ 'bg-secondary/20': showOverlay }"
         @click="openLightbox(index)"
       >
         <!-- Curseur personnalisé -->
         <div 
           class="view-button large absolute pointer-events-none"
           :class="{ 'animate-scale-rotate': showOverlay && activeIndex === index }"
           :style="{
             left: `${cursorPositions[index]?.x || 0}px`,
             top: `${cursorPositions[index]?.y || 0}px`,
             transform: 'translate(-50%, -50%)'
           }"
         >
           <div class="view-button-icon w-embed">
             <OptimizedImage
               src="/images/eyes.webp"
               webpSrc="/images/eyes.webp" 
               alt="Icon view"
               width="40" 
               height="40"
               className="scale-x-[-1]"
             />
           </div>
         </div>
       </div>
     </div>
   </div>

   <!-- Lightbox Component -->
   <Lightbox
     v-if="isLightboxOpen"
     :images="gallery"
     :current-index="currentImageIndex"
     @close="closeLightbox"
     @update:current-index="currentImageIndex = $event"
   />
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, PropType } from 'vue'
import Lightbox from './Lightbox.vue'
import OptimizedImage from '../OptimizedImage.vue'

export default defineComponent({
 name: 'Gallery',
 components: { Lightbox, OptimizedImage },
 props: {
   gallery: {
     type: Array as PropType<string[]>,
     required: true
   },
   maxScale: {
     type: Number,
     default: 2
   },
   minScale: {
     type: Number,
     default: 1.5
   },
   maxTranslateY: {
     type: Number,
     default: 100
   },
   variant: {
     type: String,
     default: 'enhanced',
     validator: (value: string) => ['simple', 'enhanced'].includes(value)
   },
   animationRange: {
     type: Number,
     default: 2
   }
 },
 setup(props) {
   const containers = ref<HTMLDivElement[]>([])
   const images = ref<HTMLImageElement[]>([])
   const showOverlay = ref(false)
   const activeIndex = ref(-1)
   const cursorPositions = ref<{ [key: number]: { x: number; y: number } }>({})
   const scales = ref<number[]>([])
   const translates = ref<number[]>([])
   const isLightboxOpen = ref(false)
   const currentImageIndex = ref(0)

   // Nouvelle fonction pour obtenir le chemin WebP
   const getWebpPath = (imagePath: string) => {
     if (!imagePath) return '';
     const lastDotIndex = imagePath.lastIndexOf('.');
     if (lastDotIndex === -1) return '';
     const basePath = imagePath.substring(0, lastDotIndex);
     return `${basePath}.webp`;
   };

   const setContainerRef = (el: HTMLDivElement | null, index: number) => {
     if (el) {
       containers.value[index] = el
     }
   }

   const setImageRef = (el: HTMLImageElement | null, index: number) => {
     if (el) {
       images.value[index] = el
     }
   }

   const initializeArrays = () => {
     scales.value = Array(props.gallery.length).fill(props.maxScale)
     translates.value = Array(props.gallery.length).fill(0)
   }

   const handleScroll = () => {
     containers.value.forEach((container, index) => {
       if (!container) return

       const rect = container.getBoundingClientRect()
       const viewportHeight = window.innerHeight
       const elementHeight = rect.height

       const startOffset = -viewportHeight * (props.animationRange / 2)
       const totalDistance = elementHeight + viewportHeight * props.animationRange

       const progress = Math.max(0, Math.min(1, (rect.top - startOffset) / totalDistance))

       scales.value[index] = props.minScale + (props.maxScale - props.minScale) * progress
       translates.value[index] = props.maxTranslateY * (1 - progress)
     })
   }

   const handleMouseEnter = (index: number) => {
     if (props.variant === 'enhanced') {
       showOverlay.value = true
       activeIndex.value = index
     }
   }

   const handleMouseLeave = () => {
     if (props.variant === 'enhanced') {
       showOverlay.value = false
       activeIndex.value = -1
     }
   }

   const handleMouseMove = (event: MouseEvent, index: number) => {
     if (props.variant === 'enhanced' && containers.value[index]) {
       const rect = containers.value[index].getBoundingClientRect()
       cursorPositions.value[index] = {
         x: event.clientX - rect.left,
         y: event.clientY - rect.top
       }
     }
   }

   const openLightbox = (index: number) => {
     if (props.variant === 'enhanced') {
       currentImageIndex.value = index
       isLightboxOpen.value = true
     }
   }

   const closeLightbox = () => {
     isLightboxOpen.value = false
   }

   onMounted(() => {
     initializeArrays()
     window.addEventListener('scroll', handleScroll)
     handleScroll()
   })

   onUnmounted(() => {
     window.removeEventListener('scroll', handleScroll)
   })

   return {
     setContainerRef,
     setImageRef,
     showOverlay,
     activeIndex,
     cursorPositions,
     scales,
     translates,
     isLightboxOpen,
     currentImageIndex,
     handleMouseEnter,
     handleMouseLeave,
     handleMouseMove,
     openLightbox,
     closeLightbox,
     getWebpPath
   }
 }
})
</script>

<style scoped>


.view-button.large {
 width: 80px;
 height: 80px;
 background-color: rgba(30, 30, 33, 0.8);
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: opacity 0.3s ease;
 opacity: 1;
}

.view-button-icon {
 display: flex;
 align-items: center;
 justify-content: center;
}

.view-button-icon img {
 display: block;
 width: 35px;
 height: 35px;
}

.animate-scale-rotate {
 animation: scaleRotate 0.35s forwards;
}

@keyframes scaleRotate {
 0% {
   transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
   opacity: 1;
 }
 100% {
   transform: translate(-50%, -50%) scale(1) rotate(360deg);
   opacity: 1;
 }
}

.view-button.large:hover {
 animation: scaleRotateOut 0.35s forwards;
}

@keyframes scaleRotateOut {
 0% {
   transform: translate(-50%, -50%) scale(1) rotate(360deg);
   opacity: 1;
 }
 100% {
   transform: translate(-50%, -50%) scale(0.1) rotate(0deg);
   opacity: 0;
 }
}
</style>