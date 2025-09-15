// api/checkout.ts  (Vercel Node Function para Vite/React)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20', // o la más reciente disponible en tu cuenta
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      priceId,             // opcional, si no lo pasas tomamos env
      customer_email,      // opcional
      success_url,         // opcional
      cancel_url,          // opcional
    } = (req.body || {}) as {
      priceId?: string;
      customer_email?: string;
      success_url?: string;
      cancel_url?: string;
    };

    const baseUrl =
      process.env.PUBLIC_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://avantisia.vercel.app';

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId || process.env.STRIPE_PRICE_ID!, // <-- configura STRIPE_PRICE_ID en Vercel
          quantity: 1,
        },
      ],
      success_url: success_url || `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${baseUrl}/pricing`,
      customer_email,
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: process.env.STRIPE_TRIAL_DAYS
          ? Number(process.env.STRIPE_TRIAL_DAYS)
          : undefined,
      },
      metadata: { plan: 'Plan PyME' },
    });

    return res.status(200).json({ url: session.url });
  } catch (e: any) {
    console.error('checkout_error', e?.message || e);
    return res.status(500).json({ error: e?.message || 'Internal error' });
  }
}
