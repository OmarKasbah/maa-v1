import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/maa-v1/',  // Add this line to configure the correct base path
  plugins: [react()],
})
