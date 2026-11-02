const os = require('os');

/**
 * Obtiene el ID del contenedor o hostname del sistema operativo.
 * En entornos Docker, el hostname asignado por defecto corresponde al Container ID.
 * @returns {string} ID del contenedor / hostname
 */
function getContainerId() {
  return process.env.HOSTNAME || os.hostname() || 'localhost';
}

module.exports = {
  getContainerId
};
