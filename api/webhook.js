const MP_TOKEN      = process.env.MP_ACCESS_TOKEN;
const CALLMEBOT_KEY = process.env.CALLMEBOT_APIKEY;
const OWNER_PHONE   = process.env.OWNER_PHONE;

async function sendWhatsApp(message) {
  if (!CALLMEBOT_KEY || !OWNER_PHONE) {
    console.warn('[webhook] CALLMEBOT_APIKEY ou OWNER_PHONE não configurados.');
    return;
  }
  const phone = OWNER_PHONE.startsWith('+') ? OWNER_PHONE : `+${OWNER_PHONE}`;
  const url = `https://api.callmebot.com/whatsapp.php`
    + `?phone=${encodeURIComponent(phone)}`
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
  try { return JSON.parse(external_reference || '{}'); } catch { return {}; }
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

async function notifyApprovedPayment(paymentId) {
  if (!MP_TOKEN) return;
  const mpRes = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    headers: { 'Authorization': `Bearer ${MP_TOKEN}` },
  });
  const info = await mpRes.json();
  console.log(`[webhook] payment ${info.id} | status: ${info.status} | R$${info.transaction_amount}`);

  if (info.status !== 'approved') return;

  const buyer     = parseBuyer(info.external_reference);
  const nome      = buyer.name  || info.payer?.first_name || 'Não informado';
  const email     = buyer.email || info.payer?.email      || 'Não informado';
  const cel       = buyer.phone || (info.payer?.phone?.number
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

module.exports = async function handler(req, res) {
  /* Endpoint de teste: GET /api/webhook?test=1 */
  if (req.method === 'GET' && req.query?.test === '1') {
    await sendWhatsApp('✅ Tolent Imports — teste de notificação funcionando!');
    return res.status(200).send('Mensagem de teste enviada para o WhatsApp.');
  }

  if (req.method !== 'POST') return res.status(405).end();

  try {
    const body = req.body || {};
    const type = body.type || req.query?.topic || '';
    const id   = body.data?.id || req.query?.id || '';

    /* Log completo para depuração — visível nos logs da Vercel */
    console.log('[webhook] recebido | type:', type, '| id:', id, '| body:', JSON.stringify(body).slice(0, 500));

    if (type === 'payment' && id) {
      /* Notificação direta de pagamento */
      await notifyApprovedPayment(id);

    } else if (type === 'merchant_order' && id) {
      /* Checkout Pro envia merchant_order — precisa buscar os payments do pedido */
      const orderRes = await fetch(`https://api.mercadopago.com/merchant_orders/${id}`, {
        headers: { 'Authorization': `Bearer ${MP_TOKEN}` },
      });
      const order = await orderRes.json();
      console.log('[webhook] merchant_order', id, '| payments:', order.payments?.length);
      for (const p of (order.payments || [])) {
        if (p.status === 'approved') {
          await notifyApprovedPayment(p.id);
          break; /* notifica só uma vez por pedido */
        }
      }
    } else {
      console.log('[webhook] tipo não tratado ou sem id:', type, id);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('[webhook]', err.message);
    return res.status(200).json({ received: true });
  }
};
