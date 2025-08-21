import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium">7 días gratis - Sin permanencia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              IA que gestiona tus 
              <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent"> redes y ventas</span>
              <span className="block">24/7</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Automatiza contenido + WhatsApp para pymes: más clientes, menos trabajo. 
              Genera 30 posts al mes y atiende leads mientras duermes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" className="group">
                Probar gratis 7 días
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="trust" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Ver demo (60s)
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-white/80 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                Sin configuración técnica
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                Resultados en 48h
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-glow border border-white/20">
              <img 
                src={dashboardMockup} 
                alt="Dashboard mostrando posts generados automáticamente y chat WhatsApp con leads calificados"
                className="w-full h-auto rounded-lg shadow-large"
                loading="eager"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg p-3 shadow-large animate-bounce delay-500">
                <span className="text-green-500 text-sm font-semibold">+47 leads hoy</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-lg p-3 shadow-large animate-bounce delay-1000">
                <span className="text-sm font-semibold">30 posts programados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}