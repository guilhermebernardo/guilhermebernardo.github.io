const { MercadoPagoConfig, Payment } = require('mercadopago');

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
  options: { timeout: 8000 },
});

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body || {};

    if (type === 'payment' && data?.id) {
      const payment = new Payment(client);
      const info    = await payment.get({ id: data.id });

      console.log(
        `[webhook] payment ${info.id} | status: ${info.status} | ` +
        `valor: R$${info.transaction_amount} | ref: ${info.external_reference}`
      );
      /* Aqui você pode salvar em banco, enviar e-mail, notificar WhatsApp etc. */
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook]', err?.message || err);
    return res.status(200).json({ received: true }); /* sempre 200 pro MP não retentar */
  }
};
