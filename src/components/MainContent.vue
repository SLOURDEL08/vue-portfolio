<template>
    <DefaultLayout>
        <div class="grid grid-cols-[1fr_2px_.5fr] gap-x-16 gap-y-16 auto-rows-auto">
            <div class="w-full">
                <span class="smart-title text-secondary !leading-[0.9] font-semibold">As a digital designer, I focus on producing top-notch and impactful digital experiences.</span>
            </div>
            <div class="w-0.5 h-full bg-secondary" />
            <div class="w-full flex flex-col justify-between">
                <span class="text-3xl text-secondary font-[500]">(About me)</span>
                <div class="flex gap-4">
                    <div class="bg-secondary p-3 rounded-full">
                        <Linkedin class="text-white" :size="22" /> 
                    </div>
                    <div class="bg-secondary p-3 rounded-full">
                        <Github class="text-white" :size="22" />
                    </div>
                    <div class="bg-secondary p-3 rounded-full">
                        <Gitlab class="text-white" :size="22" />
                    </div>
                    <div class="bg-secondary p-3 rounded-full">
                        <FileBadge class="text-white" :size="22" />
                    </div>
                </div>
            </div>
        </div>
<LineSeparator class="my-16" trigger-section-id="myproject" />
 <div class="grid grid-cols-[0.5fr_2px_1fr] gap-x-12 gap-y-12 auto-rows-auto">
            <div class="w-full"> <!-- Ajout de min-h-screen uniquement -->
                <span class="text-3xl leading-none font-[600] text-secondary sticky top-0 pt-8">
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

<LineSeparator  trigger-section-id="myproject" />

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
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import InfiniteHorizontalScroll from '../components/InfiniteHorizontalScroll.vue'
import { Instagram, Linkedin, FileBadge, Github, Gitlab } from 'lucide-vue-next'
import LineSeparator from '../components/LineSeparator.vue'

</script>