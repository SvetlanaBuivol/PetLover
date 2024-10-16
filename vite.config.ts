import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PetLover/',
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
    },
  },
})
