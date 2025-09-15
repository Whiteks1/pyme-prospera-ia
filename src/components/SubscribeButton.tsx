import React, { useState } from "react";

export default function SubscribeButton() {
  const [loading, setLoading] = useState(false);

  const goCheckout = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Si tienes un input de email, envíalo aquí:
        body: JSON.stringify({ email: undefined }),
      });
      const data = await resp.json();
      if (data?.url) window.location.assign(data.url);
      else alert("No se pudo iniciar el pago");
    } catch {
      alert("Error iniciando el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={goCheckout} disabled={loading}>
      {loading ? "Redirigiendo…" : "Suscribirme (29 €/mes)"}
    </button>
  );
}
