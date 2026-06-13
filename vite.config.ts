import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site: https://<user>.github.io/phi/
export default defineConfig({
  base: '/phi/',
  plugins: [react()],
})
