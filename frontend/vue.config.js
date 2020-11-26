module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://live.lindelof.co/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}