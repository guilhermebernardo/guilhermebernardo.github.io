const { MercadoPagoConfig, Preference } = require('mercadopago');

const SITE_URL = process.env.SITE_URL || 'https://tolentimports.com.br';

module.exports = async function handler(req, res) {
  /* CORS — permite o domínio customizado e qualquer subdomínio vercel.app */
  const origin = req.headers.origin || '';
  const allowed =
    origin === SITE_URL ||
    origin.endsWith('.vercel.app') ||
    origin === 'http://localhost:3000';

  res.setHeader('Access-Control-Allow-Origin',  allowed ? origin : SITE_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  /* Checa token antes de qualquer coisa */
  if (!process.env.MP_ACCESS_TOKEN) {
    console.error('[create-preference] MP_ACCESS_TOKEN não configurado na Vercel');
    return res.status(500).json({
      error: 'Token do Mercado Pago não configurado. Configure a variável MP_ACCESS_TOKEN nas Settings da Vercel.',
    });
  }

  const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
    options: { timeout: 8000 },
  });

  try {
    const { name, brand, price, quantity = 1 } = req.body || {};

    if (!name || !brand || !price)
      return res.status(400).json({ error: 'name, brand e price são obrigatórios.' });

    const qty       = Math.max(1, Math.floor(Number(quantity)));
    const unitPrice = Number(price);

    if (isNaN(unitPrice) || unitPrice <= 0)
      return res.status(400).json({ error: 'Preço inválido.' });

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [{
          id:          `${brand}-${name}`.replace(/[^a-z0-9]/gi, '-').toLowerCase(),
          title:       `${brand} — ${name}`,
          quantity:    qty,
          currency_id: 'BRL',
          unit_price:  unitPrice,
        }],
        payment_methods: {
          excluded_payment_types:   [],
          excluded_payment_methods: [],
          installments:             12,
          default_installments:     1,
        },
        back_urls: {
          success: `${SITE_URL}/sucesso.html`,
          failure: `${SITE_URL}`,
          pending: `${SITE_URL}/sucesso.html`,
        },
        auto_return:          'approved',
        statement_descriptor: 'TOLENT IMPORTS',
        external_reference:   `order-${Date.now()}`,
        notification_url:     `${SITE_URL}/api/webhook`,
      },
    });

    return res.status(200).json({ init_point: result.init_point });

  } catch (err) {
    const msg = err?.message || JSON.stringify(err);
    console.error('[create-preference]', msg);
    return res.status(500).json({ error: msg });
  }
};
