const MP_TOKEN = process.env.MP_ACCESS_TOKEN;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const { type, data } = req.body || {};

    if (type === 'payment' && data?.id && MP_TOKEN) {
      const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${data.id}`, {
        headers: { 'Authorization': `Bearer ${MP_TOKEN}` },
      });
      const info = await mpRes.json();
      console.log(`[webhook] payment ${info.id} | status: ${info.status} | R$${info.transaction_amount}`);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook]', err.message);
    return res.status(200).json({ received: true });
  }
};
