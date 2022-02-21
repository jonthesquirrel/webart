const { resolve } = require('path')

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bouncing: resolve(__dirname, 'bouncing/index.html'),
                zooming: resolve(__dirname, 'zooming/index.html'),
                falling: resolve(__dirname, 'falling/index.html')
            }
        }
    },
    server: {
        host: true
    }
}