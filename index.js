const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 Servidor Pokédex Pokenea iniciado con éxito!`);
  console.log(`📡 Puerto: ${PORT}`);
  console.log(`🌐 Vista visual:   http://localhost:${PORT}/pokenea`);
  console.log(`📄 Endpoint JSON:  http://localhost:${PORT}/api/pokenea`);
  console.log(`===============================================`);
});
