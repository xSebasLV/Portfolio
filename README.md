# 🖥️ Portfolio Terminal

Portafolio interactivo con interfaz de terminal estilo macOS. Compatible con escritorio y móvil, con soporte bilingüe (inglés/español) y modo claro/oscuro.

## 📁 Estructura de Archivos

```
portfolio/
├── index.html      → Estructura HTML principal
├── styles.css      → Estilos visuales y responsive
├── data.js         → TU INFORMACIÓN PERSONAL (edita aquí)
├── commands.js     → Lógica de cada comando
├── app.js          → Manejo de eventos y estado
└── README.md       → Este archivo
```

## ✏️ Cómo Editar Tu Información

### 1. Abre `data.js`

Este es el **único archivo que necesitas editar** para cambiar tu información:

```javascript
const DATA = {
  en: {
    name: 'Tu Nombre',              // ← Cambia tu nombre
    role: 'Tu Rol · Especialidad',  // ← Tu título profesional
    location: 'Tu Ciudad',          // ← Ubicación
    
    about_paragraphs: [
      "Primera línea sobre ti...",   // ← Tu presentación
      "Segunda línea...",
    ],
    
    projects: [
      {
        name: 'Nombre Proyecto',     // ← Tus proyectos
        desc: 'Descripción...',
        stack: ['React', 'Node'],    // ← Tecnologías
        status: 'Live'               // ← Estado
      },
    ],
    
    contact: {
      Email: 'tu@email.com',         // ← Tu contacto
      GitHub: 'github.com/usuario',
    },
  },
  
  es: {
    // Misma estructura en español
  }
}
```

### 2. Guarda y Recarga

Simplemente guarda el archivo y recarga la página. ¡Eso es todo!

## 🌐 Comandos Disponibles

### En Inglés
- `help` - Ver todos los comandos
- `about` - Sobre mí
- `skills` - Habilidades técnicas
- `projects` - Proyectos destacados
- `experience` - Experiencia laboral
- `education` - Educación
- `contact` - Información de contacto
- `whoami` - Resumen rápido
- `ls` - Listar secciones
- `clear` - Limpiar terminal
- `lang` - Cambiar idioma
- `theme` - Cambiar tema

### En Español
- `ayuda` - Ver todos los comandos
- `sobre` - Sobre mí
- `habilidades` - Habilidades técnicas
- `proyectos` - Proyectos destacados
- `experiencia` - Experiencia laboral
- `educacion` - Educación
- `contacto` - Información de contacto
- `whoami` - Resumen rápido
- `ls` - Listar secciones
- `limpiar` - Limpiar terminal
- `idioma` - Cambiar idioma
- `tema` - Cambiar tema

## 🚀 Desplegar en Vercel

### Opción 1: Arrastra y Suelta (más fácil)
1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New"** → **"Project"**
3. Arrastra la carpeta `portfolio/` directamente
4. Click en **"Deploy"**
5. ¡Listo! Tu sitio estará en `tu-proyecto.vercel.app`

### Opción 2: Con Git/GitHub
1. Sube los archivos a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/tu-usuario/portfolio
   git push -u origin main
   ```

2. En Vercel:
   - Click en **"Add New"** → **"Project"**
   - Selecciona tu repositorio de GitHub
   - Framework Preset: **"Other"** (es HTML puro)
   - Click en **"Deploy"**

3. Cada vez que hagas `git push`, Vercel actualizará automáticamente

## 📱 Características

✅ **Responsive** - Se adapta perfectamente a móvil y escritorio  
✅ **Bilingüe** - Inglés y español con un click  
✅ **Modo Claro/Oscuro** - Cambia según tu preferencia  
✅ **Teclado Completo** - Flechas ↑↓ para historial, Tab para autocompletar  
✅ **Accesible** - Funciona con lectores de pantalla  
✅ **Sin Dependencias** - HTML, CSS y JS puro (sin frameworks)  

## 🎨 Personalización Avanzada

### Cambiar Colores

Edita las variables CSS en `styles.css`:

```css
:root {
  --term-green: #4ec9b0;   /* Color principal */
  --term-yellow: #dcdcaa;  /* Títulos */
  --term-blue: #569cd6;    /* Enlaces */
  /* etc... */
}
```

### Añadir Nuevos Comandos

1. En `data.js`: Agrega la información necesaria
2. En `commands.js`: Crea una nueva función `cmdTuComando()`
3. En `commands.js`: Agrega al `COMMAND_MAP`:
   ```javascript
   const COMMAND_MAP = {
     tucomando: cmdTuComando,
     // ...
   };
   ```

## 🐛 Solución de Problemas

### El sitio no se ve en móvil
- Asegúrate de tener esta línea en `index.html`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

### Los comandos no funcionan
- Abre la consola del navegador (F12) y busca errores
- Verifica que todos los archivos `.js` estén cargando correctamente

### El texto se sale de la pantalla
- Revisa que tus textos en `data.js` no sean extremadamente largos
- El CSS tiene `word-break: break-word` que debería manejar esto

## 📄 Licencia

Siéntete libre de usar este código para tu propio portafolio.

## 💡 Créditos

Diseño inspirado en terminales macOS y Visual Studio Code.
