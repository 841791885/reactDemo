const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.8.173',
        // target: 'http://192.168.40.133:8001',
        pathRewrite: {
          '^/api': '',
        },
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
