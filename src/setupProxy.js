const createProxyMiddleware  = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'https://shared-piano-backend.herokuapp.com',
      changeOrigin: true,
    })
  );
};