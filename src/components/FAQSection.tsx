import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para usar la plataforma?",
    answer: "Absolutamente no. Nuestro equipo se encarga del onboarding completo en 48 horas. Solo necesitas decirnos sobre tu negocio y nosotros configuramos todo: el bot, las plantillas de respuesta y los primeros posts. Es literalmente plug & play."
  },
  {
    question: "¿En qué redes sociales puedo publicar?",
    answer: "Actualmente soportamos Instagram, Facebook, LinkedIn y Twitter. Próximamente añadiremos TikTok y YouTube Shorts. El contenido se adapta automáticamente al formato y audiencia de cada red social."
  },
  {
    question: "¿Cómo funciona la calificación automática de leads?",
    answer: "Nuestro bot usa IA para analizar las respuestas de los clientes y detectar intención de compra real. Filtra curiosos, competencia y spam. Solo te notifica cuando hay un cliente con alta probabilidad de conversión, ahorrándote tiempo valioso."
  },
  {
    question: "¿Puedo personalizar las respuestas del chatbot?",
    answer: "Sí, completamente. Durante el onboarding configuramos respuestas específicas para tu sector y tono de marca. Además, puedes añadir respuestas personalizadas para preguntas frecuentes de tu negocio en cualquier momento."
  },
  {
    question: "¿Qué pasa si el bot no sabe responder algo?",
    answer: "El bot está entrenado para reconocer cuando una consulta requiere intervención humana. En esos casos, deriva la conversación a tu equipo con toda la información recopilada, para que puedas continuar desde donde lo dejó."
  },
  {
    question: "¿Cómo garantizan la calidad del contenido generado?",
    answer: "Nuestra IA está entrenada específicamente en marketing para pymes. Analiza tu sector, competencia y audiencia para crear contenido relevante. Además, puedes revisar y aprobar posts antes de publicación si lo prefieres."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, no hay permanencia. Puedes cancelar tu suscripción cuando quieras desde tu panel de control. Si cancelas, conservas acceso hasta el final del período pagado."
  },
  {
    question: "¿Ofrecen integración con mi CRM actual?",
    answer: "En planes Pro y Growth incluimos integración con los CRMs más populares (HubSpot, Salesforce, Pipedrive, etc.). Los leads capturados se sincronizan automáticamente con toda su información de contacto y conversación."
  }
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
            Preguntas frecuentes
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre nuestra plataforma de automatización
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:soporte@tuempresa.com" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                📧 soporte@tuempresa.com
              </a>
              <a 
                href="https://wa.me/34600123456" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                📱 WhatsApp soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}