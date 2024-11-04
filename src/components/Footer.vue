<template>
    <footer class="text-white space-y-36 text-center bg-secondary p-16 py-20">
<div class="flex flex-col gap-14">
    <div class="">
            <p class="text-3xl mb-4 font-[500]">(Connect)</p>
    <span class="smart-bigtitle leading-none !text-white   font-semibold">Let's Talk</span>
    </div>
    <Button class="w-max mx-auto bg-white text-secondary"> 
        <span v-hover-slide class="inline-block py-0 -my-3">
            Get in Touch
          </span>  </Button>
</div>
<div class="flex mt-">
    <div class="w-1/3 font-[500] text-lg flex flex-col gap-6 items-start">
        <span>(Pages)</span>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <Button class="mt-2 bg-white text-secondary">
          <span v-hover-slide class="inline-block py-0 -my-3">
            My Project
          </span>  
        </Button>
    </div>
       <div class="w-1/3 font-[500] text-lg flex flex-col gap-6 items-start">
        <span>(CMS)</span>
        <span>Work</span>
        <span>Work Single</span>
        <span>Blog</span>
        <span>Shop Single</span>
        <span>Work Single</span>
        <span>Blog</span>
    </div>
       <div class="w-1/3 font-[500] text-lg flex flex-col gap-6 items-start">
        <span>(Utility Pages)</span>
        <span>404 Error</span>
        <span>Password</span>
        <span>StyleGuide</span>
        <span>Password</span>
        <span>StyleGuide</span>
    </div>
</div>
    </footer>

</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import InfiniteHorizontalScroll from '../components/InfiniteHorizontalScroll.vue'
import { Instagram, Linkedin, FileBadge, Github, Gitlab } from 'lucide-vue-next'
</script>