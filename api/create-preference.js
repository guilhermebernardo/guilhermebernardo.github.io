const SITE_URL = process.env.SITE_URL || 'https://tolentimports.com.br';
const MP_TOKEN  = process.env.MP_ACCESS_TOKEN;

/* Vercel injeta VERCEL_URL automaticamente (sem https://). Usamos ela para
   o notification_url para garantir que o MP sempre alcance a função certa,
   independente de onde o DNS do domínio custom está apontando. */
const VERCEL_BASE = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : SITE_URL;

module.exports = async function handler(req, res) {
  const origin  = req.headers.origin || '';
  const allowed = origin === SITE_URL || origin.endsWith('.vercel.app');
  res.setHeader('Access-Control-Allow-Origin',  allowed ? origin : SITE_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')    return res.status(405).json({ error: 'Method not allowed' });

  if (!MP_TOKEN) {
    return res.status(500).json({
      error: 'MP_ACCESS_TOKEN não configurado. Adicione nas Environment Variables da Vercel.',
    });
  }

  const { name, brand, price, quantity = 1, buyer = {} } = req.body || {};
  if (!name || !brand || !price)
    return res.status(400).json({ error: 'name, brand e price são obrigatórios.' });

  const qty       = Math.max(1, Math.floor(Number(quantity)));
  const unitPrice = Number(price);
  if (isNaN(unitPrice) || unitPrice <= 0)
    return res.status(400).json({ error: 'Preço inválido.' });

  try {
    const mpRes = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_TOKEN}`,
        'Content-Type':  'application/json',
        'X-Idempotency-Key': `tolent-${Date.now()}`,
      },
      body: JSON.stringify({
        items: [{
          title:       `${brand} — ${name}`,
          quantity:    qty,
          currency_id: 'BRL',
          unit_price:  unitPrice,
        }],
        payment_methods: {
          installments:             12,
          default_installments:     1,
          excluded_payment_types:   [],
          excluded_payment_methods: [],
        },
        back_urls: {
          success: `${SITE_URL}/sucesso.html`,
          failure: `${SITE_URL}`,
          pending: `${SITE_URL}/sucesso.html`,
        },
        auto_return:          'approved',
        statement_descriptor: 'TOLENT IMPORTS',
        /* buyer info encoded here so webhook can read it reliably */
        external_reference:   JSON.stringify({
          id:    `order-${Date.now()}`,
          name:  buyer.name  || '',
          email: buyer.email || '',
          phone: buyer.phone || '',
        }),
        notification_url:     `${VERCEL_BASE}/api/webhook`,
        ...(buyer.email && {
          payer: {
            name:  buyer.name  || undefined,
            email: buyer.email,
            phone: buyer.phone ? { area_code: buyer.phone.replace(/\D/g,'').slice(0,2), number: buyer.phone.replace(/\D/g,'').slice(2) } : undefined,
          },
        }),
      }),
    });

    const data = await mpRes.json();

    if (!mpRes.ok) {
      console.error('[create-preference] MP error:', JSON.stringify(data));
      return res.status(502).json({ error: data?.message || 'Erro no Mercado Pago.' });
    }

    return res.status(200).json({ init_point: data.init_point });

  } catch (err) {
    console.error('[create-preference]', err.message);
    return res.status(500).json({ error: err.message });
  }
};
