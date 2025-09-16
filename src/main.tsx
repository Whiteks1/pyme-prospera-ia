// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initAnalytics, pageview } from "./lib/analytics";

import { BrowserRouter, useLocation } from "react-router-dom";

function PageViewTracker() {
  const location = useLocation();
  React.useEffect(() => {
    pageview({ path: location.pathname + location.search });
  }, [location]);
  return null;
}

// Inicializa PostHog ANTES de renderizar
initAnalytics();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageViewTracker />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
