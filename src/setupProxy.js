const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
  app.use(
    "/api",
      createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true, // 支持跨域
        pathRewrite: {'^/api' : ''}
      })
  ),
  app.use(
    "/wangyi",
      createProxyMiddleware({
        target: 'https://m.you.163.com/topic/v1/know/navWap.json',
        changeOrigin: true, // 支持跨域
        pathRewrite: {'^/wangyi' : ''}
      })
  ),
  app.use(
    "/waterAragin",
      createProxyMiddleware({
        target: 'https://m.you.163.com/topic/v1/find/recAuto.json',
        changeOrigin: true, // 支持跨域
        pathRewrite: {'^/waterAragin' : ''}
      })
  ),
  app.use(
    "/SearchFirst",
      createProxyMiddleware({
        target: 'https://m.you.163.com/xhr/search/searchAutoComplete.json',
        changeOrigin: true, // 支持跨域
        pathRewrite: {'^/SearchFirst' : ''}
      })
  ),
  app.use(
    "/Search",
      createProxyMiddleware({
        target: 'https://m.you.163.com/xhr/search/searchAutoComplete.json',
        changeOrigin: true, // 支持跨域
        pathRewrite: {'^/Search' : ''}
      })
  )
}