<template>
  <DefaultLayout>
    <div class="flex">
      <span class="w-[60%] smart-bigtitle tracking-tighter !leading-[0.9] font-semibold">
        {{ title }}
      </span>
      <div class="w-[40%] pr-10 space-y-6">
        <span class="text-gray-600/80 text-xl leading-normal font-regular tracking-wide">
          {{ description }}
        </span>
        <div class="flex gap-4 text-white flex-wrap">
          <i 
            v-for="(tag, index) in tags" 
            :key="index"
            class="bg-secondary p-2 px-4 rounded-full"
          >
            {{ tag }}
          </i>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DefaultLayout from '../components/layouts/DefaultLayout.vue'

export default defineComponent({
  name: 'ProjectHeader',
  components: {
    DefaultLayout
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: Array as () => string[],
      default: () => []
    }
  }
})
</script>