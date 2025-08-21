import { Clock, Smartphone, DollarSign, Bot, Zap, Target } from "lucide-react";

const problems = [
  {
    icon: Clock,
    problem: "Mensajes sin responder",
    solution: "Bot que atiende 24/7",
    description: "Nunca más pierdas un cliente por no responder a tiempo"
  },
  {
    icon: Smartphone,
    problem: "Publicar es difícil",
    solution: "30 posts/mes con IA",
    description: "Contenido profesional adaptado a tu nicho automáticamente"
  },
  {
    icon: DollarSign,
    problem: "Leads no calificados",
    solution: "Filtro IA compradores serios",
    description: "Solo hablas con clientes listos para comprar"
  }
];

export default function ProblemSolutionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            ¿Cansado de perder clientes por no atender 24/7?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatiza lo que más tiempo te quita y enfócate en hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative group">
                {/* Connection Line (hidden on mobile) */}
                {index < problems.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-full -translate-y-1/2 z-10" />
                )}

                <div className="bg-gradient-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-all duration-300 group-hover:-translate-y-2 border border-border">
                  {/* Problem */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      ❌ {item.problem}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-primary rounded-full p-2">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {index === 0 && <Bot className="h-6 w-6 text-primary" />}
                      {index === 1 && <Zap className="h-6 w-6 text-primary" />}
                      {index === 2 && <Target className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      ✅ {item.solution}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Atención automática</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Más conversiones</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">10h</div>
              <div className="text-sm text-muted-foreground">Ahorradas por semana</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">48h</div>
              <div className="text-sm text-muted-foreground">Para ver resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}