import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src'),
      '@theme': join(__dirname, './src/theme'),
      '@layer': join(__dirname, './src/layer')
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
      external: ['react', 'react-dom', 'katex', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          katex: 'katex',
          ReactDOM: 'react-dom'
        }
      }
    }
  },
  plugins: [react()]
})
