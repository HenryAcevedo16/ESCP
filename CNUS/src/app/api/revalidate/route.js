import { revalidateTag, revalidatePath } from 'next/cache';

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || '';

/**
 * POST /api/revalidate
 * 
 * Strapi manda un webhook a este endpoint cuando se publica, actualiza o
 * elimina contenido. El sitio se regenera al instante.
 * 
 * Headers requeridos:
 *   x-revalidate-secret: <valor de REVALIDATE_SECRET>
 * 
 * Body (enviado por Strapi):
 *   { "model": "articulo" | "debate" | ... }
 */
export async function POST(request) {
  // Validar el secret para que solo Strapi pueda llamar este endpoint
  const secret = request.headers.get('x-revalidate-secret');
  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json().catch(() => ({}));
    const model = body?.model ?? 'unknown';

    // Invalidar el tag correspondiente según el modelo de Strapi
    if (model === 'articulo') {
      revalidateTag('articulos');
      // También revalidar rutas clave del home
      revalidatePath('/');
      revalidatePath('/articulando');
    } else if (model === 'debate') {
      revalidateTag('debates');
      revalidatePath('/articulando');
      revalidatePath('/articulando/debate');
    } else {
      // Fallback: revalidar todo
      revalidateTag('articulos');
      revalidateTag('debates');
      revalidatePath('/');
      revalidatePath('/articulando');
    }

    return Response.json({
      revalidated: true,
      model,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return Response.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}

// GET para verificar que el endpoint existe
export async function GET() {
  return Response.json({ status: 'ok', message: 'Revalidation endpoint active' });
}
