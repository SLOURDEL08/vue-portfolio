<template>
    <footer class="text-white text-center bg-secondary p-16 py-20">
        <div class="grid grid-rows-[auto_1fr] gap-36 max-md:gap-20">
            <div class="flex flex-col gap-14 max-md:gap-10">
                <div class="h-[200px] flex flex-col justify-center">
                    <p class="text-3xl mb-4 max-md:text-xl font-[500]">(Connect)</p>
                    <span class="smart-bigtitle leading-none !text-white font-semibold">Let's Talk</span>
                </div>
                <Button class="w-max mx-auto bg-white text-secondary"> 
                    <span v-hover-slide class="inline-block py-0 -my-3">Get in Touch</span>
                </Button>
            </div>

            <div class="grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-16">
    <div class="font-[500] text-xl flex flex-col gap-4 items-start">
        <span class="text-lg text-white/50 mb-4">(Pages)</span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Home</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">About</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Work</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Contact</span>
        </span>
        <Button class="mt-4 bg-white text-secondary">
            <span v-hover-slide class="inline-block py-0 -my-3">My Project</span>
        </Button>
    </div>
    
    <div class="font-[500] text-xl flex flex-col gap-4 items-start">
        <span class="text-lg text-white/50 mb-4">(Pages)</span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Work</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Work Single</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Blog</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Shop Single</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Work Single</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Blog Single</span>
        </span>
    </div>
    
    <div class="font-[500] text-xl flex flex-col gap-4 items-start">
        <span class="text-lg text-white/50 mb-4">(Pages)</span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">404 error</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Password</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Guide</span>
        </span>
        <span class="underline-effect">
            <span class="underline-effect-wrapper">Contact</span>
        </span>
    </div>
</div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    min-height: 100vh;
    contain: layout style;
}

.smart-bigtitle {
    height: min-content;
}
</style>