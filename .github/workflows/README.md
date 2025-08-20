# GitHub Actions Workflows

## Deploy to GitHub Pages

Este workflow (`deploy.yml`) se encarga del despliegue automático de la aplicación Dunzweb a GitHub Pages.

### Características:

- **Trigger automático**: Se ejecuta cuando se hace push a las ramas `master` o `main`
- **Trigger manual**: Se puede ejecutar manualmente usando `workflow_dispatch`
- **Permisos**: Configurado con los permisos necesarios para GitHub Pages
- **Build process**: 
  - Instala dependencias con `npm ci`
  - Construye la aplicación con `npm run build`
  - Sube el directorio `dist` como artefacto
  - Despliega a GitHub Pages

### Configuración:

La aplicación está configurada para desplegarse en GitHub Pages con:
- Base path: `/Dunzweb/` (configurado en `vite.config.js`)
- Output directory: `dist`
- Node.js version: 18

### Para ejecutar manualmente:

1. Ve a la pestaña "Actions" en GitHub
2. Selecciona "Deploy to GitHub Pages"
3. Haz clic en "Run workflow"