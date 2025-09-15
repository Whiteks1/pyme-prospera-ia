// api/checkout.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import Stripe from "stripe";

// Asegúrate de tener STRIPE_SECRET_KEY y STRIPE_PRICE_ID en Vercel → Project → Settings → Environment Variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20" as any,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    // req.body en Vercel suele venir ya parseado si mandas Content-Type: application/json
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const email = body?.email as string | undefined;

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      customer_email: email, // opcional: si lo recoges en un form
      // Si quieres trial por código (en lugar de configurarlo en el precio):
      // subscription_data: { trial_period_days: 7 },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/pricing`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return res.status(200).json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err?.message || err);
    return res.status(500).json({ error: "Unable to create checkout session" });
  }
}
