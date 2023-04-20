const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/__/auth/',
    createProxyMiddleware({
      target: `https://tasting-note.com/`,
      changeOrigin: true
    })
  )
}
