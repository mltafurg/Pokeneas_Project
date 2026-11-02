// URL del bucket público en Google Cloud Platform
const BUCKET_URL = process.env.GCP_BUCKET_URL || "https://storage.googleapis.com/pokeneas-api";

module.exports = [
  {
    id: 1,
    nombre: "Charizard",
    altura: 1.7,
    habilidad: "Mar llamas (Blaze)",
    imagen: `${BUCKET_URL}/charizard.png`,
    fraseFilosofica: "Un gran poder conlleva una gran responsabilidad."
  },
  {
    id: 2,
    nombre: "Pikachu",
    altura: 0.4,
    habilidad: "Electricidad estática (Static)",
    imagen: `${BUCKET_URL}/pikachu.jfif`,
    fraseFilosofica: "No son nuestras habilidades las que muestran lo que realmente somos, son nuestras elecciones."
  },
  {
    id: 3,
    nombre: "Sylveon",
    altura: 1.0,
    habilidad: "Gran encanto (Cute Charm)",
    imagen: `${BUCKET_URL}/sylveon.jfif`,
    fraseFilosofica: "En los momentos más oscuros, la esperanza es algo que uno se da a sí mismo. Ese es el significado de la fuerza interior."
  },
  {
    id: 4,
    nombre: "Mewtwo",
    altura: 2.0,
    habilidad: "Presión (Pressure)",
    imagen: `${BUCKET_URL}/mewtwo.jfif`,
    fraseFilosofica: "El fracaso no es más que una oportunidad para volver a empezar. Solo que esta vez, con más sensatez."
  },
  {
    id: 5,
    nombre: "Pichu",
    altura: 0.3,
    habilidad: "Electricidad estática (Static)",
    imagen: `${BUCKET_URL}/Pichu.webp`,
    fraseFilosofica: "El verdadero poder no radica en la fuerza bruta, sino en la voluntad de proteger a quienes amas."
  },
  {
    id: 6,
    nombre: "Jirachi",
    altura: 0.3,
    habilidad: "Dicha (Serene Grace)",
    imagen: `${BUCKET_URL}/jirachi.jfif`,
    fraseFilosofica: "¿Estás preocupado por lo que fue? ¿Y lo que va a ser? Hay un dicho. El ayer es historia, el mañana es un misterio, pero el hoy es un obsequio; por eso se llama presente"
  },
  {
    id: 7,
    nombre: "Jigglypuff",
    altura: 0.5,
    habilidad: "Gran encanto (Cute Charm)",
    imagen: `${BUCKET_URL}/JJigglypuff.png`,
    fraseFilosofica: "Recuerda, en nuestra vida nosotros no somos lectores, sino escritores."
  },
  {
    id: 8,
    nombre: "Lapras",
    altura: 2.5,
    habilidad: "Absorbe agua (Water Absorb)",
    imagen: `${BUCKET_URL}/lapras.png`,
    fraseFilosofica: "Si no puedes hacer algo, no lo hagas."
  },
  {
    id: 9,
    nombre: "Greninja",
    altura: 1.5,
    habilidad: "Torrente (Torrent)",
    imagen: `${BUCKET_URL}/greninja.jfif`,
    fraseFilosofica: "Incluso si fueses a desviarte del camino correcto, nunca te desvíes de lo que ha decidido tu corazón."
  }
];
