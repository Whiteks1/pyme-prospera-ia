import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
  // Dos opciones equivalentes para SPA (elige una):
  // Opción A (recomendada): activa defaults modernos que usan history_change para pageviews
  defaults: "2025-05-24",
  // Opción B: especificar explícitamente el modo SPA
  // capture_pageview: 'history_change',
  autocapture: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>
);
