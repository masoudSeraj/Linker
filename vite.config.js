import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      '@': './src/components',
    },
  },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
      },
      manifest: {
        theme_color: "#7F00FF",
        background_color: "#7F00FF",
        display: "browser",
        scope: "/",
        start_url: "/",
        name: "Linker",
        short_name: "Linker",
        description: "A simple link and query string creator",
        icons: [
          {
            src: 'img/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'img/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'img/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'img/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },

        ]
      }
    })
  ],


})
