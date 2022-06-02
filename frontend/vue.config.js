module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true
      },
      '^/ws': {
        target: 'http://127.0.0.1:8000/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}