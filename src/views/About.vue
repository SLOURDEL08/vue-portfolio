<template>
  <DefaultLayout class="-mb-16">
    <div class="flex max-md:block max-xs:-mt-14 max-md:-mt-14 -mt-16 max-xs:-mx-10 max-md:-mx-14 -mx-16">
      <div class="w-1/2 max-md:w-full relative">
        <div class="sticky top-0 max-md:h-[500px] h-screen">
          <img 
            src="/images/profilpic-contact.png" 
            loading="lazy"
            class="h-screen w-full max-md:h-[500px] object-cover object-center"
            alt="Profile image"
          />
     <div class="absolute inset-0 z-20 mix-blend-overlay opacity-40 pointer-events-none grain-pattern"></div>
        </div>
      </div>

      <div class="w-1/2 max-md:w-full max-md:p-14 max-xs:p-10 p-16 space-y-8">
        <Suspense>
          <template #default>
            <div class="space-y-8">
              <div>
                <span class="smart-text">(About Me)</span>
                <h1 class="smart-bigtitle max-lg:text-6xl max-lg:tracking-wide pt-2">Sébastien LOURDEL</h1>
              </div>
              </div>
               </template>
            </Suspense>
        <i class="fi fi-sr-menu-burger"></i>
        <p class="text-[45px] max-lg:text-3xl  max-md:text-3xl leading-[110%] font-[500]">
          A Front-End Developer passionate about crafting captivating visual experiences.
        </p>

        <div class="text-base space-y-6">
          <p class="smart-desc !text-secondary">
            I am a Digital Designer and Front-End Developer based in Arras (France), dedicated to creating beautiful, engaging, and functional digital experiences. With a strong foundation in both design and development, I strive to deliver high-quality work that balances aesthetics and performance.
          </p>

          <p class="smart-desc !text-secondary">
            My journey began in January 2019 with a 6-month training program at PopSchool Valenciennes. During this time, I gained hands-on experience by working on various WordPress websites for DK Group, where I managed client services, updates, and internal development. This experience gave me a solid foundation in web design and development, and I quickly expanded my skill set by diving into areas like SEO optimization, plugin creation, debugging, and deployment.
          </p>

          <p class="smart-desc !text-secondary">
            In 2020, I took the leap into freelancing while working part-time to continue learning and honing my skills. I started by building simple websites, brand identities, and logos, but soon began tackling more complex projects such as e-commerce sites and booking platforms. I also got deeply involved in optimizing websites for speed, performance, and SEO, while working directly with clients to understand their needs and deliver high-quality results.
          </p>

          <p class="smart-desc !text-secondary">
            By 2022, I joined a one-year apprenticeship to refine my skills and deepen my understanding of modern web applications. This training allowed me to strengthen my knowledge of frontend technologies such as React and Vue.js, and delve into backend technologies like Node.js and Firebase. I've also gained experience with advanced JavaScript animations using GSAP, as well as responsive design practices with Tailwind CSS.
          </p>

          <p class="smart-desc !text-secondary">
            My goal is to secure a position as a Front-End Developer where I can contribute to complex, animated, and responsive projects that challenge me and push my creative boundaries. I am equally passionate about full-stack development and enjoy working on projects involving Node.js, Express, REST APIs, and Firebase.
          </p>

          <p class="smart-desc !text-secondary">
            With a keen eye for detail, a drive to keep learning, and a willingness to take on new challenges, I am ready to demonstrate my skills and contribute to your team's success. I am open to international opportunities and eager to collaborate with like-minded professionals on exciting projects.
          </p>
        </div>
        
        <LineSeparator />
        <div class="space-y-8">
          <h2 class="smart-subtitle">References</h2>
          <ul class="grid grid-cols-3 font-[500] py-4 gap-4 text-xl">
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />React</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Next.js</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Vue.js</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Node.js</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />REST APIs</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Firebase</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />MongoDB</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />JavaScript</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Vercel</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Netlify</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Git</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Responsive</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Tailwind</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Figma</li>
            <li class="flex gap-4 items-center"><img src="/images/arrow-botleft.png" width="18" height="18" />Photoshop</li>
          </ul>
        </div>
        <LineSeparator />
        <div class="mt-16 max-md:mt-14 max-xs:mt-10 space-y-8">
          <h2 class="smart-subtitle">Awards & Education</h2>
          <ul class="space-y-4 pb-4 font-[500] text-xl">
            <li class="flex justify-between gap-2">Baccalauréat STMG <b class="font-[500]">(2016)</b></li>
            <LineSeparator />
            <li class="flex justify-between gap-2">Web & Mobile Development Training at PopSchool Valenciennes <b class="font-[500]">(2019)</b></li>
            <LineSeparator />
            <li class="flex justify-between gap-2">Internship at DK Group <b class="font-[500]">(2020)</b></li>
            <LineSeparator />
            <li class="flex justify-between gap-2">Freelancer <b class="font-[500]">(2020)</b></li>
            <LineSeparator />
            <li class="flex justify-between gap-2">Apprenticeship at Toast Collectif <b class="font-[500]">(2022)</b></li>
            <LineSeparator />
          </ul>
        </div>
      </div>
    </div>
  </DefaultLayout>
  
</template>

<script setup lang="ts">
import DefaultLayout from '../components/layouts/DefaultLayout.vue'
import LineSeparator from '../components/LineSeparator.vue'
</script>

<style scoped>
.sticky {
  transition: transform 0.3s ease-out;
}
</style>
