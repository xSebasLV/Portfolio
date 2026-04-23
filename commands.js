/* ═══════════════════════════════════════════════════════════
   FUNCIONES DE COMANDOS
   
   Cada función aquí representa un comando que el usuario puede
   ejecutar en la terminal. Cada función agrega contenido al
   área de output usando las funciones helper.
   ═══════════════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════════════
   HELPERS - Funciones auxiliares para crear elementos
   ═══════════════════════════════════════════════════════════ */

/**
 * Crea un elemento HTML
 * @param {string} tag - Tipo de elemento (div, span, etc.)
 * @param {string} cls - Clases CSS
 * @param {string} text - Texto del elemento
 * @returns {HTMLElement}
 */
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

/**
 * Agrega una línea de texto al output
 * @param {string} content - Contenido a mostrar
 * @param {string} cls - Clases CSS para colorear
 */
function addLine(content, cls) {
  const div = el('div', 'output-line ' + (cls || ''));
  
  if (content === '') {
    // Línea vacía (espacio)
    div.classList.add('empty');
  } else if (typeof content === 'string') {
    // Línea de texto simple
    const span = el('span', cls || '');
    span.textContent = content;
    div.appendChild(span);
  } else {
    // Elemento HTML complejo
    div.appendChild(content);
  }
  
  output.appendChild(div);
}

/**
 * Agrega una línea vacía (espacio)
 */
function addEmpty() {
  addLine('', 'empty');
}

/**
 * Agrega un grupo de habilidades con badges
 * @param {string} label - Nombre de la categoría (Frontend, Backend, etc.)
 * @param {Array} items - Array de habilidades
 */
function addSkillGroup(label, items) {
  addLine('  ' + label, 'c-yellow c-bold');
  
  const wrap = el('div');
  wrap.style.marginBottom = '4px';
  
  items.forEach(skill => {
    const badge = el('span', 'skill-badge', skill);
    wrap.appendChild(badge);
  });
  
  output.appendChild(wrap);
}

/**
 * Agrega una tarjeta de proyecto
 * @param {Object} project - Objeto con name, desc, stack, status
 */
function addProject(project) {
  const card = el('div', 'project-item');
  
  // Nombre y estado del proyecto
  const nameRow = el('span');
  nameRow.innerHTML = `<span class="project-name">${project.name}</span><span class="project-status">${project.status}</span>`;
  card.appendChild(nameRow);
  
  // Descripción
  card.appendChild(el('div', 'project-desc', project.desc));
  
  // Stack tecnológico
  const stackWrap = el('div');
  stackWrap.style.marginTop = '4px';
  project.stack.forEach(tech => {
    stackWrap.appendChild(el('span', 'skill-badge', tech));
  });
  card.appendChild(stackWrap);
  
  output.appendChild(card);
}

/**
 * Muestra el prompt con el comando ejecutado
 * @param {string} cmd - Comando escrito por el usuario
 */
function printPrompt(cmd) {
  const wrap = el('div', 'prompt-line');
  wrap.innerHTML = `
    <span class="prompt-user">visitor</span>
    <span class="prompt-at">@</span>
    <span class="prompt-host">portfolio</span>
    <span class="prompt-path">:~</span>
    <span class="prompt-sym">$</span>
    <span style="color:var(--term-text);margin-left:4px">${cmd}</span>
  `;
  output.appendChild(wrap);
}

/**
 * Hace scroll al final del output
 */
function scroll() {
  output.scrollTop = output.scrollHeight;
}

/* ═══════════════════════════════════════════════════════════
   COMANDOS - Funciones que ejecutan cada comando
   ═══════════════════════════════════════════════════════════ */

/**
 * WELCOME - Mensaje de bienvenida (se ejecuta al cargar)
 */
function cmdWelcome() {
  // Logo ASCII art
  const art = [
    '  ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ ',
    '  ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗',
    '  ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║',
    '  ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║',
    '  ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝',
    '  ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ ',
  ];
  
  art.forEach(line => {
    const div = el('div', 'output-line');
    div.appendChild(el('span', 'ascii-art', line));
    output.appendChild(div);
  });
  
  addEmpty();
  
  const d = DATA[lang];
  
  // Mensaje de bienvenida
  const welcomeMsg = lang === 'en' 
    ? 'Welcome to my interactive portfolio terminal v2.0'
    : 'Bienvenido a mi portafolio terminal interactivo v2.0';
  addLine(welcomeMsg, 'c-green c-bold');
  
  // Rol
  addLine(d.role, 'c-yellow');
  
  addEmpty();
  
  // Hint inicial
  const hint = lang === 'en'
    ? "Type 'help' to see all available commands."
    : "Escribe 'ayuda' para ver todos los comandos.";
  addLine(hint, 'c-gray');
}

/**
 * HELP - Muestra todos los comandos disponibles
 */
function cmdHelp() {
  if (lang === 'en') {
    addLine('Available commands:', 'c-yellow c-bold');
    addEmpty();
    
    // Comandos principales
    const mainCmds = [
      ['about',      'Who I am'],
      ['skills',     'Technologies & tools'],
      ['projects',   'My work'],
      ['experience', 'Work history'],
      ['education',  'Academic background'],
      ['contact',    'Get in touch']
    ];
    
    mainCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-green');
    });
    
    addEmpty();
    
    // Comandos de navegación
    const navCmds = [
      ['whoami', 'Quick summary'],
      ['ls',     'List sections'],
      ['clear',  'Clear terminal']
    ];
    
    navCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-blue');
    });
    
    addEmpty();
    
    // Comandos de configuración
    const configCmds = [
      ['lang',  'Toggle language (EN/ES)'],
      ['theme', 'Toggle light/dark mode']
    ];
    
    configCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-pink');
    });
    
  } else {
    // Versión en español
    addLine('Comandos disponibles:', 'c-yellow c-bold');
    addEmpty();
    
    const mainCmds = [
      ['sobre',        'Quién soy'],
      ['habilidades',  'Tecnologías y herramientas'],
      ['proyectos',    'Mi trabajo'],
      ['experiencia',  'Historial laboral'],
      ['educacion',    'Formación académica'],
      ['contacto',     'Ponte en contacto']
    ];
    
    mainCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-green');
    });
    
    addEmpty();
    
    const navCmds = [
      ['whoami',  'Resumen rápido'],
      ['ls',      'Listar secciones'],
      ['limpiar', 'Limpiar terminal']
    ];
    
    navCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-blue');
    });
    
    addEmpty();
    
    const configCmds = [
      ['idioma', 'Cambiar idioma (ES/EN)'],
      ['tema',   'Cambiar modo claro/oscuro']
    ];
    
    configCmds.forEach(([cmd, desc]) => {
      addLine(`  ${cmd.padEnd(14)}→  ${desc}`, 'c-pink');
    });
  }
}

/**
 * ABOUT - Información personal
 */
function cmdAbout() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# about.md' : '# sobre.md', 'c-pink c-bold');
  addEmpty();
  
  // Párrafos de presentación
  d.about_paragraphs.forEach((paragraph, index) => {
    // Los primeros 2 párrafos sin gris
    addLine(paragraph, index < 2 ? '' : 'c-gray');
  });
  
  addEmpty();
  
  // Información adicional
  const pad = 12;
  const locationLabel = lang === 'en' ? 'Location' : 'Ubicación';
  const statusLabel = lang === 'en' ? 'Status' : 'Estado';
  const hobbiesLabel = lang === 'en' ? 'Hobbies' : 'Hobbies';
  
  addLine(`  ${locationLabel.padEnd(pad)}│  ${d.location}`, 'c-blue');
  addLine(`  ${statusLabel.padEnd(pad)}│  ${d.status}`, 'c-green');
  addLine(`  ${hobbiesLabel.padEnd(pad)}│  ${d.hobbies}`, 'c-yellow');
}

/**
 * SKILLS - Habilidades técnicas
 */
function cmdSkills() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# skills.json' : '# habilidades.json', 'c-pink c-bold');
  addEmpty();
  
  // Mostrar cada categoría de habilidades
  Object.entries(d.skills).forEach(([category, items]) => {
    addSkillGroup(category, items);
    addEmpty();
  });
}

/**
 * PROJECTS - Proyectos destacados
 */
function cmdProjects() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# projects.yaml' : '# proyectos.yaml', 'c-pink c-bold');
  addEmpty();
  
  // Mostrar cada proyecto
  d.projects.forEach(project => {
    addProject(project);
  });
}

/**
 * EXPERIENCE - Historial laboral
 */
function cmdExperience() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# experience.log' : '# experiencia.log', 'c-pink c-bold');
  addEmpty();
  
  // Mostrar cada trabajo
  d.experience.forEach(job => {
    addLine(`  ${job.period}`, 'c-yellow c-bold');
    addLine(`  ${job.title}`, 'c-green');
    addLine(`  ${job.desc}`, 'c-gray');
    addEmpty();
  });
}

/**
 * EDUCATION - Formación académica
 */
function cmdEducation() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# education.txt' : '# educacion.txt', 'c-pink c-bold');
  addEmpty();
  
  // Título universitario
  addLine(`  ${d.education.degree}`, 'c-green c-bold');
  addLine(`  ${d.education.school}`, 'c-yellow');
  addEmpty();
  
  // Certificaciones
  const certsLabel = lang === 'en' ? 'Certifications' : 'Certificaciones';
  addLine(`  ${certsLabel}`, 'c-blue c-bold');
  
  d.education.certs.forEach(cert => {
    addLine(`  · ${cert}`, 'c-gray');
  });
}

/**
 * CONTACT - Información de contacto
 */
function cmdContact() {
  const d = DATA[lang];
  
  addLine(lang === 'en' ? '# contact.vcard' : '# contacto.vcard', 'c-pink c-bold');
  addEmpty();
  
  // Mostrar cada método de contacto
  Object.entries(d.contact).forEach(([platform, info]) => {
    const color = platform === 'Email' ? 'c-green' 
                : platform === 'Twitter' ? 'c-yellow' 
                : 'c-blue';
    
    addLine(`  ${platform.padEnd(10)}→  ${info}`, color);
  });
  
  addEmpty();
  addLine(d.contact_footer, 'c-gray');
}

/**
 * WHOAMI - Resumen rápido
 */
function cmdWhoami() {
  const d = DATA[lang];
  const suffix = lang === 'en' 
    ? 'developer · designer · builder' 
    : 'desarrollador · diseñador · creador';
  
  addLine(`${d.name} — ${suffix}`, 'c-green c-bold');
}

/**
 * LS - Lista de secciones disponibles
 */
function cmdLs() {
  const totalLabel = lang === 'en' ? 'total 6 sections' : 'total 6 secciones';
  addLine(totalLabel, 'c-gray');
  
  const sections = lang === 'en'
    ? ['about', 'skills', 'projects', 'experience', 'education', 'contact']
    : ['sobre', 'habilidades', 'proyectos', 'experiencia', 'educacion', 'contacto'];
  
  sections.forEach(section => {
    addLine(`drwxr-xr-x  ${section}`, 'c-blue');
  });
}

/* ═══════════════════════════════════════════════════════════
   MAPA DE COMANDOS
   
   Relaciona cada comando (string) con su función correspondiente
   ═══════════════════════════════════════════════════════════ */
const COMMAND_MAP = {
  // Comandos en inglés
  help: cmdHelp,
  about: cmdAbout,
  skills: cmdSkills,
  projects: cmdProjects,
  experience: cmdExperience,
  education: cmdEducation,
  contact: cmdContact,
  whoami: cmdWhoami,
  ls: cmdLs,
  
  // Comandos en español
  ayuda: cmdHelp,
  sobre: cmdAbout,
  habilidades: cmdSkills,
  proyectos: cmdProjects,
  experiencia: cmdExperience,
  educacion: cmdEducation,
  contacto: cmdContact,
};
