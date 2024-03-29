import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from 'path'

export default defineConfig({
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/effect/scss/index.scss";`
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@theme': join(__dirname, './src/theme')
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})
