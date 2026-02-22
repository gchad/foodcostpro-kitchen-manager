import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Idéal pour un petit restaurant",
    features: ["1 établissement", "Gestion des stocks", "Fiches recettes illimitées", "Inventaires mensuels", "Support email"],
    popular: false,
  },
  {
    name: "Pro",
    price: "99",
    description: "Pour les restaurants ambitieux",
    features: ["Jusqu'à 3 établissements", "Tout Starter +", "Analyse des marges avancée", "Gestion des menus", "Tableaux de bord", "Support prioritaire"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Pour les groupes de restauration",
    features: ["Établissements illimités", "Tout Pro +", "API & intégrations", "Formation dédiée", "Account manager", "SLA garanti"],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-16 bg-surface-warm">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gradient uppercase tracking-wider mb-3">Tarifs</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Un plan adapté à chaque restaurant
          </h2>
          <p className="text-muted-foreground text-lg">
            Commencez gratuitement pendant 14 jours, sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-card shadow-xl scale-105"
                  : "bg-card border border-border hover:shadow-lg"
              }`}
              style={plan.popular ? { border: '2px solid transparent', backgroundClip: 'padding-box', boxShadow: '0 0 0 2px rgba(99,102,241,0.3), 0 25px 50px -12px rgba(0,0,0,0.15)' } : {}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-accent text-primary-foreground text-xs font-semibold">
                  Populaire
                </div>
              )}

              <h3 className="text-xl font-heading font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.price !== "Sur devis" ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-heading font-extrabold">{plan.price}€</span>
                    <span className="text-muted-foreground">/mois</span>
                  </div>
                ) : (
                  <span className="text-2xl font-heading font-bold">{plan.price}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                {plan.price === "Sur devis" ? "Nous contacter" : "Commencer l'essai"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
