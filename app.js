/* ═══════════════════════════════════════════════════════════
   APP PRINCIPAL
   
   Este archivo maneja:
   - Estado de la aplicación (idioma, tema)
   - Eventos del teclado
   - Ejecución de comandos
   - Historial de comandos
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   ESTADO GLOBAL
   ───────────────────────────────────────────────────────── */

// Idioma actual ('en' o 'es')
let lang = 'en';

// Modo oscuro activado (true) o modo claro (false)
let darkMode = true;

// Historial de comandos ejecutados
let cmdHistory = [];

// Índice actual en el historial (para navegar con flechas)
let histIdx = -1;

/* ─────────────────────────────────────────────────────────
   REFERENCIAS A ELEMENTOS DEL DOM
   ───────────────────────────────────────────────────────── */

// Área donde se muestran los resultados
const output = document.getElementById('terminal-output');

// Input donde el usuario escribe comandos
const input = document.getElementById('cmd-input');

// Barra de hints en la parte inferior
const hintBar = document.getElementById('hint-bar');

// Contenedor principal del portafolio
const portfolio = document.getElementById('portfolio');

/* ─────────────────────────────────────────────────────────
   TEXTOS DE AYUDA (hints)
   ───────────────────────────────────────────────────────── */
const HINTS = {
  en: 'try: help · about · skills · projects · experience · education · contact · clear',
  es: 'prueba: ayuda · sobre · habilidades · proyectos · experiencia · educacion · contacto · limpiar',
};

/* ═══════════════════════════════════════════════════════════
   FUNCIONES DE CONFIGURACIÓN
   ═══════════════════════════════════════════════════════════ */

/**
 * Cambia el idioma entre inglés y español
 */
function toggleLang() {
  // Cambiar idioma
  lang = lang === 'en' ? 'es' : 'en';
  
  // Actualizar etiqueta del botón
  document.getElementById('lang-label').textContent = lang.toUpperCase();
  
  // Actualizar hints
  hintBar.textContent = HINTS[lang];
  
  // Mostrar confirmación
  const msg = lang === 'en' 
    ? '→ Language set to English' 
    : '→ Idioma cambiado a Español';
  addLine(msg, 'c-green');
  
  scroll();
}

/**
 * Cambia entre modo oscuro y claro
 */
function toggleTheme() {
  // Invertir estado del tema
  darkMode = !darkMode;
  
  // Aplicar/quitar clase 'light-mode'
  document.body.classList.toggle('light-mode', !darkMode);
  portfolio.classList.toggle('light-mode', !darkMode);
  
  // Actualizar etiqueta del botón
  const label = darkMode ? 'Light' : 'Dark';
  document.getElementById('theme-label').textContent = label;
}

/* ═══════════════════════════════════════════════════════════
   EJECUCIÓN DE COMANDOS
   ═══════════════════════════════════════════════════════════ */

/**
 * Ejecuta un comando ingresado por el usuario
 * @param {string} raw - Texto ingresado (puede tener espacios)
 */
function runCmd(raw) {
  // Limpiar y convertir a minúsculas
  const cmd = raw.trim().toLowerCase();
  
  // Si está vacío, no hacer nada
  if (!cmd) return;
  
  // Agregar al historial
  cmdHistory.unshift(cmd);
  histIdx = -1;
  
  // Mostrar el comando ejecutado
  printPrompt(cmd);
  
  /* ── COMANDOS ESPECIALES ── */
  
  // CLEAR - Limpiar pantalla
  if (cmd === 'clear' || cmd === 'limpiar') {
    output.innerHTML = '';
    return;
  }
  
  // LANG - Cambiar idioma
  if (cmd === 'lang' || cmd === 'idioma') {
    toggleLang();
    return;
  }
  
  // THEME - Cambiar tema
  if (cmd === 'theme' || cmd === 'tema') {
    toggleTheme();
    const msg = darkMode 
      ? '→ Dark mode enabled' 
      : '→ Modo claro activado';
    addLine(msg, 'c-green');
    scroll();
    return;
  }
  
  /* ── COMANDOS NORMALES ── */
  
  // Buscar comando en el mapa
  if (COMMAND_MAP[cmd]) {
    addEmpty();
    COMMAND_MAP[cmd]();  // Ejecutar la función del comando
    addEmpty();
  } else {
    // Comando no encontrado
    const msg = lang === 'en'
      ? `bash: command not found: ${cmd}`
      : `bash: comando no encontrado: ${cmd}`;
    addLine(msg, 'c-red');
  }
  
  // Hacer scroll al final
  scroll();
}

/* ═══════════════════════════════════════════════════════════
   MANEJO DE EVENTOS DEL TECLADO
   ═══════════════════════════════════════════════════════════ */

/**
 * Detecta teclas especiales en el input
 */
input.addEventListener('keydown', (e) => {
  
  /* ── ENTER: Ejecutar comando ── */
  if (e.key === 'Enter') {
    const value = input.value;
    input.value = '';  // Limpiar input
    runCmd(value);     // Ejecutar
  }
  
  /* ── FLECHA ARRIBA: Comando anterior ── */
  else if (e.key === 'ArrowUp') {
    e.preventDefault();  // Evitar que el cursor se mueva
    
    if (histIdx < cmdHistory.length - 1) {
      histIdx++;
      input.value = cmdHistory[histIdx];
    }
  }
  
  /* ── FLECHA ABAJO: Comando siguiente ── */
  else if (e.key === 'ArrowDown') {
    e.preventDefault();
    
    if (histIdx > 0) {
      histIdx--;
      input.value = cmdHistory[histIdx];
    } else {
      histIdx = -1;
      input.value = '';
    }
  }
  
  /* ── TAB: Autocompletar ── */
  else if (e.key === 'Tab') {
    e.preventDefault();
    
    const value = input.value.toLowerCase();
    
    // Lista de todos los comandos disponibles
    const allCommands = [
      ...Object.keys(COMMAND_MAP),
      'clear', 'limpiar', 'lang', 'idioma', 'theme', 'tema'
    ];
    
    // Buscar un comando que empiece con lo escrito
    const match = allCommands.find(cmd => 
      cmd.startsWith(value) && cmd !== value
    );
    
    // Si encuentra coincidencia, autocompletar
    if (match) {
      input.value = match;
    }
  }
});

/* ═══════════════════════════════════════════════════════════
   EVENTOS ADICIONALES
   ═══════════════════════════════════════════════════════════ */

/**
 * Al hacer clic en cualquier parte, enfocar el input
 * (para facilitar escribir sin hacer clic en el input)
 */
document.addEventListener('click', () => {
  input.focus();
});

/* ═══════════════════════════════════════════════════════════
   INICIALIZACIÓN
   ═══════════════════════════════════════════════════════════ */

/**
 * Se ejecuta cuando la página termina de cargar
 */
window.addEventListener('DOMContentLoaded', () => {
  // Mostrar mensaje de bienvenida
  cmdWelcome();
  addEmpty();
  
  // Enfocar el input automáticamente
  setTimeout(() => {
    input.focus();
  }, 100);
});

/* ═══════════════════════════════════════════════════════════
   SOPORTE PARA GESTOS TÁCTILES (MÓVIL)
   ═══════════════════════════════════════════════════════════ */

/**
 * Detectar si es un dispositivo táctil
 */
const isTouchDevice = ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0);

if (isTouchDevice) {
  // En móvil, enfocar el input al tocar la terminal
  const terminalBody = document.getElementById('terminal-output');
  
  terminalBody.addEventListener('touchstart', (e) => {
    // Solo si no se está tocando el input directamente
    if (e.target !== input) {
      input.focus();
    }
  });
  
  // Prevenir zoom al hacer doble tap en el input
  input.addEventListener('touchend', (e) => {
    e.preventDefault();
    input.focus();
  });
}

/* ═══════════════════════════════════════════════════════════
   ACCESIBILIDAD
   ═══════════════════════════════════════════════════════════ */

/**
 * Permitir navegación con teclado en los botones
 */
document.querySelectorAll('.ctrl-btn').forEach(btn => {
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

/* ═══════════════════════════════════════════════════════════
   DETECCIÓN DE REDIMENSIONAMIENTO (para móvil)
   ═══════════════════════════════════════════════════════════ */

/**
 * Ajustar altura de la terminal cuando cambia el tamaño de ventana
 * (útil cuando aparece/desaparece el teclado en móvil)
 */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    scroll();  // Mantener scroll al final después de redimensionar
  }, 250);
});
