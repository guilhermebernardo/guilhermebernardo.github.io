const MP_TOKEN      = process.env.MP_ACCESS_TOKEN;
const CALLMEBOT_KEY = process.env.CALLMEBOT_APIKEY;
const OWNER_PHONE   = process.env.OWNER_PHONE; // ex: 5512991510752

async function sendWhatsApp(message) {
  if (!CALLMEBOT_KEY || !OWNER_PHONE) {
    console.warn('[webhook] CALLMEBOT_APIKEY ou OWNER_PHONE não configurados.');
    return;
  }
  /* CallMeBot API: https://www.callmebot.com/blog/free-api-whatsapp-messages/
     Mensagem deve ser URL-encoded; %0A = quebra de linha */
  const url = `https://api.callmebot.com/whatsapp.php`
    + `?phone=${encodeURIComponent(OWNER_PHONE)}`
    + `&text=${encodeURIComponent(message)}`
    + `&apikey=${encodeURIComponent(CALLMEBOT_KEY)}`;
  try {
    const r = await fetch(url);
    console.log('[webhook] callmebot status:', r.status);
  } catch (e) {
    console.error('[webhook] callmebot error:', e.message);
  }
}

function parseBuyer(external_reference) {
  try {
    return JSON.parse(external_reference || '{}');
  } catch {
    return {};
  }
}

function formatPaymentType(info) {
  const type   = info.payment_type_id  || '';
  const method = info.payment_method_id || '';
  const label  = method.charAt(0).toUpperCase() + method.slice(1);
  if (type === 'bank_transfer') return 'PIX';
  if (type === 'credit_card') {
    const inst = info.installments || 1;
    return inst > 1 ? `Cartão de crédito ${label} — ${inst}x` : `Cartão de crédito ${label}`;
  }
  if (type === 'debit_card') return `Cartão de débito ${label}`;
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
        /* buyer info que o comprador preencheu no formulário */
        const buyer  = parseBuyer(info.external_reference);
        const nome   = buyer.name  || info.payer?.first_name || 'Não informado';
        const email  = buyer.email || info.payer?.email      || 'Não informado';
        const cel    = buyer.phone || (info.payer?.phone?.number
          ? `(${info.payer.phone.area_code}) ${info.payer.phone.number}`
          : 'Não informado');

        const pedido    = buyer.id || String(info.id);
        const produto   = info.description || 'Produto';
        const valor     = `R$ ${Number(info.transaction_amount).toFixed(2).replace('.', ',')}`;
        const pagamento = formatPaymentType(info);

        const msg = [
          '🛍️ *Nova compra confirmada — Tolent Imports*',
          '',
          `📦 *Pedido:* ${pedido}`,
          `🛒 *Produto:* ${produto}`,
          `💰 *Valor:* ${valor}`,
          `💳 *Pagamento:* ${pagamento}`,
          '',
          '👤 *Dados do comprador*',
          `   Nome: ${nome}`,
          `   E-mail: ${email}`,
          `   Celular: ${cel}`,
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
