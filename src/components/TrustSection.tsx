import { Badge } from "@/components/ui/badge";
import { Shield, MessageSquare, Calendar, Award, Lock, Zap } from "lucide-react";

const trustBadges = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Cumplimos normativa europea de protección de datos"
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    description: "Integración oficial certificada por Meta"
  },
  {
    icon: Calendar,
    title: "Sin Permanencia",
    description: "Cancela cuando quieras, sin penalizaciones"
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Disponibilidad garantizada para tu negocio"
  },
  {
    icon: Lock,
    title: "Datos Seguros",
    description: "Encriptación end-to-end en todas las comunicaciones"
  },
  {
    icon: Zap,
    title: "Soporte 24/7",
    description: "Equipo técnico disponible cuando lo necesites"
  }
];

const testimonials = [
  {
    name: "María González",
    role: "Propietaria, Restaurante Casa María",
    content: "En 2 semanas conseguimos 40% más reservas. El bot responde mejor que nosotros por las noches.",
    rating: 5
  },
  {
    name: "Carlos Ruiz", 
    role: "Director, Clínica Dental Sonrisa",
    content: "Automatizar las citas fue un gamechanger. Ya no perdemos pacientes por no contestar el teléfono.",
    rating: 5
  },
  {
    name: "Ana Martín",
    role: "Gerente, Tienda Moda Joven", 
    content: "Los posts que genera son mejores que los que hacíamos nosotros. Y nos ahorra 8 horas semanales.",
    rating: 5
  }
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
              Confianza y seguridad
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tu tranquilidad es nuestra prioridad
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cumplimos los más altos estándares de seguridad y calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-card rounded-xl p-6 shadow-soft border border-border text-center hover:shadow-medium transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Más de 500 pymes ya automatizan su marketing con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-medium border border-border hover:shadow-large transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <div key={starIndex} className="w-5 h-5 text-yellow-400 fill-current">
                      ⭐
                    </div>
                  ))}
                </div>
                
                <p className="text-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Pymes activas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15K+</div>
              <div className="text-sm text-muted-foreground">Posts generados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25K+</div>
              <div className="text-sm text-muted-foreground">Leads capturados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}