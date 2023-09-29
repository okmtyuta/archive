import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { join, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@theme': join(__dirname, './src/theme'),
      '@src': resolve(__dirname, 'src')
    }
  },
  plugins: [react()]
})
