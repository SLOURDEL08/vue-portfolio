<template>
 <footer class="text-white text-center bg-secondary p-16 py-20">
   <div class="grid grid-rows-[auto_1fr] gap-36 max-md:gap-20">
     <!-- Section Connect -->
     <div class="flex flex-col gap-14 max-md:gap-10">
       <div class="h-[200px] flex flex-col justify-center">
         <p class="text-3xl mb-4 max-md:text-xl font-[500]">(Connect)</p>
         <span class="smart-bigtitle leading-none !text-white font-semibold">Let's Talk</span>
       </div>
       <router-link to="/contact">
         <Button class="w-max mx-auto bg-white text-secondary">
           <span v-hover-slide class="inline-block py-0 -my-3">Get in Touch</span>
         </Button>
       </router-link>
     </div>

     <!-- Section Links Grid -->
     <div class="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-16">
       <!-- Pages -->
       <div class="font-[500] text-xl flex flex-col gap-4 items-start">
         <span class="text-lg text-white/50 mb-4">(Pages)</span>
         <ul class="flex flex-col gap-4">
           <li v-for="page in pages" :key="page.name" class="text-left underline-effect">
             <router-link :to="page.path">
               <span class="underline-effect-wrapper">{{ page.name }}</span>
             </router-link>
           </li>
         </ul>
         <router-link to="/work">
           <Button class="mt-4 bg-white text-secondary">
             <span v-hover-slide class="inline-block py-0 -my-3">My Project</span>
           </Button>
         </router-link>
       </div>

       <!-- Links -->
       <div class="font-[500] text-xl flex flex-col gap-4 items-start">
         <span class="text-lg text-white/50 mb-4">(Links)</span>
         <ul class="flex flex-col gap-4">
           <li v-for="link in links" :key="link.name" class="text-left underline-effect">
             <a 
               v-if="link.type === 'email'" 
               :href="`mailto:${link.url}`"
               target="_blank"
               rel="noopener noreferrer"
             >
               <span class="underline-effect-wrapper">{{ link.name }}</span>
             </a>
             <a 
               v-else 
               :href="link.url"
               target="_blank"
               rel="noopener noreferrer"
             >
               <span class="underline-effect-wrapper">{{ link.name }}</span>
             </a>
           </li>
         </ul>
       </div>

       <!-- Repository -->
       <div class="font-[500] text-xl flex flex-col gap-4 items-start">
         <span class="text-lg text-white/50 mb-4">(Repository)</span>
         <ul class="flex flex-col gap-4">
           <li v-for="repo in repositories" :key="repo.name" class="text-left underline-effect">
             <a 
               :href="repo.url"
               target="_blank"
               rel="noopener noreferrer"
             >
               <span class="underline-effect-wrapper">{{ repo.name }}</span>
             </a>
           </li>
         </ul>
       </div>
     </div>
   </div>
   <div class="w-full">© Powered by Vercel [Reproduction of <a class="underline italic" href="https://bent-template.webflow.io/" target="_blank" rel="noopener noreferrer">Bent Lindberg's portfolio</a>]</div>
 </footer>
</template>

<script setup>
const pages = [
 { name: 'Home', path: '/' },
 { name: 'About', path: '/about' },
 { name: 'Work', path: '/work' },
 { name: 'Contact', path: '/contact' }
]

const links = [
 { 
   name: 'Linkedin', 
   url: 'https://www.linkedin.com/in/s%C3%A9bastien-lourdel-297715151/',
   type: 'external'
 },
 { 
   name: 'contact@slourdel.fr', 
   url: 'contact@slourdel.fr',
   type: 'email'
 },
 { 
   name: 'portfolio.slourdel.fr', 
   url: 'https://portfolio.slourdel.fr',
   type: 'external'
 }
]

const repositories = [
 { 
   name: 'Github', 
   url: 'https://github.com/SLOURDEL08' 
 },
 { 
   name: 'Gitlab', 
   url: 'https://gitlab.com/slourdel08'
 },
 { 
   name: 'Behance', 
   url: 'https://www.behance.net/lourdel00'
 }
]
</script>

<style scoped>
footer {
 min-height: 100vh;
 contain: layout style;
}

.smart-bigtitle {
 height: min-content;
}

/* Optional: Add hover effect for external links */
a:hover .underline-effect-wrapper {
 opacity: 0.8;
 transition: opacity 0.2s ease;
}
</style>