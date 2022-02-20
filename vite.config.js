const { resolve } = require('path')

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bouncing: resolve(__dirname, 'bouncing/index.html')
            }
        }
    },
    server: {
        host: true
    }
}