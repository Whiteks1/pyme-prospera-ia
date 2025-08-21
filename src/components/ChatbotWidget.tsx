import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Download } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInitial, setShowInitial] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show initial popup after 30 seconds
    const timer = setTimeout(() => {
      setShowInitial(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp.trim()) {
      setSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("WhatsApp submitted:", whatsapp);
    }
  };

  if (!isOpen && !showInitial) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-glow animate-pulse"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Minimized button when showing initial popup */}
        {showInitial && !isOpen && (
          <div className="mb-4">
            <div className="bg-white rounded-2xl p-4 shadow-large border border-border max-w-xs relative animate-bounce">
              <button
                onClick={() => setShowInitial(false)}
                className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center text-xs"
              >
                <X className="h-3 w-3" />
              </button>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-2 flex-shrink-0">
                  <Download className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">
                    ¿Más leads? 5 plantillas gratis ↓
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Descarga plantillas de WhatsApp que convierten
                  </p>
                </div>
              </div>
              
              <Button
                onClick={() => {
                  setIsOpen(true);
                  setShowInitial(false);
                }}
                variant="cta"
                size="sm"
                className="w-full mt-3 text-xs"
              >
                Descargar gratis
              </Button>
            </div>
          </div>
        )}

        {/* Main Widget */}
        <div className={`bg-white rounded-2xl shadow-glow border border-border transition-all duration-300 ${
          isOpen ? 'w-80 h-96' : 'w-14 h-14 rounded-full'
        }`}>
          {isOpen ? (
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="bg-primary text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Download className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Marketing Bot</p>
                    <p className="text-xs text-white/80">🟢 Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 p-4 overflow-y-auto">
                {!submitted ? (
                  <div className="space-y-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm text-foreground mb-2">
                        👋 ¡Hola! Te regalo 5 plantillas de WhatsApp que aumentan conversiones hasta 300%
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-3 border border-border">
                      <p className="text-sm text-foreground font-semibold mb-2">
                        Incluye plantillas para:
                      </p>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>✅ Captar leads en redes sociales</li>
                        <li>✅ Seguimiento de cotizaciones</li>
                        <li>✅ Recuperar carritos abandonados</li>
                        <li>✅ Confirmar citas/reservas</li>
                        <li>✅ Solicitar reseñas</li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                      <p className="text-xs text-primary font-semibold mb-2">
                        ⚡ Descarga instantánea por WhatsApp
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Solo necesito tu número para enviarte las plantillas
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-center">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-green-500 text-2xl mb-2">✅</div>
                      <p className="text-sm font-semibold text-green-700 mb-1">
                        ¡Plantillas enviadas!
                      </p>
                      <p className="text-xs text-green-600">
                        Revisa tu WhatsApp en los próximos minutos
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
                      <p className="text-xs text-primary font-semibold mb-2">
                        💡 ¿Te gustaría automatizar esto?
                      </p>
                      <p className="text-xs text-muted-foreground mb-3">
                        Nuestro bot puede enviar estas plantillas automáticamente
                      </p>
                      <Button variant="cta" size="sm" className="text-xs w-full">
                        Ver demo gratis
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form */}
              {!submitted && (
                <div className="p-4 border-t border-border">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="tel"
                      placeholder="+34 600 123 456"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="text-sm"
                    />
                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="sm" 
                      className="w-full text-sm"
                      disabled={!whatsapp.trim()}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Enviar plantillas gratis
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    🔒 No spam. Solo las plantillas prometidas.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-full bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <MessageCircle className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}