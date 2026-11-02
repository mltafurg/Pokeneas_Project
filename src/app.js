const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokenea.routes');

const app = express();

// Configuración de motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares estándar
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de la aplicación
app.use('/', pokeneaRoutes);

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Ruta no encontrada. Rutas válidas: GET /api/pokenea o GET /pokenea'
  });
});

module.exports = app;
