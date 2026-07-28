const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || '';

/**
 * Función base de fetch hacia Strapi.
 * Retorna null si Strapi no está disponible (no rompe el sitio).
 */
async function fetchStrapi(path, options = {}, tags = []) {
  const url = `${STRAPI_URL}/api/${path}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      },
      next: {
        revalidate: 60,
        ...(tags.length > 0 && { tags }),
      },
      ...options,
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data ?? null;
  } catch {
    return null;
  }
}

/**
 * Versión de fetchStrapi que también devuelve metadatos de paginación.
 */
async function fetchStrapiWithMeta(path, options = {}, tags = []) {
  const url = `${STRAPI_URL}/api/${path}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      },
      next: {
        revalidate: 60,
        ...(tags.length > 0 && { tags }),
      },
      ...options,
    });
    if (!res.ok) return { data: null, meta: null };
    const json = await res.json();
    return { data: json?.data ?? null, meta: json?.meta ?? null };
  } catch {
    return { data: null, meta: null };
  }
}

// ─── Hero Config (Single Type) ───────────────────────────────────────────────
export async function getHeroConfig() {
  return fetchStrapi('hero-config?populate=*');
}

// ─── Ejes Formativos ─────────────────────────────────────────────────────────
export async function getEjesFormativos() {
  return fetchStrapi('eje-formativos?sort=orden:asc&populate=*');
}

// ─── Programas / Cursos ───────────────────────────────────────────────────────
export async function getProgramas(filtros = '') {
  return fetchStrapi(
    `programas?populate[imagen][populate]=*&populate[eje][populate]=*&populate[instructor][populate]=*${filtros ? `&${filtros}` : ''}`
  );
}

export async function getProgramasDestacados() {
  return fetchStrapi(
    'programas?filters[destacado][$eq]=true&sort=createdAt:desc&populate[imagen][populate]=*'
  );
}

export async function getProgramaPorSlug(slug) {
  return fetchStrapi(
    `programas?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[imagen][populate]=*` +
    `&populate[eje][populate]=*` +
    `&populate[instructor][populate][avatar][populate]=*`
  );
}

export async function getAllProgramaSlugs() {
  const data = await fetchStrapi('programas?fields[0]=slug&pagination[pageSize]=1000');
  if (!Array.isArray(data)) return [];
  return data.map((item) => ({ slug: item.slug }));
}

// ─── Artículos ────────────────────────────────────────────────────────────────
export async function getArticulos(limit = 4) {
  return fetchStrapi(
    `articulos?sort=fecha_publicacion:desc&pagination[limit]=${limit}` +
    `&populate[imagen_portada][populate]=*` +
    `&populate[autor][populate]=*` +
    `&populate[categoria][populate]=*`,
    {},
    ['articulos']
  );
}

export async function getArticuloPorSlug(slug) {
  return fetchStrapi(
    `articulos?filters[slug][$eq]=${encodeURIComponent(slug)}` +
    `&populate[imagen_portada][populate]=*` +
    `&populate[autor][populate]=*` +
    `&populate[categoria][populate]=*` +
    `&populate[tags][populate]=*` +
    `&populate[articulos_relacionados][populate][imagen_portada][populate]=*`,
    {},
    ['articulos']
  );
}

export async function getArticuloDestacado() {
  return fetchStrapi(
    'articulos?filters[destacado][$eq]=true&sort=fecha_publicacion:desc&pagination[limit]=1' +
    `&populate[imagen_portada][populate]=*` +
    `&populate[categoria][populate]=*`,
    {},
    ['articulos']
  );
}

/**
 * Obtiene artículos de una categoría con paginación server-side.
 * @param {string} categoriaSlug
 * @param {number} page - Página actual (1-indexed)
 * @param {number} pageSize - Artículos por página
 * @returns {{ data: Article[], total: number, pageCount: number }}
 */
export async function getArticulosPorCategoriaPaginado(categoriaSlug, page = 1, pageSize = 6) {
  const { data, meta } = await fetchStrapiWithMeta(
    `articulos?filters[categoria][slug][$eq]=${encodeURIComponent(categoriaSlug)}` +
    `&sort=fecha_publicacion:desc` +
    `&pagination[page]=${page}&pagination[pageSize]=${pageSize}` +
    `&populate[imagen_portada][populate]=*` +
    `&populate[autor][populate]=*` +
    `&populate[categoria][populate]=*`,
    {},
    ['articulos']
  );
  return {
    data: Array.isArray(data) ? data : [],
    total: meta?.pagination?.total ?? 0,
    pageCount: meta?.pagination?.pageCount ?? 1,
  };
}

/** Versión simple (sin meta) — usada en el Home para previews */
export async function getArticulosPorCategoria(categoriaSlug, limit = 4) {
  return fetchStrapi(
    `articulos?filters[categoria][slug][$eq]=${encodeURIComponent(categoriaSlug)}&sort=fecha_publicacion:desc&pagination[limit]=${limit}` +
    `&populate[imagen_portada][populate]=*` +
    `&populate[autor][populate]=*` +
    `&populate[categoria][populate]=*`,
    {},
    ['articulos']
  );
}

export async function getAllArticuloSlugs() {
  const data = await fetchStrapi('articulos?fields[0]=slug&pagination[pageSize]=1000', {}, ['articulos']);
  if (!Array.isArray(data)) return [];
  return data.map((item) => ({ slug: item.slug }));
}

// ─── Categorías ───────────────────────────────────────────────────────────────
export async function getCategorias() {
  return fetchStrapi('categorias?sort=orden:asc');
}

// ─── Debate ───────────────────────────────────────────────────────────────────
export async function getDebateActivo() {
  return fetchStrapi(
    'debates?filters[activo][$eq]=true&pagination[limit]=1' +
    `&populate[articulo_relacionado][populate][imagen_portada][populate]=*`,
    {},
    ['debates']
  );
}

export async function getDebates() {
  return fetchStrapi('debates?sort=createdAt:desc', {}, ['debates']);
}

export async function getDebatePorSlug(slug) {
  return fetchStrapi(
    `debates?filters[slug][$eq]=${encodeURIComponent(slug)}`,
    {},
    ['debates']
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Construye la URL completa de una imagen de Strapi.
 * Maneja imágenes locales (/uploads/...) y externas (https://...).
 */
export function getStrapiImageUrl(imageData) {
  if (!imageData) return null;
  const url = imageData?.url ?? imageData?.attributes?.url;
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Formatea una fecha ISO a formato legible en español dominicano.
 * Ej: "2026-07-12T00:00:00.000Z" → "12 de julio de 2026"
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  try {
    return new Date(dateString).toLocaleDateString('es-DO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateString;
  }
}

/**
 * Construye el nombre completo del autor.
 */
export function getAutorNombre(autor) {
  if (!autor) return '';
  return [autor.nombre, autor.apellido].filter(Boolean).join(' ');
}
