# Sprint5y6Grupo4
Integrantes:

.Norry Máximo

Buenas primero queria pedir disculpas por los commits pasados de fecha, es que estuve muy complicado conn la facultad y tuve que hacerlo solo porque no hubo predisposición de mis compañeros en hacer el trabajo(tambien complicados con sus carreras).
La verdad no me gustaria desaprovechar esta gran opurtunidad que nos dieron y prometo presentar el proximo trabajo en tiempo y forma, desde ya gracias y disculpas de vuelta.

Proyecto Full Stack con **React** (frontend) y **Node.js/Express** (backend) conectado a **MongoDB Atlas** para la gestión de productos de la muebleria "Hermanos Jota.

---

##  Enlaces a los sitios desplegados

- **Frontend (Vercel)**: [https://sprint5y6.vercel.app](https://sprint5y6.vercel.app)  
- **Backend (Render)**: [https://sprint5y6grupo4.onrender.com](https://sprint5y6grupo4.onrender.com)  

---

##  Configuración local

### 1. Clonar el repositorio
git clone https://github.com/MaximoNorry/Sprint5y6Grupo4.git
cd Sprint5y6Grupo4
2. Backend
Copiar código
cd backend
npm install
Crear un archivo .env dentro de backend con las siguientes variables:

Copiar código
MONGO_URI=<tu_mongo_uri>
PORT=4000
MONGO_URI: URI de conexión a MongoDB Atlas.

PORT: puerto donde correrá el backend (opcional, por defecto 4000).

Iniciar el backend:

Copiar código
node server.js
El backend estará disponible en http://localhost:4000.

3. Frontend
Copiar código
cd ../client
npm install
Crear un archivo .env dentro de client:

Copiar código
VITE_BACKEND_URL=http://localhost:4000
Iniciar el frontend:

Copiar código
npm run dev
El frontend estará disponible en http://localhost:5173.

 Uso
Navegar por la aplicación para ver, crear, actualizar y eliminar productos.

Las imágenes se cargan desde /backend/public/images.

Para producción, actualizar VITE_BACKEND_URL con la URL del backend desplegado en Render.

 Notas
Asegurarse de que el backend esté corriendo antes del frontend.

Se habilitó CORS en el backend para permitir peticiones desde el frontend desplegado en Vercel.
