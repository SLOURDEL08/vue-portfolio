import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { UserConfig } from 'vite'
import imagemin from 'vite-plugin-imagemin'
import webpGenerator from 'vite-plugin-webp-generator'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    webpGenerator({
      quality: 80,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,avif}'],
      },
    }),
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