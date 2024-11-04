<template>
  <div ref="scrollContainer" class="flex -mx-16 overflow-hidden pt-16 relative justify-center">
    <div
      class="scroll-content flex gap-10 transition-transform text-secondary duration-700 ease-out min-w-max"
      :style="{ transform: `translateX(${scrollOffset}px)` }"
    >
      <span class="text-8xl font-bold">/FRONTEND</span>
      <span class="text-8xl font-bold">/REMOTE</span>
      <span class="text-8xl font-bold">/FRANCE</span>
      <span class="text-8xl font-bold">/FULLSTACK</span>
      <span class="text-8xl font-bold">/FREELANCE</span>
      <span class="text-8xl font-bold">/ANIMATION</span>
      <span class="text-8xl font-bold">/WORK</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollOffset: 0,
      scrollSpeed: 2, // Adjust speed for smoother scrolling
      lastScroll: 0, // Store the last scroll position
      requestId: null, // Store requestAnimationFrame ID
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
