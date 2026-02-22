import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface-warm" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-accent opacity-10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
            La solution #1 pour les restaurateurs
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight">
            Maîtrisez vos{" "}
            <span className="text-gradient">coûts matières</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Stocks, recettes, menus et marges en une seule plateforme. Gagnez du temps et boostez votre rentabilité.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
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
            ✓ 14 jours gratuits · ✓ Sans carte bancaire · ✓ Support inclus
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border p-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground">Économies moyennes</p>
            <p className="text-2xl font-heading font-bold text-gradient">-18% coûts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
