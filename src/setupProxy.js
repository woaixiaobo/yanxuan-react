const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
  app.use(
    "/api",
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true, // 支持跨域
      pathRewrite: {'^/api' : ''}
    })
  )
}