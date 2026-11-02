# Imagen base liviana de Node.js
FROM node:20-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia de archivos de dependencias
COPY package*.json ./

# Instalación de dependencias para producción
RUN npm install --omit=dev

# Copia del resto del código de la aplicación
COPY . .

# Exponer el puerto por el que corre la aplicación
EXPOSE 3000

# Variables de entorno por defecto
ENV PORT=3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
