// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initPostHog, pageview } from "./lib/analytics";

// Inicializar PostHog y registrar el primer pageview
initPostHog();
pageview({ path: location.pathname + location.search });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
