// src/lib/analytics.ts
import posthog from "posthog-js";

const POSTHOG_KEY: string | undefined = import.meta.env.VITE_POSTHOG_KEY;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST || "https://us.posthog.com";


let initialized = false;

export function initPostHog(): void {
  if (initialized) return;

  if (!POSTHOG_KEY) {
    console.warn(
      "PostHog: falta VITE_POSTHOG_KEY. Configúrala en Vercel → Settings → Environment Variables."
    );
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: true,
    capture_pageview: false, // hacemos pageviews manuales
    capture_pageleave: true,
  });

  initialized = true;
}

export function identify(userId: string, props?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.identify(userId, props);
}

export function track(event: string, props?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.capture(event, props);
}

export function pageview(props?: Record<string, unknown>): void {
  if (!initialized) return;
  posthog.capture("$pageview", props);
}

// Opcional: para cerrar sesión / limpiar sesión de usuario
export function reset(): void {
  if (!initialized) return;
  posthog.reset();
}
