const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://189.253.10.80:7152',
  secure: false,
  changeOrigin: true
}));

module.exports = app;
