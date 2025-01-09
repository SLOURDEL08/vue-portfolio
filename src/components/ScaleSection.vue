<template>
 <div 
   ref="container" 
   class="overflow-hidden max-md:!h-[500px] !h-[700px] relative max-xs:-mx-10  max-md:-mx-14 -mx-16"
   :class="[
     containerClasses,
     { '!cursor-none': variant === 'enhanced' }
   ]"
   @mouseenter="handleMouseEnter"
   @mouseleave="handleMouseLeave"
   @mousemove="handleMouseMove"
 >
   <div class="relative w-full h-full">
     <img
       ref="image"
       :src="imagePath"
       class="w-full h-full object-center object-cover relative z-10"
       :style="{ 
         transform: `scale(${currentScale}) translateY(${currentTranslateY}px)`
       }"
     />

     <router-link 
      :to="linkPath"
       v-if="variant === 'enhanced'"
       class="absolute inset-0 !z-40 cursor-none transition-opacity duration-300"
       :class="{ 'bg-secondary/20': showOverlay, 'opacity-0 pointer-events-none': !showOverlay }"
     >
       <!-- Curseur personnalisé -->
       <div 
         class="view-button large fixed pointer-events-none"
         :class="{ 
           'animate-scale-rotate-in': showOverlay, 
           'animate-scale-rotate-out': !showOverlay 
         }"
         :style="{
           left: `${cursorPos.x}px`,
           top: `${cursorPos.y}px`,
           transform: 'translate(-50%, -50%)'
         }"
       >
         <div class="view-button-icon w-embed">
           <img 
             src="/images/arrow-botleft.png" 
             width="20" 
             height="20" 
             class="invert rotate-180 scale-x-[-1]" 
           />
         </div>
       </div>
     </router-link>

     <!-- Effet de grain -->
     <div class="absolute inset-0 z-20 mix-blend-overlay opacity-60 pointer-events-none grain-pattern"></div>
   </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted, PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export default defineComponent({
 name: 'ScaleSection',
 props: {
   imagePath: {
     type: String as PropType<string>,
     required: true
   },
   maxScale: {
     type: Number as PropType<number>,
     default: 2
   },
   minScale: {
     type: Number as PropType<number>,
     default: 1.5
   },
   maxTranslateY: {
     type: Number as PropType<number>,
     default: 100
   },
   linkPath: {
     type: [String, Object] as PropType<RouteLocationRaw>,
     default: ''
   },
   variant: {
     type: String as PropType<'simple' | 'enhanced'>,
     default: 'simple',
     validator: (value: 'simple' | 'enhanced') => ['simple', 'enhanced'].includes(value)
   },
   animationRange: {
     type: Number as PropType<number>,
     default: 2
   }
 },

 setup(props) {
   const container = ref<HTMLElement | null>(null)
   const image = ref<HTMLElement | null>(null)
   const showOverlay = ref(false)
   const cursorPos = ref({ x: 0, y: 0 })
   const currentScale = ref(props.maxScale)
   const currentTranslateY = ref(0)

   const containerClasses = computed(() => {
     return props.variant === 'enhanced' ? 'h-[850px]' : 'h-[850px]'
   })

   const handleScroll = () => {
     if (!container.value) return

     const rect = container.value.getBoundingClientRect()
     const viewportHeight = window.innerHeight
     const elementHeight = rect.height

     const startOffset = -viewportHeight * (props.animationRange / 2)
     const totalDistance = elementHeight + viewportHeight * props.animationRange

     const progress = Math.max(0, Math.min(1,
       (rect.top - startOffset) / totalDistance
     ))

     currentScale.value = props.minScale + (props.maxScale - props.minScale) * progress
     currentTranslateY.value = props.maxTranslateY * (1 - progress)
   }

   const linkPathVerification = () => {
     if (props.variant === 'enhanced' && !props.linkPath) {
       console.error('linkPath is required when variant is "enhanced"')
     }
   }

   const handleMouseEnter = () => {
     if (props.variant === 'enhanced') {
       showOverlay.value = true
     }
   }

   const handleMouseLeave = () => {
     if (props.variant === 'enhanced') {
       showOverlay.value = false
     }
   }

   const handleMouseMove = (event: MouseEvent) => {
     if (props.variant === 'enhanced') {
       cursorPos.value = {
         x: event.clientX,
         y: event.clientY
       }
     }
   }

   onMounted(() => {
     linkPathVerification()
     currentScale.value = props.maxScale
     currentTranslateY.value = 0
     window.addEventListener('scroll', handleScroll)
     handleScroll()
   })

   onUnmounted(() => {
     window.removeEventListener('scroll', handleScroll)
   })

   return {
     container,
     image,
     showOverlay,
     cursorPos,
     currentScale,
     currentTranslateY,
     containerClasses,
     handleMouseEnter,
     handleMouseLeave,
     handleMouseMove,
     linkPathVerification
   }
 }
})
</script>

<style scoped>


.view-button.large {
 width: 80px;
 height: 80px;
 background-color: #1e1e2140;
 border-radius: 50%;
 backdrop-filter: blur(4px);
 display: flex;
 justify-content: center;
 align-items: center;
 opacity: 0;
 transition: opacity 0.3s ease;
}

.view-button-icon {
 display: flex;
 align-items: center;
 justify-content: center;
}

.view-button-icon img {
 display: block;
 width: 20px;
 height: 20px;
}

/* Animation d'entrée */
.animate-scale-rotate-in {
 animation: scaleRotateIn 0.35s forwards;
}

/* Animation de sortie */
.animate-scale-rotate-out {
 animation: scaleRotateOut 0.35s forwards;
}

@keyframes scaleRotateIn {
 0% {
   transform: translate(-50%, -50%) scale(0) rotate(0deg);
   opacity: 0;
 }
 100% {
   transform: translate(-50%, -50%) scale(1) rotate(360deg);
   opacity: 1;
 }
}

@keyframes scaleRotateOut {
 0% {
   transform: translate(-50%, -50%) scale(1) rotate(0deg);
   opacity: 1;
 }
 100% {
   transform: translate(-50%, -50%) scale(0) rotate(-360deg);
   opacity: 0;
 }
}
</style>