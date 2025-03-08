import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
   
    
  
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'] as string[]
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'gsap': ['gsap'],
          'lucide': ['lucide-vue-next'],
          'ui': ['@iconify/vue']
        }
      }
    },
    chunkSizeWarningLimit: 1600,
    sourcemap: true,
    cssCodeSplit: true
  }
}) as UserConfig