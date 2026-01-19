import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
      '@layouts': path.resolve(__dirname, "./src/layouts"),
      '@shared': path.resolve(__dirname, "./src/shared"),
      '@app': path.resolve(__dirname, "./src/app")
    }
  }
})
