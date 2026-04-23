/* ═══════════════════════════════════════════════════════════
   DATOS DEL PORTAFOLIO
   
   INSTRUCCIONES PARA EDITAR:
   - Cambia los textos con tu información personal
   - Mantén la estructura (comillas, comas, corchetes)
   - Edita tanto la versión en inglés (en) como español (es)
   ═══════════════════════════════════════════════════════════ */

const DATA = {
  /* ─────────────────────────────────────────────────────────
     VERSIÓN EN INGLÉS
     ───────────────────────────────────────────────────────── */
  en: {
    /* ── INFORMACIÓN PERSONAL ── */
    name:     'Alex Rivera',
    role:     'Full-Stack Developer · UI/UX Designer · Open Source Enthusiast',
    location: 'Bogotá, Colombia',
    status:   'Open to opportunities',
    hobbies:  'Cycling, Coffee, Side projects',

    /* ── SOBRE MÍ (about) ── 
       Array de párrafos que describen quién eres */
    about_paragraphs: [
      "Hi! I'm Alex Rivera — a full-stack developer based in Colombia.",
      "I build clean, performant, and delightful digital experiences.",
      "I've spent 5+ years crafting web applications, from ideation to deployment.",
      "I'm passionate about developer experience, open-source, and making the web accessible to everyone."
    ],

    /* ── HABILIDADES (skills) ──
       Organiza tus tecnologías por categorías */
    skills: {
      'Frontend':  ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Figma'],
      'Backend':   ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
      'Tools':     ['Git', 'CI/CD', 'AWS', 'Linux', 'Neovim', 'Postman'],
    },

    /* ── PROYECTOS (projects) ──
       Lista de tus proyectos destacados
       - name: nombre del proyecto
       - desc: descripción corta
       - stack: array de tecnologías usadas
       - status: estado actual (Live, Open Source, Production, etc.) */
    projects: [
      { 
        name: 'DevFlow',
        desc: 'Real-time collaborative coding platform for remote teams. Built with WebSockets, React, and Node.',
        stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        status: 'Live'
      },
      { 
        name: 'Termi-UI',
        desc: 'Open-source terminal-inspired UI component library. 2k+ GitHub stars.',
        stack: ['TypeScript', 'CSS', 'Storybook', 'npm'],
        status: 'Open Source'
      },
      { 
        name: 'PulseAPI',
        desc: 'RESTful analytics API processing 10M+ daily events with sub-50ms latency.',
        stack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
        status: 'Production'
      },
    ],

    /* ── EXPERIENCIA LABORAL (experience) ──
       Historial de trabajos
       - period: fechas (ej: "2022 - Present")
       - title: puesto y empresa
       - desc: descripción de logros/responsabilidades */
    experience: [
      { 
        period: '2022 – Present',
        title: 'Senior Frontend Developer @ TechCorp Latam',
        desc: 'Led UI overhaul reducing load times by 40%. Managed a team of 4.'
      },
      { 
        period: '2020 – 2022',
        title: 'Full-Stack Developer @ StartupX',
        desc: 'Built and shipped 3 SaaS products from scratch. MVP to scale.'
      },
      { 
        period: '2018 – 2020',
        title: 'Junior Dev @ Agency Creative',
        desc: 'Developed web experiences for 20+ brands.'
      },
    ],

    /* ── EDUCACIÓN (education) ──
       Formación académica y certificaciones */
    education: {
      degree: 'B.Sc. Systems Engineering',
      school: 'Universidad de los Andes, Bogotá — 2018',
      certs: [
        'AWS Solutions Architect Associate (2023)',
        'Google UX Design Certificate (2022)',
        'Meta Frontend Developer (2021)',
      ]
    },

    /* ── CONTACTO (contact) ──
       Tus redes sociales y medios de contacto */
    contact: {
      Email:    'alex@portfolio.dev',
      GitHub:   'github.com/alexrivera',
      LinkedIn: 'linkedin.com/in/alexrivera',
      Twitter:  '@alexrivera_dev',
    },
    contact_footer: "I'm always up for a good chat. Let's build something together!",
  },

  /* ─────────────────────────────────────────────────────────
     VERSIÓN EN ESPAÑOL (replica la estructura de arriba)
     ───────────────────────────────────────────────────────── */
  es: {
    name:     'Alex Rivera',
    role:     'Desarrollador Full-Stack · Diseñador UI/UX · Entusiasta Open Source',
    location: 'Bogotá, Colombia',
    status:   'Abierto a oportunidades',
    hobbies:  'Ciclismo, Café, Proyectos paralelos',

    about_paragraphs: [
      "¡Hola! Soy Alex Rivera — desarrollador full-stack en Colombia.",
      "Construyo experiencias digitales limpias, eficientes y deliciosas.",
      "Llevo 5+ años creando aplicaciones web, desde la idea hasta el despliegue.",
      "Me apasiona la experiencia del desarrollador, el open-source y hacer la web accesible para todos."
    ],

    skills: {
      'Frontend':      ['React', 'Next.js', 'TypeScript', 'Tailwind', 'GSAP', 'Figma'],
      'Backend':       ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'Docker'],
      'Herramientas':  ['Git', 'CI/CD', 'AWS', 'Linux', 'Neovim', 'Postman'],
    },

    projects: [
      { 
        name: 'DevFlow',
        desc: 'Plataforma de codificación colaborativa en tiempo real. Construida con WebSockets, React y Node.',
        stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        status: 'En vivo'
      },
      { 
        name: 'Termi-UI',
        desc: 'Librería de componentes UI open-source inspirada en terminales. 2k+ estrellas en GitHub.',
        stack: ['TypeScript', 'CSS', 'Storybook', 'npm'],
        status: 'Open Source'
      },
      { 
        name: 'PulseAPI',
        desc: 'API REST de analíticas procesando 10M+ eventos diarios con latencia menor a 50ms.',
        stack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL'],
        status: 'Producción'
      },
    ],

    experience: [
      { 
        period: '2022 – Presente',
        title: 'Desarrollador Frontend Senior @ TechCorp Latam',
        desc: 'Lideré rediseño de UI reduciendo tiempos de carga en 40%. Equipo de 4.'
      },
      { 
        period: '2020 – 2022',
        title: 'Desarrollador Full-Stack @ StartupX',
        desc: 'Construí y lancé 3 productos SaaS desde cero. De MVP a escala.'
      },
      { 
        period: '2018 – 2020',
        title: 'Dev Junior @ Agency Creative',
        desc: 'Desarrollé experiencias web para más de 20 marcas.'
      },
    ],

    education: {
      degree: 'Ing. de Sistemas',
      school: 'Universidad de los Andes, Bogotá — 2018',
      certs: [
        'AWS Solutions Architect Associate (2023)',
        'Google UX Design Certificate (2022)',
        'Meta Frontend Developer (2021)',
      ]
    },

    contact: {
      Email:    'alex@portfolio.dev',
      GitHub:   'github.com/alexrivera',
      LinkedIn: 'linkedin.com/in/alexrivera',
      Twitter:  '@alexrivera_dev',
    },
    contact_footer: "Siempre dispuesto a una buena charla. ¡Construyamos algo juntos!",
  }
};
