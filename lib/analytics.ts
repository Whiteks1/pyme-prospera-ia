// lib/analytics.ts
import posthog from "posthog-js";

// Función para inicializar PostHog
export const initPostHog = () => {
  // Solo ejecutar en el cliente (navegador)
  if (typeof window === "undefined") return;

  // Verificar si PostHog ya está inicializado
  if (!posthog.__initialized) {
    posthog.init(
      import.meta.env.VITE_POSTHOG_KEY, // Tu API key de PostHog
      {
        api_host:
          import.meta.env.VITE_POSTHOG_HOST || "https://app.posthog.com",
        capture_pageview: true,
        autocapture: true,
        capture_pageleave: true,
        session_recording: {
          maskAllInputs: false,
        },
      }
    );
  }
};

// Exportar PostHog para uso directo
export default posthog;
