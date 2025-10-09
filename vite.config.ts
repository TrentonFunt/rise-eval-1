import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress the eval warning from lottie-web
        if (warning.code === 'EVAL' && warning.id?.includes('lottie')) {
          return
        }
        warn(warning)
      }
    }
  }
})
