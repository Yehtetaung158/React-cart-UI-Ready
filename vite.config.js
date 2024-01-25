import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import simpleJsonServerPlugin from 'vite-plugin-simple-json-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),simpleJsonServerPlugin({delay:3000})],
})
