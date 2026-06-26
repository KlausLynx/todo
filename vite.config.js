import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite";
import { visualizer } from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),visualizer({open: true}), tailwindcss(), flowbiteReact()],
    // base: '/todo/',
    build: {
      outDir: 'docs'  
    }
})