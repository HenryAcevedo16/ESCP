'use strict';

module.exports = {
  register(/*{ strapi }*/) {},

  async bootstrap({ strapi }) {
    await setPublicPermissions(strapi);
    await seedInitialContent(strapi);
    await generateApiToken(strapi);
  },
};

// ─── API TOKEN ───────────────────────────────────────────────────────────────

async function generateApiToken(strapi) {
  try {
    const TOKEN_NAME = 'Frontend ESCP';

    // Verificar si ya existe
    const existing = await strapi.query('admin::api-token').findOne({
      where: { name: TOKEN_NAME },
    });

    if (existing) {
      strapi.log.info('[token] API Token "Frontend ESCP" ya existe.');
      strapi.log.info('[token] Si necesitas el token, regéneralo en: Settings → API Tokens');
      return;
    }

    // Crear el token
    const tokenService = strapi.service('admin::api-token');
    const token = await tokenService.create({
      name: TOKEN_NAME,
      description: 'Token de lectura para el frontend Next.js de ESCP',
      type: 'read-only',
      lifespan: null, // Sin expiración
    });

    strapi.log.info('\n');
    strapi.log.info('╔══════════════════════════════════════════════════════════════╗');
    strapi.log.info('║           🔑  API TOKEN GENERADO — CÓPIALO AHORA            ║');
    strapi.log.info('╠══════════════════════════════════════════════════════════════╣');
    strapi.log.info(`║  ${token.accessKey}  ║`);
    strapi.log.info('╠══════════════════════════════════════════════════════════════╣');
    strapi.log.info('║  Pégalo en cnus/.env.local:                                  ║');
    strapi.log.info('║  STRAPI_API_TOKEN=<el token de arriba>                       ║');
    strapi.log.info('╚══════════════════════════════════════════════════════════════╝');
    strapi.log.info('\n');
  } catch (err) {
    strapi.log.error('[token] Error generando API Token:', err.message);
  }
}

// ─── PERMISOS PÚBLICOS ────────────────────────────────────────────────────────

async function setPublicPermissions(strapi) {
  const publicActions = [
    'api::articulo.articulo.find',
    'api::articulo.articulo.findOne',
    'api::autor.autor.find',
    'api::autor.autor.findOne',
    'api::categoria.categoria.find',
    'api::categoria.categoria.findOne',
    'api::debate.debate.find',
    'api::debate.debate.findOne',
    'api::eje-formativo.eje-formativo.find',
    'api::eje-formativo.eje-formativo.findOne',
    'api::hero-config.hero-config.find',
    'api::programa.programa.find',
    'api::programa.programa.findOne',
    'api::tag.tag.find',
    'api::tag.tag.findOne',
  ];

  try {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (!publicRole) return;

    const existing = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({ where: { role: { id: publicRole.id } } });

    const existingSet = new Set(existing.map((p) => p.action));

    for (const action of publicActions) {
      if (!existingSet.has(action)) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action, role: publicRole.id },
        });
      }
    }

    strapi.log.info('[bootstrap] Permisos públicos configurados ✅');
  } catch (err) {
    strapi.log.error('[bootstrap] Error configurando permisos:', err.message);
  }
}

// ─── SEED INICIAL ─────────────────────────────────────────────────────────────
// Cada sección verifica si ya existe antes de crear (seguro para reinicios).

async function seedInitialContent(strapi) {
  try {
    strapi.log.info('[seed] Verificando contenido inicial...');

    const categorias = await seedCategorias(strapi);
    const tags       = await seedTags(strapi);
    await seedEjesFormativos(strapi);
    await seedHeroConfig(strapi);
    const autor      = await seedAutor(strapi);
    const articulos  = await seedArticulos(strapi, categorias, tags, autor);
    await seedDebate(strapi, articulos);
    await seedProgramas(strapi, autor);

    strapi.log.info('[seed] ✅ Seed completado correctamente.');
  } catch (err) {
    strapi.log.error('[seed] Error en seed:', err.message || err);
  }
}

// ─── HELPERS ──────────────────────────────────────────────────────────────────

async function findOrCreate(strapi, uid, where, data) {
  const existing = await strapi.documents(uid).findFirst({ filters: where });
  if (existing) return existing;
  return strapi.documents(uid).create({ data });
}

// ─── 1. CATEGORÍAS ────────────────────────────────────────────────────────────

async function seedCategorias(strapi) {
  const datos = [
    { nombre: 'Noticias',             slug: 'noticias',             orden: 1 },
    { nombre: 'Artículos',            slug: 'articulos',            orden: 2 },
    { nombre: 'Notas del presidente', slug: 'notas-del-presidente', orden: 3 },
  ];

  const result = {};
  for (const d of datos) {
    const cat = await findOrCreate(strapi, 'api::categoria.categoria', { slug: { $eq: d.slug } }, d);
    result[d.slug] = cat;
  }
  strapi.log.info('[seed] Categorías listas ✅');
  return result;
}

// ─── 2. TAGS ──────────────────────────────────────────────────────────────────

async function seedTags(strapi) {
  const datos = [
    { nombre: 'Sindicalismo',        slug: 'sindicalismo' },
    { nombre: 'Derechos Laborales',  slug: 'derechos-laborales' },
    { nombre: 'Formación',           slug: 'formacion' },
    { nombre: 'Trabajo Decente',     slug: 'trabajo-decente' },
    { nombre: 'Incidencia Política', slug: 'incidencia-politica' },
    { nombre: 'Liderazgo',           slug: 'liderazgo' },
    { nombre: 'Género',              slug: 'genero' },
  ];

  const result = [];
  for (const d of datos) {
    const tag = await findOrCreate(strapi, 'api::tag.tag', { slug: { $eq: d.slug } }, d);
    result.push(tag);
  }
  strapi.log.info('[seed] Tags listos ✅');
  return result;
}

// ─── 3. EJES FORMATIVOS ───────────────────────────────────────────────────────

async function seedEjesFormativos(strapi) {
  const ejes = [
    { nombre: 'Identidad sindical',    color: '#0045A5', orden: 1 },
    { nombre: 'Derechos laborales',    color: '#E05A2B', orden: 2 },
    { nombre: 'Diálogo democrático',   color: '#2EAE6D', orden: 3 },
    { nombre: 'Equidad e inclusión',   color: '#9B59B6', orden: 4 },
    { nombre: 'Liderazgo sindical',    color: '#E67E22', orden: 5 },
    { nombre: 'Economía y trabajo',    color: '#16A085', orden: 6 },
    { nombre: 'Incidencia política',   color: '#2980B9', orden: 7 },
    { nombre: 'Investigación sindical', color: '#8E44AD', orden: 8 },
    { nombre: 'Desarrollo sectorial',  color: '#27AE60', orden: 9 },
    { nombre: 'Políticas educativas',  color: '#C0392B', orden: 10 },
  ];

  for (const eje of ejes) {
    await findOrCreate(strapi, 'api::eje-formativo.eje-formativo', { nombre: { $eq: eje.nombre } }, eje);
  }
  strapi.log.info('[seed] Ejes formativos listos ✅');
}

// ─── 4. HERO CONFIG (Single Type) ────────────────────────────────────────────

async function seedHeroConfig(strapi) {
  const existing = await strapi.documents('api::hero-config.hero-config').findFirst();

  const data = {
    tipo_media:  'video',
    titulo:      'Formación sindical sociopolítica para transformar la República Dominicana',
    subtitulo:   'Fortalece tu liderazgo y conocimientos para impulsar un trabajo decente y mejores condiciones sociales.',
    boton_texto: 'Conocer más',
    boton_url:   '/programas',
    stat_1:      '10 ejes formativos',
    stat_2:      '8 modalidades',
    stat_3:      '14 líneas sectoriales',
  };

  if (existing) {
    // Actualizar el registro existente con los nuevos campos de botón
    await strapi.documents('api::hero-config.hero-config').update({
      documentId: existing.documentId,
      data,
    });
    strapi.log.info('[seed] Hero Config actualizado con nuevos campos ✅');
  } else {
    await strapi.documents('api::hero-config.hero-config').create({ data });
    strapi.log.info('[seed] Hero Config creado ✅');
  }
}

// ─── 5. AUTOR ─────────────────────────────────────────────────────────────────

async function seedAutor(strapi) {
  const autor = await findOrCreate(
    strapi,
    'api::autor.autor',
    { nombre: { $eq: 'Redacción' } },
    {
      nombre:    'Redacción',
      apellido:  'ESCP',
      cargo:     'Escuela CNUS de Sindicalismo Sociopolítico',
      biografia: 'Equipo editorial de la Escuela CNUS.',
    }
  );
  strapi.log.info('[seed] Autor listo ✅');
  return autor;
}

// ─── 6. ARTÍCULOS ─────────────────────────────────────────────────────────────

async function seedArticulos(strapi, categorias, tags, autor) {
  const hoy = new Date().toISOString().split('T')[0];

  const datos = [
    {
      slug:              'escp-inicia-diplomado-liderazgo-sindical',
      titulo:            'ESCP inicia nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica',
      extracto:          'Un nuevo programa formativo para fortalecer el liderazgo sindical, el diálogo social y la incidencia sociopolítica en la República Dominicana.',
      contenido:         '<p>La Escuela CNUS de Sindicalismo Sociopolítico anuncia el inicio de su nuevo Diplomado en Liderazgo Sindical y Acción Sociopolítica, diseñado para formar dirigentes con herramientas sólidas para la negociación colectiva, el diálogo social y la incidencia política.</p><p>Este programa representa un paso significativo en nuestra misión de fortalecer el movimiento sindical dominicano con formación de calidad, accesible y orientada a la transformación social.</p>',
      fecha_publicacion: hoy,
      destacado:         true,
      categoriaSlug:     'noticias',
      tagIndices:        [0, 2],
    },
    {
      slug:              'mujeres-lideran-jornada-negociacion',
      titulo:            'Mujeres lideran jornada de formación sobre negociación y diálogo social',
      extracto:          'Más de 80 mujeres sindicalistas participaron en la jornada de formación organizada por la ESCP.',
      contenido:         '<p>En el marco del compromiso de la ESCP con la equidad de género, más de 80 mujeres sindicalistas de distintas federaciones participaron en una jornada intensiva de formación sobre técnicas de negociación colectiva y diálogo social.</p>',
      fecha_publicacion: hoy,
      destacado:         false,
      categoriaSlug:     'noticias',
      tagIndices:        [6, 1],
    },
    {
      slug:              'sindicalismo-politicas-publicas-laborales',
      titulo:            'El papel del sindicalismo en la construcción de políticas públicas laborales',
      extracto:          'Un análisis sobre cómo los sindicatos pueden incidir efectivamente en la formulación de políticas públicas que beneficien a los trabajadores.',
      contenido:         '<p>Los sindicatos tienen un papel fundamental en la construcción de políticas públicas que protejan los derechos de los trabajadores. Este artículo analiza los mecanismos de participación disponibles y cómo maximizar su efectividad.</p>',
      fecha_publicacion: hoy,
      destacado:         false,
      categoriaSlug:     'articulos',
      tagIndices:        [4, 0],
    },
    {
      slug:              'nota-presidente-compromisos-segundo-semestre-2026',
      titulo:            'Nota del Presidente: Compromisos para el segundo semestre de 2026',
      extracto:          'El presidente de la CNUS presenta los compromisos y objetivos del movimiento sindical para el segundo semestre del año.',
      contenido:         '<p>Como movimiento sindical comprometido con la justicia social y el trabajo decente, presentamos nuestros compromisos para el segundo semestre de 2026, enfocados en fortalecer la organización sindical a nivel nacional.</p>',
      fecha_publicacion: hoy,
      destacado:         false,
      categoriaSlug:     'notas-del-presidente',
      tagIndices:        [0, 3],
    },
  ];

  const creados = [];
  for (const d of datos) {
    const existing = await strapi.documents('api::articulo.articulo').findFirst({
      filters: { slug: { $eq: d.slug } },
    });
    if (existing) { creados.push(existing); continue; }

    const data = {
      titulo:            d.titulo,
      slug:              d.slug,
      extracto:          d.extracto,
      contenido:         d.contenido,
      fecha_publicacion: d.fecha_publicacion,
      destacado:         d.destacado,
    };

    const cat = categorias[d.categoriaSlug];
    if (cat?.documentId) data.categoria = cat.documentId;
    if (autor?.documentId) data.autor = autor.documentId;

    const tagIds = d.tagIndices
      .map((i) => tags[i]?.documentId)
      .filter(Boolean);
    if (tagIds.length) data.tags = tagIds;

    const art = await strapi.documents('api::articulo.articulo').create({
      data,
      status: 'published',
    });
    creados.push(art);
  }

  strapi.log.info('[seed] Artículos listos ✅');
  return creados;
}

// ─── 7. DEBATE ────────────────────────────────────────────────────────────────

async function seedDebate(strapi, articulos) {
  const existing = await strapi.documents('api::debate.debate').findFirst();
  if (existing) {
    strapi.log.info('[seed] Debate ya existe ✅');
    return;
  }

  const data = {
    pregunta: '¿Considera usted que la formación sindical es clave para el desarrollo laboral en la República Dominicana?',
    activo: true,
  };

  const articulo = articulos[0];
  if (articulo?.documentId) data.articulo_relacionado = articulo.documentId;

  await strapi.documents('api::debate.debate').create({ data });
  strapi.log.info('[seed] Debate creado ✅');
}

// ─── 8. PROGRAMAS ─────────────────────────────────────────────────────────────

async function seedProgramas(strapi, autor) {
  const programas = [
    {
      slug:        'diplomado-liderazgo-sindical-avanzado',
      titulo:      'Diplomado en Liderazgo Sindical Avanzado',
      descripcion: 'Desarrolla competencias avanzadas en liderazgo, negociación colectiva y representación sindical para transformar tu organización.',
      modalidad:   'Virtual',
      duracion:    '120 horas',
      destacado:   true,
    },
    {
      slug:        'negociacion-colectiva-efectiva',
      titulo:      'Negociación Colectiva Efectiva',
      descripcion: 'Aprende las técnicas y estrategias más efectivas para la negociación de contratos colectivos de trabajo.',
      modalidad:   'Presencial',
      duracion:    '40 horas',
      destacado:   true,
    },
    {
      slug:        'derechos-laborales-era-digital',
      titulo:      'Derechos Laborales en la Era Digital',
      descripcion: 'Explora cómo la digitalización transforma las relaciones laborales y cómo defender los derechos de los trabajadores en este nuevo contexto.',
      modalidad:   'Virtual',
      duracion:    '60 horas',
      destacado:   true,
    },
    {
      slug:        'oratoria-incidencia-politica',
      titulo:      'Oratoria e Incidencia Política',
      descripcion: 'Fortalece tus habilidades de comunicación y aprende a incidir efectivamente en los espacios de toma de decisiones políticas.',
      modalidad:   'Hibrido',
      duracion:    '30 horas',
      destacado:   true,
    },
  ];

  for (const p of programas) {
    const existing = await strapi.documents('api::programa.programa').findFirst({
      filters: { slug: { $eq: p.slug } },
    });
    if (existing) continue;

    const data = { ...p };
    if (autor?.documentId) data.instructor = autor.documentId;

    await strapi.documents('api::programa.programa').create({
      data,
      status: 'published',
    });
  }
  strapi.log.info('[seed] Programas listos ✅');
}
