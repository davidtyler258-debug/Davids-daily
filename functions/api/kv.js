// David's Daily — Cloudflare Pages Function
// Route: /api/kv
// Handles all KV read/write operations for The Round and future modules
//
// KV binding name: DAVIDS_DAILY_KV
// Configure this binding in Cloudflare Pages → Settings → Functions → KV namespace bindings

export async function onRequest(context) {
  const { request, env } = context;
  const kv = env.DAVIDS_DAILY_KV;

  // CORS headers — locked to daily.urbanwronski.com in production
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const url = new URL(request.url);
  const key = url.searchParams.get('key');

  if (!key) {
    return new Response(
      JSON.stringify({ error: 'Missing key parameter' }),
      { status: 400, headers: corsHeaders }
    );
  }

  try {
    if (request.method === 'GET') {
      const value = await kv.get(key, { type: 'json' });
      if (value === null) {
        return new Response(
          JSON.stringify({ key, value: null }),
          { status: 404, headers: corsHeaders }
        );
      }
      return new Response(
        JSON.stringify({ key, value }),
        { headers: corsHeaders }
      );
    }

    if (request.method === 'PUT') {
      const body = await request.json();
      await kv.put(key, JSON.stringify(body.value));
      return new Response(
        JSON.stringify({ key, saved: true }),
        { headers: corsHeaders }
      );
    }

    if (request.method === 'DELETE') {
      await kv.delete(key);
      return new Response(
        JSON.stringify({ key, deleted: true }),
        { headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: corsHeaders }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: corsHeaders }
    );
  }
}
