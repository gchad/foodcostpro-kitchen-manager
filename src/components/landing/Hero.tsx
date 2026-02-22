import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-surface-warm" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-badge text-badge-foreground text-sm font-medium">
              🚀 La solution #1 pour les restaurateurs
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              Maîtrisez vos <span className="text-gradient">coûts matières</span> et boostez vos marges
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              FoodCostPro centralise la gestion de vos stocks, recettes, menus et marges en une seule plateforme intuitive. Gagnez du temps et augmentez votre rentabilité.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-base px-8">
                Démarrer gratuitement
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-base">
                <Play className="w-4 h-4" />
                Voir la démo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ✓ 14 jours d'essai gratuit · ✓ Sans carte bancaire · ✓ Support inclus
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroImage}
                alt="Dashboard FoodCostPro sur tablette dans une cuisine professionnelle"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm text-muted-foreground">Économies moyennes</p>
              <p className="text-2xl font-heading font-bold text-primary">-18% coûts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
