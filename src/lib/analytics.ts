// src/lib/analytics.ts
import posthog from "posthog-js";

let initialized = false;

const PH_KEY = import.meta.env.VITE_POSTHOG_KEY;
const PH_HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

export function initAnalytics() {
  if (initialized) return;
  if (!PH_KEY) {
    if (import.meta.env.DEV) {
      console.warn("[PostHog] desactivado: falta VITE_POSTHOG_KEY");
    }
    return; // no inicializar sin token
  }
  posthog.init(PH_KEY, {
    api_host: PH_HOST,
    defaults: "2025-05-24", // pageviews por cambios de history para SPA
    autocapture: true,
  });
  initialized = true;
}

export function track(event: string, props?: Record<string, any>) {
  if (initialized) posthog.capture(event, props);
}

export function identify(id: string, props?: Record<string, any>) {
  if (initialized) posthog.identify(id, props);
}

export function pageview(props?: Record<string, any>) {
  if (initialized) posthog.capture("$pageview", props);
}

export function reset() {
  if (initialized) posthog.reset();
}

// Si vas a usar <PostHogProvider />, reexporta el cliente:
export { posthog };
