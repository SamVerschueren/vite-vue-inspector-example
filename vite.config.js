import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspector from "vite-plugin-vue-inspector"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  Inspector()]
})
