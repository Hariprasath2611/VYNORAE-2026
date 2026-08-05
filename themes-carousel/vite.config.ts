import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  // Replace Node.js globals that React references but don't exist in browsers
  // when loaded as a plain <script> (IIFE format).
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env': '{}',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'ThemesCarousel',
      formats: ['iife'],
      fileName: () => 'themes-carousel.js',
    },
    rollupOptions: {
      output: {
        // Name the extracted CSS file predictably
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'themes-carousel.css'
          }
          return assetInfo.name ?? 'asset'
        },
      },
    },
    // Output to a dedicated dist folder inside jechackver1/ to avoid
    // the filename conflicting with the themes-carousel/ source directory.
    outDir: path.resolve(__dirname, '../themes-dist'),
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
