import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MessageCircle, 
  TrendingUp, 
  Bot, 
  Smartphone, 
  Clock, 
  CheckCircle,
  Star
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
            Servicios principales
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dos herramientas, infinitas oportunidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatiza tu marketing y ventas con IA especializada en pymes
          </p>
        </div>

        <Tabs defaultValue="social" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 max-w-md mx-auto">
            <TabsTrigger value="social" className="text-sm">Social Manager</TabsTrigger>
            <TabsTrigger value="chatbot" className="text-sm">Chatbot Ventas</TabsTrigger>
          </TabsList>

          <TabsContent value="social" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Social Manager AI</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  30 posts profesionales cada mes, sin esfuerzo
                </h3>

                <p className="text-lg text-muted-foreground mb-8">
                  Nuestra IA crea contenido optimizado para tu sector, programa publicaciones 
                  y analiza qué funciona mejor para maximizar tu alcance.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Contenido adaptado a tu nicho y audiencia",
                    "Programación automática en mejores horarios",
                    "Hashtags optimizados por IA para máximo alcance",
                    "Análisis de rendimiento y optimización continua"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant="cta" size="lg" className="group">
                  Empezar ahora
                  <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-large border border-border">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-foreground">Posts programados</h4>
                    <Badge variant="secondary">30 este mes</Badge>
                  </div>

                  {[
                    { platform: "Instagram", time: "09:00", content: "¡Nuevo menú de temporada! 🍂", engagement: "+15%" },
                    { platform: "Facebook", time: "13:00", content: "Mesa para 2? Reserva ya 📞", engagement: "+23%" },
                    { platform: "LinkedIn", time: "18:00", content: "Casos de éxito: Cliente feliz...", engagement: "+31%" }
                  ].map((post, index) => (
                    <div key={index} className="bg-background rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-primary">{post.platform}</span>
                        <span className="text-xs text-muted-foreground">{post.time}</span>
                      </div>
                      <p className="text-sm text-foreground mb-2">{post.content}</p>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-xs text-green-500 font-medium">{post.engagement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-6 shadow-large border border-border">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Conversación WhatsApp</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">En línea</Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-background rounded-lg p-3 border border-border">
                        <div className="text-xs text-muted-foreground mb-1">Cliente - 14:30</div>
                        <p className="text-sm">¿Tienen mesa para mañana a las 20h?</p>
                      </div>
                      
                      <div className="bg-primary/10 rounded-lg p-3 ml-6">
                        <div className="text-xs text-primary mb-1">Bot - 14:31</div>
                        <p className="text-sm">¡Hola! Sí tenemos disponibilidad. ¿Para cuántas personas sería?</p>
                      </div>

                      <div className="bg-background rounded-lg p-3 border border-border">
                        <div className="text-xs text-muted-foreground mb-1">Cliente - 14:32</div>
                        <p className="text-sm">Para 4 personas</p>
                      </div>

                      <div className="bg-primary/10 rounded-lg p-3 ml-6">
                        <div className="text-xs text-primary mb-1">Bot - 14:32</div>
                        <p className="text-sm">Perfecto! Te he reservado para 4 personas mañana a las 20h. ¿Podrías confirmarme tu nombre y teléfono?</p>
                        <div className="mt-2 p-2 bg-green-100 rounded text-xs text-green-700">
                          ✅ Lead calificado: Reserva confirmada
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Bot className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Chatbot Inteligente</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Atiende WhatsApp, web e Instagram mientras duermes
                </h3>

                <p className="text-lg text-muted-foreground mb-8">
                  Responde consultas, califica leads y agenda citas automáticamente. 
                  Solo te notifica cuando hay un cliente listo para comprar.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Respuestas instantáneas en WhatsApp, web e Instagram",
                    "Califica leads automáticamente por intención de compra",
                    "Agenda citas y reservas sin intervención humana",
                    "Notificaciones inteligentes solo para oportunidades reales"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Respuesta promedio: 2.3 segundos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.9/5 satisfacción</span>
                  </div>
                </div>

                <Button variant="cta" size="lg" className="group">
                  Configurar bot
                  <MessageCircle className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}