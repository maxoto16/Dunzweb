# Dunzweb

🌐 Una aplicación web moderna construida con Vite y desplegada automáticamente en GitHub Pages.

## 🚀 Características

- ⚡ **Desarrollo ultrarrápido** con Vite
- 🎨 **Diseño responsive** que se adapta a cualquier dispositivo
- 🚀 **Despliegue automático** con GitHub Actions a GitHub Pages
- 💻 **Optimizado para rendimiento** y experiencia de usuario

## 🛠️ Desarrollo

### Requisitos previos
- Node.js (versión 18 o superior)
- npm

### Instalación
```bash
npm install
```

### Comandos disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run deploy` - Construye la aplicación (usado por GitHub Actions)

## 🌐 Despliegue

La aplicación se despliega automáticamente en GitHub Pages cuando se hace push a la rama `master`. El workflow de GitHub Actions se encarga de:

1. Instalar las dependencias
2. Construir la aplicación
3. Desplegar a GitHub Pages

## 📁 Estructura del proyecto

```
Dunzweb/
├── .github/workflows/  # Configuración de GitHub Actions
├── public/            # Archivos estáticos
├── src/              # Código fuente
│   ├── main.js       # Punto de entrada principal
│   └── style.css     # Estilos CSS
├── index.html        # Plantilla HTML
├── package.json      # Configuración del proyecto
└── vite.config.js    # Configuración de Vite
```

## 🔧 Tecnologías utilizadas

- **Vite** - Build tool y servidor de desarrollo
- **Vanilla JavaScript** - Sin frameworks, JavaScript puro
- **CSS3** - Estilos modernos con soporte para dark/light mode
- **GitHub Actions** - CI/CD para despliegue automático
- **GitHub Pages** - Hosting gratuito

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.