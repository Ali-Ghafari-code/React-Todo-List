import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePWA from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'React Todo List',
        short_name: 'ReactTodo',
        description: 'A simple todo list app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },          
        ],  
      },
    }),
  ],
  base: '/React-Todo-List/',
})
