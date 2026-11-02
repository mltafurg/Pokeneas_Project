const pokeneas = require('../data/pokeneas.data');
const { getContainerId } = require('../utils/os.util');

// Obtener un Pokenea aleatorio
function getRandomPokenea() {
  const index = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[index];
}

/**
 * Ruta 1: Retorna JSON con id, nombre, altura, habilidad y contenedorId.
 * - Si se pasa un id por parámetro (/api/pokenea/:id) o query (?id=...), retorna ese Pokenea específico.
 * - Si se ingresa a la URL sin ID (/api/pokenea), retorna uno aleatorio.
 */
function getPokeneaJson(req, res) {
  const targetId = req.params.id || req.query.id;
  let pokenea;

  if (targetId) {
    pokenea = pokeneas.find(p => p.id === parseInt(targetId, 10));
  }

  // Si no se proporcionó ID o no existe en la lista, seleccionamos uno aleatorio
  if (!pokenea) {
    pokenea = getRandomPokenea();
  }

  return res.json({
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad,
    contenedorId: getContainerId()
  });
}

// Ruta 2: Renderiza vista con imagen, frase filosófica, contenedorId y el ID del Pokenea
function renderPokeneaView(req, res) {
  const pokenea = getRandomPokenea();
  return res.render('pokenea', {
    id: pokenea.id,
    nombre: pokenea.nombre,
    imagen: pokenea.imagen,
    fraseFilosofica: pokenea.fraseFilosofica,
    contenedorId: getContainerId()
  });
}

module.exports = {
  getPokeneaJson,
  renderPokeneaView
};
