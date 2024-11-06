<template>
  <LineSeparator class=""/>
  <div ref="scrollContainer" class="flex max-md:py-14 py-16 max-md:-mx-10 -mx-16 overflow-hidden relative justify-center">
    <div
      class="scroll-content flex gap-10 transition-transform text-secondary duration-700 ease-out min-w-max"
      :style="{ transform: `translateX(${scrollOffset}px)` }"
    >
      <span class="text-8xl max-md:text-6xl font-bold">/FRONTEND</span>
      <span class="text-8xl max-md:text-6xl font-bold">/FRANCE</span>
      <span class="text-8xl max-md:text-6xl font-bold">/WORK</span>
      <span class="text-8xl max-md:text-6xl font-bold">/FRONT-END</span>
      <span class="text-8xl max-md:text-6xl font-bold">/FREELANCE</span>
      <span class="text-8xl max-md:text-6xl font-bold">/ANIMATION</span>
      <span class="text-8xl max-md:text-6xl font-bold">/REMOTE</span>
    </div>
  </div>
</template>

<script>
import LineSeparator from '../components/LineSeparator.vue'
export default {
  data() {
    return {
      scrollOffset: 0,
      scrollSpeed: 2, 
      lastScroll: 0, 
      requestId: null, 
    };
  },
  mounted() {
    this.lastScroll = window.scrollY;
    window.addEventListener("scroll", this.startSmoothScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.startSmoothScroll);
    if (this.requestId) cancelAnimationFrame(this.requestId);
  },
  methods: {
    startSmoothScroll() {
      if (this.requestId) return; // Prevent multiple animations
      this.requestId = requestAnimationFrame(this.smoothScroll);
    },
    smoothScroll() {
      const currentScroll = window.scrollY;
      const direction = currentScroll - this.lastScroll > 0 ? 1 : -1;

      // Adjust the scroll offset more smoothly
      this.scrollOffset += direction * this.scrollSpeed;
      this.lastScroll = currentScroll;
      this.requestId = null; // Reset requestId for the next scroll

      // Check if the user is still scrolling
      if (Math.abs(window.scrollY - this.lastScroll) > 0) {
        this.requestId = requestAnimationFrame(this.smoothScroll);
      }
    },
  },
};
</script>

<style scoped>
.scroll-content {
  white-space: nowrap;
  transition: transform 0.1s ease-out;
}
</style>
