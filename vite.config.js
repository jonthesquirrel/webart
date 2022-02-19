const { resolve } = require('path')

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bounce: resolve(__dirname, 'bounce/index.html')
            }
        }
    },
    server: {
        host: true
    }
}