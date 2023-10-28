import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
            '@': './src/components',
        },
    },  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}'],
        cleanupOutdatedCaches: true
     },
     manifest: {
      theme_color : "#7F00FF",
      background_color : "#7F00FF",
      display : "browser",
      scope : "/",
      start_url : "/",
      name : "Linker",
      short_name : "Linker",
      description : "A simple link and query string creator",
      icons: [
        { 
            src: '/public/img/icon-192x192.png',
            size: '192x192',
            type: 'image/png' 
        },
        {
          src: '/public/img/icon-256x256.png',
          size: '256x256',
          type: 'image/png' 
        },
        {
          src: '/public/img/icon-384x384.png',
          size: '384x384',
          type: 'image/png' 
        },
        {
          src: '/public/img/icon-512x512.png',
          size: '512x512',
          type: 'image/png' 
        },

      ]
      }
    })
  ],

  
})
