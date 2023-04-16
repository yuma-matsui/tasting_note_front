/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/__/auth/*',
    createProxyMiddleware({
      target: `https://${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}/__/auth/*`,
      changeOrigin: true
    })
  )
}
