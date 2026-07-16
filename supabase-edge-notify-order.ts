// Supabase Edge Function : notify-order
// Déclenchée par un Database Webhook sur INSERT dans public.order_requests.
// Envoie :
//   1) Notification push instantanée à la gérante via Telegram (TOUJOURS, fiable)
//   2) Email notification à la gérante via SMTP Hostinger (best-effort, avec timeout)
//   3) Email reçu au client (seulement s'il a laissé un email)
//
// Secrets à définir dans Supabase (Edge Functions > notify-order > Secrets) :
//   TELEGRAM_BOT_TOKEN = token du bot créé via @BotFather
//   TELEGRAM_CHAT_ID    = id du chat privé de la gérante
//   SMTP_HOSTNAME   = smtp.hostinger.com
//   SMTP_PORT       = 465
//   SMTP_USERNAME   = contact@epicerieducoin.fr
//   SMTP_PASSWORD   = (mot de passe de la boîte mail Hostinger)
//   OWNER_EMAIL     = contact@epicerieducoin.fr
// (SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis automatiquement.)
//
// NB : ntfy.sh a été abandonné car non fiable depuis Supabase (IP de sortie
//      partagée -> 429 daily message quota reached). Telegram = fiable + gratuit.

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SMTP_HOSTNAME = Deno.env.get("SMTP_HOSTNAME") ?? "smtp.hostinger.com";
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT") ?? "465");
const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME")!;
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD")!;
const OWNER_EMAIL = Deno.env.get("OWNER_EMAIL") ?? SMTP_USERNAME;
const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const euro = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(
    Number(value) || 0,
  );

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function itemsTableHtml(items: Array<Record<string, unknown>>) {
  const rows = items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px;border-bottom:1px solid #eee;">${escapeHtml(item.name)}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:center;">${escapeHtml(item.quantity)}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">${euro(Number(item.price))}</td>
          <td style="padding:8px;border-bottom:1px solid #eee;text-align:right;">${euro(Number(item.total))}</td>
        </tr>`,
    )
    .join("");

  return `
    <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
      <thead>
        <tr style="background:#f6f6f6;text-align:left;">
          <th style="padding:8px;">Produit</th>
          <th style="padding:8px;text-align:center;">Qté</th>
          <th style="padding:8px;text-align:right;">Prix</th>
          <th style="padding:8px;text-align:right;">Total</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function ownerEmailHtml(order: Record<string, unknown>, items: Array<Record<string, unknown>>) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222;">
    <h2 style="color:#2b7a4b;">Nouvelle commande — ${escapeHtml(order.reference)}</h2>
    <p><strong>Client :</strong> ${escapeHtml(order.customer_name)}<br>
       <strong>Téléphone :</strong> ${escapeHtml(order.customer_phone)}<br>
       <strong>Email :</strong> ${escapeHtml(order.customer_email ?? "—")}<br>
       <strong>Adresse :</strong> ${escapeHtml(order.customer_address)}<br>
       <strong>Livraison :</strong> ${escapeHtml(order.delivery_date)} à ${escapeHtml(order.delivery_time)}</p>
    ${order.notes ? `<p><strong>Notes :</strong> ${escapeHtml(order.notes)}</p>` : ""}
    ${itemsTableHtml(items)}
    <p style="text-align:right;font-size:18px;"><strong>Total : ${euro(Number(order.total))}</strong></p>
  </div>`;
}

function clientEmailHtml(order: Record<string, unknown>, items: Array<Record<string, unknown>>) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222;">
    <h2 style="color:#2b7a4b;">Merci pour votre commande !</h2>
    <p>Bonjour ${escapeHtml(order.customer_name)},</p>
    <p>Nous avons bien reçu votre commande <strong>${escapeHtml(order.reference)}</strong>.
       Voici le récapitulatif :</p>
    ${itemsTableHtml(items)}
    <p style="text-align:right;font-size:18px;"><strong>Total : ${euro(Number(order.total))}</strong></p>
    <p><strong>Livraison prévue :</strong> ${escapeHtml(order.delivery_date)} à ${escapeHtml(order.delivery_time)}<br>
       <strong>Adresse :</strong> ${escapeHtml(order.customer_address)}</p>
    <p style="margin-top:24px;">À très vite,<br><strong>L'Épicerie du Coin</strong><br>
       contact@epicerieducoin.fr</p>
  </div>`;
}

async function sendTelegram(
  order: Record<string, unknown>,
  items: Array<Record<string, unknown>>,
) {
  console.log("telegram: token =", TELEGRAM_BOT_TOKEN ? "présent" : "VIDE", "| chat =", TELEGRAM_CHAT_ID ? "présent" : "VIDE");
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const lines = [
    `🛎️ NOUVELLE COMMANDE ${order.reference}`,
    ``,
    `👤 ${order.customer_name} (${order.customer_phone})`,
    `📍 ${order.customer_address}`,
    `🚚 ${order.delivery_date} à ${order.delivery_time}`,
    `💶 Total : ${euro(Number(order.total))}`,
  ];
  if (order.customer_email) lines.push(`✉️ ${order.customer_email}`);
  if (order.notes) lines.push(`📝 ${order.notes}`);
  lines.push(``);
  for (const it of items) lines.push(`• ${it.quantity} x ${it.name}`);
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: lines.join("\n") }),
    });
    console.log("telegram: status", res.status, await res.text());
  } catch (err) {
    console.error("telegram error:", err);
  }
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const order = payload.record ?? payload;

    if (!order?.id) {
      return new Response(JSON.stringify({ error: "no_order" }), { status: 400 });
    }

    const { data: items } = await supabase
      .from("order_items")
      .select("name, quantity, price, total")
      .eq("order_id", order.id)
      .order("name");

    // Notif Telegram EN PREMIER : fiable, indépendante du SMTP.
    await sendTelegram(order, items ?? []);

    // Email SMTP avec timeout : ne peut jamais bloquer/planter la fonction.
    try {
      await Promise.race([
        (async () => {
          const client = new SMTPClient({
            connection: {
              hostname: SMTP_HOSTNAME,
              port: SMTP_PORT,
              tls: true,
              auth: { username: SMTP_USERNAME, password: SMTP_PASSWORD },
            },
          });
          await client.send({
            from: SMTP_USERNAME,
            to: OWNER_EMAIL,
            subject: `Nouvelle commande ${order.reference} — ${euro(Number(order.total))}`,
            html: ownerEmailHtml(order, items ?? []),
          });
          if (order.customer_email) {
            await client.send({
              from: SMTP_USERNAME,
              to: order.customer_email,
              subject: `Votre commande ${order.reference} — L'Épicerie du Coin`,
              html: clientEmailHtml(order, items ?? []),
            });
          }
          await client.close();
        })(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("SMTP timeout")), 15000)),
      ]);
    } catch (mailErr) {
      console.error("SMTP error (non bloquant):", mailErr);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-order error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
