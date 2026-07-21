const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

async function supabaseFetch(path, options = {}) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;

  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        ...options.headers,
      },
      ...options,
    });
    if (!res.ok) return null;
    // DELETE y PATCH pueden no retornar body
    const text = await res.text();
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

// ─── Comentarios ──────────────────────────────────────────────────────────────

/**
 * Obtiene todos los comentarios raíz de un artículo (sin padres),
 * ordenados del más reciente al más antiguo.
 */
export async function getComentarios(articuloSlug) {
  return supabaseFetch(
    `comentarios?articulo_slug=eq.${articuloSlug}&comentario_padre_id=is.null&order=created_at.desc`,
    { next: { revalidate: 30 } }
  );
}

/**
 * Obtiene las respuestas de un comentario padre.
 */
export async function getRespuestasComentario(comentarioPadreId) {
  return supabaseFetch(
    `comentarios?comentario_padre_id=eq.${comentarioPadreId}&order=created_at.asc`
  );
}

/**
 * Publica un comentario nuevo.
 * data: { articulo_slug, nombre, apellido, texto, comentario_padre_id? }
 */
export async function postComentario(data) {
  return supabaseFetch('comentarios', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { Prefer: 'return=representation' },
  });
}

// ─── Debate ───────────────────────────────────────────────────────────────────

/**
 * Guarda la respuesta de un usuario al debate activo.
 * data: { debate_id, nombre, apellido, respuesta }
 */
export async function postRespuestaDebate(data) {
  return supabaseFetch('respuestas_debate', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { Prefer: 'return=representation' },
  });
}
