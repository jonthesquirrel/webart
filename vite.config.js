import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bouncing: resolve(__dirname, 'bouncing/index.html'),
                zooming: resolve(__dirname, 'zooming/index.html'),
                raining: resolve(__dirname, 'raining/index.html')
            }
        }
    },
    server: {
        host: true
    }
})