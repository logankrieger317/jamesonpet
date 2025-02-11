import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine if we're building for staging
const isStaging = process.env.STAGING === 'true'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: isStaging ? 'dist-staging' : 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.png')) {
            return '[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
