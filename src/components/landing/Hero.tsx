import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />

      {/* Content over video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Inventaires, marges,{" "}
            <span className="text-gradient">maîtrisez les pertes</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed">
            Gérez vos stocks, découvrez les vols, contrôlez vos coûts matières et pilotez votre rentabilité en une seule plateforme.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Button size="lg" className="gap-2 text-base px-8 bg-gradient-accent hover:opacity-90 text-white border-0">
              Démarrer gratuitement
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span className="text-sm text-white/70 font-medium">La solution #1 pour les restaurateurs</span>
          </div>

          <p className="text-sm text-white/60">
            ✓ 14 jours gratuits · ✓ Sans carte bancaire · ✓ Support inclus
          </p>
        </div>

        {/* Stats badge */}
        <div className="absolute bottom-8 left-8 bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border p-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground">Économies moyennes</p>
          <p className="text-2xl font-heading font-bold text-gradient">-18% coûts</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
