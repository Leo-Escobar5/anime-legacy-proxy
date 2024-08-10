const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://[2806:2f0:6020:f87f::656]:7152',
  secure: false,
  changeOrigin: true
}));

module.exports = app;
