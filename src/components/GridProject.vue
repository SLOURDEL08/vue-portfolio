<template id="myproject">
    <DefaultLayout class="pt-0">
      <div id="myproject" class="relative">
            <LineSeparator class="mb-16" :trigger-section-id="'myproject'" />
        <div class="grid grid-cols-[0.5fr_2px_1fr] gap-x-12 gap-y-12 auto-rows-auto">
            <div class="w-full"> <!-- Ajout de min-h-screen uniquement -->
                <span class="text-3xl leading-none text-secondary font-[600] sticky top-0 pt-8">
                    (My Projects)
                </span>
            </div>
            <div class="w-0.5 h-full bg-secondary"></div>
            <div class="w-full grid grid-cols-1 gap-12">
                <div class="grid grid-cols-[1fr_2px_1fr] gap-x-12 gap-y-12">
                    <div class="space-y-3">
                        <span class="text-4xl text-secondary font-[600]">Digital Design</span>
                        <p class="text-gray-600/80 text-lg font-regular tracking-wide">I create stunning digital designs that engage and inspire your audience. Let me bring your brand to life with my skills.</p>
                    </div>
                    <div class="w-0.5 h-full bg-secondary"></div>
                    <div class="space-y-3">
                        <span class="text-4xl text-secondary font-[600]">Art Direction</span>
                        <p class="text-gray-600/80 text-lg font-regular tracking-wide">I specialize in designing intuitive user experiences that are both functional and beautiful.</p>
                    </div>
                </div>

                <div class="w-full my-4 h-0.5 bg-secondary"></div>

                <div class="grid grid-cols-[1fr_2px_1fr] gap-x-12 gap-y-12">
                    <div class="space-y-3">
                        <span class="text-4xl text-secondary font-[600]">Interaction Design</span>
                        <p class="text-gray-600/80 text-lg font-regular tracking-wide">From animated logos to explainer videos, I bring your message to life with visually stunning motion design.</p>
                    </div>
                    <div class="w-0.5 h-full bg-secondary"></div>
                    <div class="space-y-3">
                        <span class="text-4xl text-secondary font-[600]">Motion Design</span>
                        <p class="text-gray-600/80 text-lg font-regular tracking-wide">My art direction expertise ensures that your project is on brand, on message, and visually stunning. Let's tell your story together.</p>
                    </div>
                </div>
            </div>
        </div>
<LineSeparator class="mt-16" trigger-section-id="myproject" />

        <InfiniteHorizontalScroll/>
      </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import InfiniteHorizontalScroll from '../components/InfiniteHorizontalScroll.vue'
import LineSeparator from '../components/LineSeparator.vue'
import { Instagram, Linkedin, FileBadge, Github, Gitlab } from 'lucide-vue-next'
</script>

<style scoped>
.sticky {
    transition: opacity 0.3s ease;
}
</style>