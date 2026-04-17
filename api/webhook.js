const MP_TOKEN      = process.env.MP_ACCESS_TOKEN;
const CALLMEBOT_KEY = process.env.CALLMEBOT_APIKEY;
const OWNER_PHONE   = process.env.OWNER_PHONE; // ex: 5512991510752

async function sendWhatsApp(message) {
  if (!CALLMEBOT_KEY || !OWNER_PHONE) {
    console.warn('[webhook] CALLMEBOT_APIKEY ou OWNER_PHONE não configurados.');
    return;
  }
  const url = `https://api.callmebot.com/whatsapp.php?phone=${OWNER_PHONE}&text=${encodeURIComponent(message)}&apikey=${CALLMEBOT_KEY}`;
  const r = await fetch(url);
  console.log('[webhook] callmebot status:', r.status);
}

function formatPaymentType(info) {
  const type = info.payment_type_id || '';
  const method = info.payment_method_id || '';
  if (type === 'bank_transfer') return 'PIX';
  if (type === 'credit_card') {
    const inst = info.installments || 1;
    const label = method.charAt(0).toUpperCase() + method.slice(1);
    return inst > 1 ? `Cartão (${label}) — ${inst}x` : `Cartão (${label})`;
  }
  if (type === 'debit_card') return `Débito (${method})`;
  return type || 'Não informado';
}

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

      if (info.status === 'approved') {
        const produto   = info.description || 'Produto';
        const valor     = `R$ ${Number(info.transaction_amount).toFixed(2).replace('.', ',')}`;
        const pedido    = info.external_reference || String(info.id);
        const pagamento = formatPaymentType(info);
        const comprador = info.payer?.first_name
          ? `${info.payer.first_name} ${info.payer.last_name || ''}`.trim()
          : info.payer?.email || 'Cliente';
        const email  = info.payer?.email || '-';
        const phone  = info.payer?.phone?.number
          ? `(${info.payer.phone.area_code}) ${info.payer.phone.number}`
          : '-';

        const msg = [
          '🛍️ *Nova compra confirmada!*',
          `📦 Pedido: ${pedido}`,
          `🛒 Produto: ${produto}`,
          `💰 Valor: ${valor}`,
          `💳 Pagamento: ${pagamento}`,
          `👤 Cliente: ${comprador}`,
          `📧 E-mail: ${email}`,
          `📱 Celular: ${phone}`,
        ].join('\n');

        await sendWhatsApp(msg);
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook]', err.message);
    return res.status(200).json({ received: true });
  }
};
