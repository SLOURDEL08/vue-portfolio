<template>
  <div class="carousel-container w-full relative overflow-hidden">
    <!-- Header with title and navigation arrows -->
    <div class="carousel-header flex justify-between items-center mb-6 px-16 py-4 max-md:px-10">
      <h3 class="carousel-title smart-text font-semibold">{{ title || "(Gallery)" }}</h3>
      
      <!-- Navigation arrows -->
      <div class="navigation-controls flex space-x-6">
        <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal @click="prevSlide">
          <div class="relative overflow-hidden w-6 h-6">
            <OptimizedImage 
              src="/images/arrow-botleft.png" 
              webpSrc="/images/arrow-botleft.webp" 
              alt="Previous"
              className="w-full rotate-90 h-full object-contain" 
            />
          </div>
        </div>
        <div class="flex items-center gap-3 cursor-pointer group" v-hover-diagonal @click="nextSlide">
          <div class="relative overflow-hidden w-6 h-6">
            <OptimizedImage 
              src="/images/arrow-botleft.png" 
              webpSrc="/images/arrow-botleft.webp" 
              alt="Next"
              className="w-full scale-y-[-1] h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Carousel wrapper -->
    <div 
      ref="carouselTrack"
      class="carousel-track flex transition-transform duration-300 ease-out"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div 
        v-for="(image, index) in gallery" 
        :key="index"
        :ref="el => setSlideRef(el as HTMLDivElement, index)"
        class="carousel-slide flex-shrink-0 w-[45%] md:w-[45%] lg:w-[30%] relative"
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
            :alt="`Image ${index + 1} du projet`"
            className="w-full h-[350px] max-md:h-48 object-cover object-center relative z-10"
            :style="{ 
              transform: 'none' // Removed scale and translate effects
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
import { defineComponent, ref, computed, onMounted, onUnmounted, watch, PropType } from 'vue'
import Lightbox from './Lightbox.vue'
import OptimizedImage from '../OptimizedImage.vue'

export default defineComponent({
  name: 'CarouselGallery',
  components: { Lightbox, OptimizedImage },
  props: {
    gallery: {
      type: Array as PropType<string[]>,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    // Keeping these props for backward compatibility, but they won't be used for hover effects
    maxScale: {
      type: Number,
      default: 1
    },
    minScale: {
      type: Number,
      default: 1
    },
    maxTranslateY: {
      type: Number,
      default: 0
    },
    variant: {
      type: String,
      default: 'enhanced',
      validator: (value: string) => ['simple', 'enhanced'].includes(value)
    },
    animationRange: {
      type: Number,
      default: 2
    },
    slidesToShow: {
      type: Number,
      default: 3
    },
    mobileSlides: {
      type: Number,
      default: 2
    },
    tabletSlides: {
      type: Number,
      default: 2
    },
    gap: {
      type: Number,
      default: 0 // No gap between slides
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    autoplaySpeed: {
      type: Number,
      default: 5000 // 5 seconds
    }
  },
  setup(props) {
    const carouselTrack = ref<HTMLDivElement | null>(null)
    const slides = ref<HTMLDivElement[]>([])
    const images = ref<HTMLImageElement[]>([])
    const currentSlide = ref(0)
    const slideWidth = ref(0)
    const touchStartX = ref(0)
    const touchEndX = ref(0)
    const isDragging = ref(false)
    const dragStartX = ref(0)
    const dragOffsetX = ref(0)
    const autoplayInterval = ref<number | null>(null)
    
    // Old gallery functionality
    const showOverlay = ref(false)
    const activeIndex = ref(-1)
    const cursorPositions = ref<{ [key: number]: { x: number; y: number } }>({})
    const scales = ref<number[]>([])
    const translates = ref<number[]>([])
    const isLightboxOpen = ref(false)
    const currentImageIndex = ref(0)

    // Compute actual slides to show based on screen size
    const slidesToShow = computed(() => {
      if (typeof window === 'undefined') return props.mobileSlides
      if (window.innerWidth < 768) return props.mobileSlides  // 2 slides on mobile
      if (window.innerWidth < 1024) return props.tabletSlides // 2 slides on tablet
      return props.slidesToShow                               // 3 slides on desktop
    })

    // Calculate transform value for carousel track
    const trackTransform = computed(() => {
      const baseTransform = -(currentSlide.value * (slideWidth.value + props.gap))
      return baseTransform + dragOffsetX.value
    })

    // Check if current slide is the first slide
    const isFirstSlide = computed(() => currentSlide.value === 0)

    // Check if current slide is the last slide
    const isLastSlide = computed(() => {
      return currentSlide.value >= props.gallery.length - slidesToShow.value
    })

    // Set up slide references
    const setSlideRef = (el: HTMLDivElement | null, index: number) => {
      if (el) {
        slides.value[index] = el
      }
    }

    // Set up image references
    const setImageRef = (el: HTMLImageElement | null, index: number) => {
      if (el) {
        images.value[index] = el
      }
    }

    // Get WebP path for image
    const getWebpPath = (imagePath: string) => {
      if (!imagePath) return ''
      const lastDotIndex = imagePath.lastIndexOf('.')
      if (lastDotIndex === -1) return ''
      const basePath = imagePath.substring(0, lastDotIndex)
      return `${basePath}.webp`
    }

    // Initialize arrays (simplified as we're not using scale effects)
    const initializeArrays = () => {
      // Keep the arrays for compatibility but we won't use them for hover effects
      scales.value = Array(props.gallery.length).fill(1)
      translates.value = Array(props.gallery.length).fill(0)
    }

    // Update slide width based on container size
    const updateSlideWidth = () => {
      if (!carouselTrack.value) return
      
      const containerWidth = carouselTrack.value.parentElement?.clientWidth || 0
      
      // Calculate slide width based on screen width and number of slides to show
      const currentSlidesToShow = slidesToShow.value
      slideWidth.value = (containerWidth - (props.gap * (currentSlidesToShow - 1))) / currentSlidesToShow
      
      // Apply width to slides
      slides.value.forEach(slide => {
        if (slide) {
          slide.style.width = `${slideWidth.value}px`
          if (props.gap > 0) {
            slide.style.marginRight = `${props.gap}px`
          }
        }
      })
      
      // Update track position
      updateTrackPosition()
    }

    // Update carousel track position
    const updateTrackPosition = () => {
      if (!carouselTrack.value) return
      carouselTrack.value.style.transform = `translateX(${trackTransform.value}px)`
    }

    // Navigate to the next slide
    const nextSlide = () => {
      if (currentSlide.value < props.gallery.length - slidesToShow.value) {
        currentSlide.value++
        updateTrackPosition()
      }
    }

    // Navigate to the previous slide
    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--
        updateTrackPosition()
      }
    }

    // Go to a specific slide
    const goToSlide = (index: number) => {
      currentSlide.value = Math.min(index, props.gallery.length - slidesToShow.value)
      updateTrackPosition()
    }

    // Handle touch start event
    const handleTouchStart = (event: TouchEvent) => {
      touchStartX.value = event.touches[0].clientX
      touchEndX.value = event.touches[0].clientX
      isDragging.value = true
      dragStartX.value = trackTransform.value
      
      // Clear autoplay when user interacts
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
        autoplayInterval.value = null
      }
    }

    // Handle touch move event
    const handleTouchMove = (event: TouchEvent) => {
      if (!isDragging.value) return
      
      touchEndX.value = event.touches[0].clientX
      const diff = touchEndX.value - touchStartX.value
      
      // Limit dragging at boundaries
      if (
        (currentSlide.value === 0 && diff > 0) || 
        (currentSlide.value >= props.gallery.length - slidesToShow.value && diff < 0)
      ) {
        dragOffsetX.value = diff * 0.2 // Resistance at boundaries
      } else {
        dragOffsetX.value = diff
      }
      
      updateTrackPosition()
    }

    // Handle touch end event
    const handleTouchEnd = () => {
      if (!isDragging.value) return
      
      const diff = touchEndX.value - touchStartX.value
      const threshold = slideWidth.value * 0.2 // 20% of slide width
      
      if (diff < -threshold && !isLastSlide.value) {
        nextSlide()
      } else if (diff > threshold && !isFirstSlide.value) {
        prevSlide()
      } else {
        // Return to current slide
        dragOffsetX.value = 0
        updateTrackPosition()
      }
      
      isDragging.value = false
      dragOffsetX.value = 0
      
      // Restart autoplay after interaction if enabled
      startAutoplay()
    }

    // Start autoplay if enabled
    const startAutoplay = () => {
      if (!props.autoplay) return
      
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
      }
      
      autoplayInterval.value = window.setInterval(() => {
        if (currentSlide.value < props.gallery.length - slidesToShow.value) {
          nextSlide()
        } else {
          // Reset to first slide when reaching the end
          currentSlide.value = 0
          updateTrackPosition()
        }
      }, props.autoplaySpeed)
    }

    // Mouse interactions for enhanced mode - keeping only the custom cursor
    const handleMouseEnter = (index: number) => {
      if (props.variant === 'enhanced') {
        showOverlay.value = true
        activeIndex.value = index
        // No scale change on hover
      }
    }

    const handleMouseLeave = () => {
      if (props.variant === 'enhanced') {
        showOverlay.value = false
        activeIndex.value = -1
        // No scale reset needed
      }
    }

    const handleMouseMove = (event: MouseEvent, index: number) => {
      if (props.variant === 'enhanced' && slides.value[index]) {
        const rect = slides.value[index].getBoundingClientRect()
        cursorPositions.value[index] = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
        }
      }
    }

    // Lightbox functions
    const openLightbox = (index: number) => {
      currentImageIndex.value = index
      isLightboxOpen.value = true
    }

    const closeLightbox = () => {
      isLightboxOpen.value = false
    }

    // Handle window resize
    const handleResize = () => {
      updateSlideWidth()
    }

    // Watch for changes to current slide
    watch(currentSlide, () => {
      updateTrackPosition()
    })

    // Initialize
    onMounted(() => {
      initializeArrays()
      updateSlideWidth()
      startAutoplay()
      
      window.addEventListener('resize', handleResize)
    })

    // Clean up
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      
      if (autoplayInterval.value) {
        clearInterval(autoplayInterval.value)
      }
    })

    return {
      carouselTrack,
      currentSlide,
      setSlideRef,
      setImageRef,
      nextSlide,
      prevSlide,
      goToSlide,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      
      // Original gallery functionality
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
.carousel-track {
  will-change: transform;
}

/* Removing margin-right reset since we have no gap */

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