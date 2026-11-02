const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokenea.controller');

// Ruta 1: JSON con id, nombre, altura, habilidad y contenedorId
// Permite consulta aleatoria o por ID específico
router.get('/api/pokenea/:id', pokeneaController.getPokeneaJson);
router.get('/api/pokenea', pokeneaController.getPokeneaJson);
router.get('/pokenea/json/:id', pokeneaController.getPokeneaJson);
router.get('/pokenea/json', pokeneaController.getPokeneaJson);

// Ruta 2: Vista visual (HTML/EJS) con imagen, frase filosófica y contenedorId
router.get('/pokenea', pokeneaController.renderPokeneaView);
router.get('/pokenea/view', pokeneaController.renderPokeneaView);

// Ruta raíz: muestra la vista visual por defecto
router.get('/', pokeneaController.renderPokeneaView);

module.exports = router;
