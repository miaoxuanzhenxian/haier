module.exports = {
    devServer: {
        // 前端程序猿 配置一个代理服务
        // 当 访问 /Product 打头的请求时 转发给 http://localhost:5000
        proxy: {
            '/product': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            },
            '/login': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            },
            '/requestPassword': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
            },
            '/navigation': {
                target: 'http://localhost:3000',
                ws: true,
                changeOrigin: true
            },
            '/order': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true
        }
    },
    lintOnSave: false // 关闭 eslint 检查
}
}