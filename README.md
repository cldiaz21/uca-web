# UCA Asesorías Ambientales - Sitio Web Corporativo

Sitio web profesional para UCA Asesorías Ambientales, especialistas en retiro, gestión y remediación de materiales con asbesto.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Fondos con degradados y efectos visuales
- 🧭 Navegación fluida con React Router
- 📱 Totalmente responsive (móvil, tablet, desktop)
- 🎯 Secciones claramente diferenciadas
- 📧 Formulario de contacto integrado
- 🖼️ Carrusel de clientes con navegación manual
- ⚡ Optimizado para rendimiento

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/cldiaz21/uca-web.git
cd uca-web
```

2. Instala las dependencias:
```bash
npm install --legacy-peer-deps
```

3. Copia el archivo de configuración:
```bash
cp .env.example .env
```

## 🎮 Scripts Disponibles

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm test`

Ejecuta el runner de pruebas en modo interactivo.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Optimiza el build para el mejor rendimiento.

## 📁 Estructura del Proyecto

```
uca-web/
├── public/              # Archivos públicos
├── src/
│   ├── assets/         # Imágenes y recursos
│   ├── components/     # Componentes React
│   ├── styles/         # Archivos CSS
│   ├── App.js         # Componente principal
│   └── index.js       # Punto de entrada
├── .env.example       # Plantilla de configuración
├── .gitignore         # Archivos ignorados por Git
└── package.json       # Dependencias del proyecto
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Framework principal
- **React Router DOM** - Navegación entre páginas
- **React Slick** - Carruseles
- **Lucide React** - Iconos modernos
- **Bootstrap 5** - Framework CSS
- **React Bootstrap** - Componentes de Bootstrap para React

## 🌐 Despliegue

El proyecto está configurado para desplegarse automáticamente en Vercel cuando se hace push a la rama `main`.

### Variables de Entorno en Vercel

Asegúrate de configurar las siguientes variables de entorno en Vercel:

```
SKIP_PREFLIGHT_CHECK=true
FAST_REFRESH=true
GENERATE_SOURCEMAP=false
```

## 🔒 Seguridad

- El archivo `.env` está excluido del repositorio
- Las credenciales sensibles deben configurarse en el entorno de producción
- Se recomienda usar `.env.example` como plantilla

## 📝 Licencia

© 2025 UCA Asesorías Ambientales. Todos los derechos reservados.

## 👥 Contacto

**UCA Asesorías Ambientales**  
Especialistas en gestión ambiental y manejo de residuos peligrosos

---

Desarrollado con ❤️ por el equipo de UCA

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
