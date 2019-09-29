module.exports = {
    devServer: {
        proxy: {
            '/navigation': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            }
        }
    }
}