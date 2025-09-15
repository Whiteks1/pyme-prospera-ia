import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Crown, Zap, Rocket } from "lucide-react";
import SubscribeButton from '@/components/SubscribeButton';
<SubscribeButton />
const plans = [
  {
    name: "Starter",
    price: "29",
    period: "/mes",
    icon: Zap,
    description: "Perfecto para empezar",
    features: [
      "30 posts/mes optimizados",
      "1 chatbot WhatsApp/Web",
      "Soporte por email",
      "Analytics básicos",
      "Plantillas de contenido",
      "Programación automática"
    ],
    cta: "Empezar gratis",
    popular: false
  },
  {
    name: "Pro",
    price: "59",
    period: "/mes",
    icon: Crown,
    description: "Más popular para pymes",
    features: [
      "100 posts/mes optimizados",
      "2 chatbots multi-canal",
      "Chat soporte 24h",
      "Analytics avanzados",
      "A/B testing de contenido",
      "Integración CRM básica",
      "Respuestas personalizadas",
      "Filtrado IA de leads"
    ],
    cta: "Probar 7 días gratis",
    popular: true
  },
  {
    name: "Growth",
    price: "99",
    period: "/mes",
    icon: Rocket,
    description: "Para empresas en crecimiento",
    features: [
      "200 posts/mes optimizados", 
      "5 chatbots multi-canal",
      "WhatsApp VIP + llamadas",
      "Analytics empresariales",
      "White-label disponible",
      "Integración CRM completa",
      "Automatizaciones avanzadas",
      "Onboarding personalizado",
      "Account manager dedicado"
    ],
    cta: "Contactar ventas",
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
            Planes y precios
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Elige el plan perfecto para tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Sin permanencia, sin configuración técnica. Cancela cuando quieras.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium border border-green-200">
            <CheckCircle className="h-4 w-4" />
            <span>7 días gratis en todos los planes - Sin tarjeta de crédito</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-medium border-2 transition-all duration-300 hover:shadow-large hover:-translate-y-1 ${
                  plan.popular 
                    ? 'border-primary shadow-glow scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-6 py-1 text-sm font-semibold">
                      Más Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.popular ? "cta" : "default"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/10 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            ¿Necesitas algo diferente?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tenemos planes Enterprise para empresas con necesidades específicas. 
            Múltiples marcas, integraciones personalizadas y soporte prioritario.
          </p>
          <Button variant="outline" size="lg">
            Contactar para Enterprise
          </Button>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-medium border border-green-200">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Garantía: Sin resultados en 7 días = 1er mes GRATIS</span>
          </div>
        </div>
      </div>
    </section>
  );
}