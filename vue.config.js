module.exports = {
  outputDir: './build',
  // publicPath: './'
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000/',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
}
