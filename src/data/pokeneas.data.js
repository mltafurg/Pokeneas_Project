// URL del bucket público en Google Cloud Platform
const BUCKET_URL = process.env.GCP_BUCKET_URL || "https://storage.googleapis.com/pokeneas-api";

module.exports = [
  {
    id: 1,
    nombre: "Charizard",
    altura: 1.7,
    habilidad: "Mar llamas (Blaze)",
    imagen: `${BUCKET_URL}/charizard.png`,
    fraseFilosofica: "El que tenga miedo a quemarse, que no prenda la candela, mi so."
  },
  {
    id: 2,
    nombre: "Pikachu",
    altura: 0.4,
    habilidad: "Electricidad estática (Static)",
    imagen: `${BUCKET_URL}/pikachu.jfif`,
    fraseFilosofica: "La chispa de la vida no se apaga con agüita de río, parcero."
  },
  {
    id: 3,
    nombre: "Sylveon",
    altura: 1.0,
    habilidad: "Gran encanto (Cute Charm)",
    imagen: `${BUCKET_URL}/sylveon.jfif`,
    fraseFilosofica: "Mucho lazo fino pa' amarrar tempestades, llave."
  },
  {
    id: 4,
    nombre: "Mewtwo",
    altura: 2.0,
    habilidad: "Presión (Pressure)",
    imagen: `${BUCKET_URL}/mewtwo.jfif`,
    fraseFilosofica: "Las circunstancias en que uno nace no importan, sino qué hace uno con la oportunidad de estar vivo."
  },
  {
    id: 5,
    nombre: "Pichu",
    altura: 0.3,
    habilidad: "Electricidad estática (Static)",
    imagen: `${BUCKET_URL}/Pichu.webp`,
    fraseFilosofica: "Chiquito pero peligroso, pa' que aprenda a respetar a los menores."
  },
  {
    id: 6,
    nombre: "Jirachi",
    altura: 0.3,
    habilidad: "Dicha (Serene Grace)",
    imagen: `${BUCKET_URL}/jirachi.jfif`,
    fraseFilosofica: "No pida deseos sentado; camine a buscarlos que la suerte trasnocha."
  },
  {
    id: 7,
    nombre: "Jigglypuff",
    altura: 0.5,
    habilidad: "Gran encanto (Cute Charm)",
    imagen: `${BUCKET_URL}/JJigglypuff.png`,
    fraseFilosofica: "El que se duerme en los laureles amanece rayado en la esquina."
  },
  {
    id: 8,
    nombre: "Lapras",
    altura: 2.5,
    habilidad: "Absorbe agua (Water Absorb)",
    imagen: `${BUCKET_URL}/lapras.png`,
    fraseFilosofica: "Navegar con la frente en alto, que las mareas bravas no tumban al que sabe flotar."
  },
  {
    id: 9,
    nombre: "Greninja",
    altura: 1.5,
    habilidad: "Torrente (Torrent)",
    imagen: `${BUCKET_URL}/greninja.jfif`,
    fraseFilosofica: "Moverse en silencio para que los pasos hablen cuando el golpe sea certero."
  }
];
