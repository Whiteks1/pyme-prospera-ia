import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Play, Send, CheckCircle, ArrowRight } from "lucide-react";
import chatbotDemo from "@/assets/chatbot-demo.jpg";

export default function DemoSection() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
            Demo interactiva
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ve la magia en acción (60 segundos)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mira cómo generamos 5 posts para un restaurante y capturamos un lead real con nuestro bot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Video Demo */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-6 shadow-large border border-border overflow-hidden">
              <div className="aspect-video bg-primary/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                <img 
                  src={chatbotDemo} 
                  alt="Demo del chatbot capturando leads de restaurante"
                  className="w-full h-full object-cover rounded-lg"
                />
                
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                  <Button size="lg" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    <Play className="h-6 w-6 mr-2" />
                    Ver demo completa
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">5 posts generados para "Restaurante El Patio"</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Bot captura lead y agenda reserva</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">Cliente confirmado en menos de 2 minutos</span>
                </div>
              </div>

              {/* Floating success indicators */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full px-3 py-1 text-xs font-semibold animate-pulse">
                +1 Lead
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-large border border-border">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                ¿Quieres una demo personalizada?
              </h3>
              <p className="text-muted-foreground">
                Te enviamos una demo adaptada a tu negocio en menos de 24 horas
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  WhatsApp *
                </label>
                <Input
                  type="tel"
                  placeholder="+34 600 123 456"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="tu@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <h4 className="font-semibold text-primary mb-2 text-sm">
                  Tu demo personalizada incluirá:
                </h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>10 posts adaptados a tu sector</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Bot configurado para tu tipo de negocio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Plantillas de respuestas personalizadas</span>
                  </div>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="lg" 
                className="w-full group"
                disabled={!email || !whatsapp}
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar demo personalizada
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              📧 Recibirás tu demo en 24h • 🔒 No spam, lo prometemos
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">Demos enviadas esta semana:</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[
              "Restaurante Casa Pepe - ✅ Activado",
              "Clínica Dental Sonrisa - ✅ Activado", 
              "Tienda Moda Joven - ✅ Activado"
            ].map((demo, index) => (
              <div key={index} className="text-sm text-primary font-medium">
                {demo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}