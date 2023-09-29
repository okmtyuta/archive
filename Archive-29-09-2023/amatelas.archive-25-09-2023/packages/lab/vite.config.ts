import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve, join } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      // '@src/': join(__dirname, './src/'),
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
      external: [
        'react',
        'react-dom',
        'katex',
        'react-markdown',
        'rehype-katex',
        'remark-gfm',
        'remark-math'
      ],
      output: {
        globals: {
          react: 'React',
          'react-markdown': 'ReactMarkdown',
          'remark-math': 'remarkMath',
          'rehype-katex': 'rehypeKatex',
          'remark-gfm': 'remarkGfm'
        }
      }
    }
  },
  plugins: [react()]
})
