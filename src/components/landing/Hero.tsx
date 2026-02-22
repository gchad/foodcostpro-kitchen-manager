import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-surface-warm" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-accent opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 px-4 space-y-5">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight">
            Inventaires, marges,{" "}
            <span className="text-gradient">maîtrisez les pertes</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Gérez vos stocks, découvrez les vols, contrôlez vos coûts matières et pilotez votre rentabilité en une seule plateforme.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Button size="lg" className="gap-2 text-base px-8">
              Démarrer gratuitement
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="text-sm text-muted-foreground font-medium">La solution #1 pour les restaurateurs</span>
          </div>

          <p className="text-sm text-muted-foreground">
            ✓ 14 jours gratuits · ✓ Sans carte bancaire · ✓ Support inclus
          </p>
        </div>

        <div className="relative w-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative overflow-hidden">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border p-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm text-muted-foreground">Économies moyennes</p>
            <p className="text-2xl font-heading font-bold text-gradient">-18% coûts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
