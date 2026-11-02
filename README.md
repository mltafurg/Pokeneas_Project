# Pokédex Pokenea (Taller 02 - Arquitectura de Software)

Aplicación desarrollada en **Node.js** con **Express** y arquitectura en capas para gestionar y visualizar Pokeneas (criaturas nativas de Antioquia). Diseñada para ser empaquetada con **Docker**, publicada en **DockerHub** mediante GitHub Actions y desplegada en un cluster de **Docker Swarm** sobre instancias de **Google Cloud Platform (GCP)**.

---

## Arquitectura y Estructura de Capas

```text
pokedex-pokenea/
├── src/
│   ├── data/
│   │   └── pokeneas.data.js      # Arreglo estático con los 9 Pokémons/Pokeneas seleccionados
│   ├── controllers/
│   │   └── pokenea.controller.js # Lógica de selección aleatoria y preparación de respuesta
│   ├── routes/
│   │   └── pokenea.routes.js     # Definición de endpoints HTTP
│   ├── views/
│   │   └── pokenea.ejs           # Vista visual (imagen + frase filosófica + ID contenedor)
│   ├── utils/
│   │   └── os.util.js            # Utilidad para obtener el ID o hostname del contenedor
│   └── app.js                    # Configuración de Express, middlewares y motor EJS
├── index.js                      # Punto de entrada y arranque del servidor (listen)
├── Dockerfile                    # Configuración de empaquetado para contenedor Docker
├── .gitignore                    # Reglas de exclusión de Git
├── package.json                  # Dependencias y scripts del proyecto
└── README.md                     # Documentación técnica
```

---

## Rutas del Sistema

| Ruta | Método | Tipo | Descripción |
| :--- | :---: | :---: | :--- |
| `/api/pokenea` | `GET` | **JSON** | Retorna de forma aleatoria un Pokenea con: `id`, `nombre`, `altura`, `habilidad` y el `contenedorId` actual. |
| `/pokenea` o `/` | `GET` | **Visual (HTML/EJS)** | Muestra la tarjeta Pokédex con la `imagen` (almacenada en GCP Bucket), la `fraseFilosofica` y el `contenedorId`. |

---

## Ejecución Local

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor
```bash
npm start
```
O en modo desarrollo:
```bash
npm run dev
```

El servidor estará escuchando en `http://localhost:3000`.

---

## Ejecución con Docker

### 1. Construir la imagen localmente
```bash
docker build -t pokedex-pokenea:latest .
```

### 2. Correr el contenedor
```bash
docker run -d -p 80:3000 --name pokenea-app pokedex-pokenea:latest
```

Luego accede a:
- Visual: `http://localhost/pokenea`
- JSON: `http://localhost/api/pokenea`

Observa cómo el valor de **Docker Host / Contenedor ID** cambia al identificador único asignado por Docker.

---

## Despliegue en Google Cloud Platform (GCP) & Docker Swarm

### Nombres de Archivo para el Bucket de GCP
Al subir las imágenes a tu bucket público de Google Cloud Storage (`GCP_BUCKET_URL`), asegúrate de nombrarlas de la siguiente manera:

| # | Pokémon | Altura | Archivo en Bucket |
| :-: | :--- | :-: | :--- |
| 1 | **Charizard** | 1.70 m | `charizard.png` |
| 2 | **Pikachu** | 0.40 m | `pikachu.png` |
| 3 | **Sylveon** | 1.00 m | `sylveon.png` |
| 4 | **Mewtwo** | 2.00 m | `mewtwo.png` |
| 5 | **Pichu** | 0.30 m | `pichu.png` |
| 6 | **Jirachi** | 0.30 m | `jirachi.png` |
| 7 | **Jigglypuff** | 0.50 m | `jigglypuff.png` |
| 8 | **Lapras** | 2.50 m | `lapras.png` |
| 9 | **Greninja** | 1.50 m | `greninja.png` |

---

### Pasos de Despliegue:
1. **GCP Cloud Storage:** Sube las 9 imágenes al bucket público de Cloud Storage y actualiza la URL base si es necesario con la variable `GCP_BUCKET_URL`.
2. **DockerHub:** Construye y sube tu imagen con tu usuario:
   ```bash
   docker tag pokedex-pokenea <tu-usuario-dockerhub>/pokedex-pokenea:latest
   docker push <tu-usuario-dockerhub>/pokedex-pokenea:latest
   ```
3. **Docker Swarm en GCP:**
   - Inicia Swarm en la instancia líder:
     ```bash
     docker swarm init
     ```
   - Une las otras 3 instancias como `managers` usando el token obtenido.
   - Despliega el servicio con 10 réplicas:
     ```bash
     docker service create --name pokenea-service --replicas 10 -p 80:3000 <tu-usuario-dockerhub>/pokedex-pokenea:latest
     ```
   - Al recargar la página en la IP de la instancia, verás cómo el **ID del contenedor varía** entre las 10 réplicas gracias al balanceo de carga (Ingress Mesh) de Docker Swarm.
