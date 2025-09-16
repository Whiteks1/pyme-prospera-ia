import posthog from "posthog-js";

let initialized = false;

const ENABLED = import.meta.env.VITE_POSTHOG_ENABLED !== "false";
const KEY = import.meta.env.VITE_POSTHOG_KEY;
const HOST = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

export function initAnalytics() {
  if (initialized) return;
  try {
    if (!ENABLED || !KEY) {
      if (import.meta.env.DEV)
        console.warn("[PostHog] OFF (faltan vars o disabled)");
      return;
    }
    posthog.init(KEY, {
      api_host: HOST,
      // usa UNA de estas dos (comenta la otra)
      defaults: "2025-05-24", // SPA moderno
      // capture_pageview: 'history_change', // alternativo
      autocapture: true,
    });
    initialized = true;
  } catch (e) {
    console.error("[PostHog init failed]", e);
  }
}

export function track(name: string, props?: Record<string, any>) {
  if (initialized) posthog.capture(name, props);
}
export function pageview(props?: Record<string, any>) {
  if (initialized) posthog.capture("$pageview", props);
}
export function identify(id: string, props?: Record<string, any>) {
  if (initialized) posthog.identify(id, props);
}
export function reset() {
  if (initialized) posthog.reset();
}
