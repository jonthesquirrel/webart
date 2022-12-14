const { resolve } = require('path')

export default {
    base: "/webart/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bouncing: resolve(__dirname, 'bouncing/index.html'),
                zooming: resolve(__dirname, 'zooming/index.html')
            }
        }
    },
    server: {
        host: true
    }
}