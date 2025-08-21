import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, Users, TrendingUp, Clock } from "lucide-react";

export default function CTAFinalSection() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Listo para 
            <span className="bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent"> vender más</span> 
            <span className="block">mientras trabajas menos?</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Únete a más de 500 pymes que ya automatizan su marketing y ventas. 
            Resultados visibles en 48 horas o te devolvemos el dinero.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-white mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Pymes confiando en nosotros</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-white mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">+85%</div>
              <div className="text-white/80 text-sm">Incremento en conversiones</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="h-8 w-8 text-white mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white mb-1">48h</div>
              <div className="text-white/80 text-sm">Para ver primeros resultados</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Comenzar prueba gratis
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="trust" 
              size="xl" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
            >
              Hablar con especialista
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>7 días gratis • Sin tarjeta</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Setup en 48h • Sin técnicos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 inline-flex items-center gap-2 bg-green-500/20 text-white px-6 py-3 rounded-full text-sm font-medium border border-green-400/30">
            <span className="text-green-400">✅</span>
            <span className="font-semibold">Garantía: Sin resultados en 7 días = 1er mes GRATIS</span>
          </div>
        </div>

        {/* Social Proof Stream */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
          <p className="text-white/70 text-sm text-center mb-4">Últimos clientes activados:</p>
          <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
            <span className="animate-pulse">🟢 Restaurante El Patio - hace 2h</span>
            <span className="animate-pulse delay-500">🟢 Clínica Dental Plus - hace 4h</span>
            <span className="animate-pulse delay-1000">🟢 Tienda Moda Carmen - hace 6h</span>
          </div>
        </div>
      </div>
    </section>
  );
}