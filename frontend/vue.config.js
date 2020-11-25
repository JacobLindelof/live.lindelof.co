module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://live.lindelof.co/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}