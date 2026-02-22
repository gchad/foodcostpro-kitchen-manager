import { Package, TrendingUp, ClipboardList, ChefHat, BookOpen, BarChart3 } from "lucide-react";

const features = [
  { icon: Package, title: "Gestion des stocks", description: "Suivez vos stocks en temps réel, gérez les entrées et sorties, et recevez des alertes de réapprovisionnement." },
  { icon: TrendingUp, title: "Analyse des marges", description: "Calculez automatiquement vos coûts matières et marges par plat pour optimiser votre rentabilité." },
  { icon: ClipboardList, title: "Inventaires simplifiés", description: "Réalisez vos inventaires en quelques clics grâce à une interface mobile intuitive et rapide." },
  { icon: ChefHat, title: "Fiches recettes", description: "Créez des fiches techniques détaillées avec coûts, portions et instructions pour votre équipe." },
  { icon: BookOpen, title: "Gestion des menus", description: "Composez vos menus en intégrant vos recettes et visualisez instantanément la marge par menu." },
  { icon: BarChart3, title: "Tableaux de bord", description: "Pilotez votre activité avec des dashboards clairs : CA, food cost, pertes et tendances." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">Fonctionnalités</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Tout ce dont votre restaurant a besoin
          </h2>
          <p className="text-muted-foreground text-lg">
            Une solution complète pour maîtriser vos coûts et piloter votre cuisine avec précision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-foreground/10 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-accent group-hover:text-primary-foreground transition-all">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
