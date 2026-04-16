const { MercadoPagoConfig, Preference } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
  options: { timeout: 8000 },
});

const SITE_URL = process.env.SITE_URL || 'https://tolentimports.com.br';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  SITE_URL);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

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

        /* PIX + cartão de crédito até 12x — nenhum método excluído */
        payment_methods: {
          excluded_payment_types:   [],   /* nada excluído: mostra PIX, cartão, débito */
          excluded_payment_methods: [],
          installments:             12,   /* máximo de parcelas */
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
    console.error('[create-preference]', err?.message || err);
    return res.status(500).json({ error: 'Erro ao criar preferência de pagamento.' });
  }
};
