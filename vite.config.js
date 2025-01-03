import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/parallax/',
  build: {
    outDir: 'docs',
    emptyOutDir: true, // also necessary
  }
})
