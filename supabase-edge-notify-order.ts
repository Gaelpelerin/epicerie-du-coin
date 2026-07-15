// Supabase Edge Function : notify-order
// Déclenchée par un Database Webhook sur INSERT dans public.order_requests.
// Envoie 2 emails via le SMTP Hostinger :
//   1) Notification à la gérante (toujours)
//   2) Reçu au client (seulement s'il a laissé un email)
//
// Secrets à définir dans Supabase (Edge Functions > notify-order > Secrets) :
//   SMTP_HOSTNAME   = smtp.hostinger.com
//   SMTP_PORT       = 465
//   SMTP_USERNAME   = contact@epicerieducoin.fr
//   SMTP_PASSWORD   = (mot de passe de la boîte mail Hostinger)
//   OWNER_EMAIL     = contact@epicerieducoin.fr
// (SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis automatiquement.)

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SMTP_HOSTNAME = Deno.env.get("SMTP_HOSTNAME") ?? "smtp.hostinger.com";
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT") ?? "465");
const SMTP_USERNAME = Deno.env.get("SMTP_USERNAME")!;
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD")!;
const OWNER_EMAIL = Deno.env.get("OWNER_EMAIL") ?? SMTP_USERNAME;
const NTFY_TOPIC = Deno.env.get("NTFY_TOPIC");
const NTFY_URL = Deno.env.get("NTFY_URL") ?? "https://ntfy.sh";

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

async function sendNtfy(
  order: Record<string, unknown>,
  items: Array<Record<string, unknown>>,
) {
  if (!NTFY_TOPIC) return;
  const body = [
    `Client : ${order.customer_name} (${order.customer_phone})`,
    `Adresse : ${order.customer_address}`,
    `Livraison : ${order.delivery_date} a ${order.delivery_time}`,
    `Total : ${euro(Number(order.total))}`,
    "",
    ...items.map((it) => `- ${it.quantity} x ${it.name}`),
  ].join("\n");
  try {
    await fetch(`${NTFY_URL}/${NTFY_TOPIC}`, {
      method: "POST",
      headers: {
        "Title": `Nouvelle commande ${order.reference}`,
        "Priority": "high",
        "Tags": "shopping,bell",
      },
      body,
    });
  } catch (err) {
    console.error("ntfy error:", err);
  }
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const order = payload.record ?? payload;

    if (!order?.id) {
      return new Response(JSON.stringify({ error: "no_order" }), { status: 400 });
    }

    const { data: items, error } = await supabase
      .from("order_items")
      .select("name, quantity, price, total")
      .eq("order_id", order.id)
      .order("name");

    if (error) throw error;

    // Push instantané EN PREMIER : ne dépend pas du SMTP, donc fiable meme si l'email plante.
    await sendNtfy(order, items ?? []);

    const client = new SMTPClient({
      connection: {
        hostname: SMTP_HOSTNAME,
        port: SMTP_PORT,
        tls: true,
        auth: { username: SMTP_USERNAME, password: SMTP_PASSWORD },
      },
    });

    // 1) Notification gérante (toujours)
    await client.send({
      from: SMTP_USERNAME,
      to: OWNER_EMAIL,
      subject: `Nouvelle commande ${order.reference} — ${euro(Number(order.total))}`,
      html: ownerEmailHtml(order, items ?? []),
    });

    // 2) Reçu client (si email fourni)
    if (order.customer_email) {
      await client.send({
        from: SMTP_USERNAME,
        to: order.customer_email,
        subject: `Votre commande ${order.reference} — L'Épicerie du Coin`,
        html: clientEmailHtml(order, items ?? []),
      });
    }

    await client.close();

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
