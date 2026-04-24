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
      name:     'Juan Sebastian Lopez Vanegas',
      role:     'Web Developer · Data Analyst',
      location: 'Bogotá D.C., Colombia',
      status:   'Open to new job opportunities',
      hobbies:  'Gym, Motorcycles, Learning languages and new skills',
  
      /* ── SOBRE MÍ (about) ── 
         Array de párrafos que describen quién eres */
      about_paragraphs: [
        "Hi! I'm Juan Sebastian Lopez — a web developer and data analyst based in Colombia.",
        "I have around one year of professional experience in software development and data analysis.",
        "I'm always open to new challenges and opportunities, constantly learning and improving my skills.",
        "If I don’t know something, I figure it out — I research, adapt, and make things happen."
      ],
  
      /* ── HABILIDADES (skills) ──
         Organiza tus tecnologías por categorías */
      skills: {
        'Frontend':  ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Elementor'],
        'Backend':   ['Node.js', 'Python', 'MySQL', 'Firebase'],
        'Tools':     ['Git', 'GitHub', 'Power BI', 'Excel', 'Google Tag Manager'],
      },
  
      /* ── PROYECTOS (projects) ──
         Lista de tus proyectos destacados
         - name: nombre del proyecto
         - desc: descripción corta
         - stack: array de tecnologías usadas
         - status: estado actual (Live, Open Source, Production, etc.) */
      projects: [
        { 
          name: 'Portfolio Website',
          desc: 'Personal portfolio showcasing web development and data analysis projects.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          status: 'Live'
        },
        { 
          name: 'Data Dashboard',
          desc: 'Interactive dashboard for data visualization and analysis using Power BI.',
          stack: ['Power BI', 'Excel'],
          status: 'Completed'
        },
        { 
          name: 'WordPress Business Site',
          desc: 'Website built with WordPress and Elementor for a business, optimized for SEO.',
          stack: ['WordPress', 'Elementor'],
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
          period: '2024 – Present',
          title: 'Web Developer & Data Analyst',
          desc: 'Worked on web development projects and data analysis tasks, improving business insights and digital presence.'
        }
      ],
  
      /* ── EDUCACIÓN (education) ──
         Formación académica y certificaciones */
      education: {
        degree: 'Systems / Related Technology Studies',
        school: 'Colombia',
        certs: [
          'Web Development Training',
          'Data Analysis Fundamentals',
        ]
      },
  
      /* ── CONTACTO (contact) ──
         Tus redes sociales y medios de contacto */
      contact: {
        Email:    'juans.lopez2004@gmail.com',
        GitHub:   'github.com/sebaslv',
      },
      contact_footer: "I'm always open to new opportunities. Let's build something great!",
    },
  
    /* ─────────────────────────────────────────────────────────
       VERSIÓN EN ESPAÑOL (replica la estructura de arriba)
       ───────────────────────────────────────────────────────── */
    es: {
      name:     'Juan Sebastian Lopez Vanegas',
      role:     'Desarrollador Web · Analista de Datos',
      location: 'Bogotá D.C., Colombia',
      status:   'Buscando nuevas oportunidades de empleo',
      hobbies:  'Gym, motos, aprender idiomas y nuevos conocimientos',
  
      about_paragraphs: [
        "¡Hola! Soy Juan Sebastian Lopez — desarrollador web y analista de datos en Colombia.",
        "Tengo alrededor de un año de experiencia laboral en desarrollo de software y análisis de datos.",
        "Estoy abierto a nuevos retos y oportunidades, siempre aprendiendo y mejorando.",
        "Si no sé algo, lo investigo, me adapto y encuentro la forma de hacerlo posible."
      ],
  
      skills: {
        'Frontend':      ['HTML', 'CSS', 'JavaScript', 'React', 'WordPress', 'Elementor'],
        'Backend':       ['Node.js', 'Python', 'MySQL', 'Firebase'],
        'Herramientas':  ['Git', 'GitHub', 'Power BI', 'Excel', 'Google Tag Manager'],
      },
  
      projects: [
        { 
          name: 'Portafolio Web',
          desc: 'Sitio personal donde muestro proyectos de desarrollo web y análisis de datos.',
          stack: ['HTML', 'CSS', 'JavaScript'],
          status: 'En vivo'
        },
        { 
          name: 'Dashboard de Datos',
          desc: 'Panel interactivo para visualización y análisis de datos con Power BI.',
          stack: ['Power BI', 'Excel'],
          status: 'Completado'
        },
        { 
          name: 'Sitio en WordPress',
          desc: 'Página web creada con WordPress y Elementor optimizada para SEO.',
          stack: ['WordPress', 'Elementor'],
          status: 'Producción'
        },
      ],
  
      experience: [
        { 
          period: '2024 – Presente',
          title: 'Desarrollador Web y Analista de Datos',
          desc: 'Trabajo en proyectos de desarrollo web y análisis de datos, mejorando la presencia digital y la toma de decisiones.'
        }
      ],
  
      education: {
        degree: 'Estudios en Sistemas o área afín',
        school: 'Colombia',
        certs: [
          'Formación en Desarrollo Web',
          'Fundamentos de Análisis de Datos',
        ]
      },
  
      contact: {
        Email:    'juans.lopez2004@gmail.com',
        GitHub:   'github.com/sebaslv',
      },
      contact_footer: "Siempre abierto a nuevas oportunidades. ¡Construyamos algo juntos!",
    }
  };