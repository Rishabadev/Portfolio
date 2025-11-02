import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // This 'config' object will be our base configuration
  const config = {
    plugins: [react()],
  }

  // Conditionally add the 'base' property ONLY for 'build' command
  if (command === 'build') {
    config.base = '/Portfolio/'
  }

  // Return the final config
  return config
})