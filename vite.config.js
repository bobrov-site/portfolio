import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const token = '6846844188:AAFVf1CLEZGQ-IsZbkYo_tQo9UrGTm9tgO0'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // proxy: {
    //   '/api' : {
    //     // target: `https://localhost:5173/portfolio/`,
    //     target: `https://api.telegram.org`,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
  base: '/portfolio/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
