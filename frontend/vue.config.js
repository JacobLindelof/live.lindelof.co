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
      '/socket.io/*': {
        target: 'https://live.lindelof.co/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}