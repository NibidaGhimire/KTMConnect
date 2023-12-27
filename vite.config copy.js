import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env': process.env,
  // },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  server: {
    mimeTypes: {
      'text/javascript': ['js', 'jsx']
    }
  },
 
})