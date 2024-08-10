const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

// Configuración del proxy para todas las solicitudes a /api
app.use('/api', createProxyMiddleware({
  target: 'https://[2806:2f0:6020:f87f::656]:7152',  // Usar la dirección IPv6 para la API siempre
  secure: false,
  changeOrigin: true,
  logLevel: 'debug'  // Mantener logging detallado para depuración
}));

// Mensaje para indicar que el servidor está corriendo
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
