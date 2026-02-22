import { TrendingDown, BarChart3, Package, Euro, ChefHat } from "lucide-react";
import screenDashboard from "@/assets/screen-dashboard.jpg";
import screenInventory from "@/assets/screen-inventory.jpg";
import screenMargins from "@/assets/screen-margins.jpg";
import screenRecipes from "@/assets/screen-recipes.jpg";

const showcases = [
  {
    label: "Tableaux de bord",
    title: "Analysez vos coûts en un coup d'œil",
    description:
      "Graphiques de marges, évolution des stocks, répartition des dépenses : tout est visualisé pour prendre les bonnes décisions instantanément.",
    image: screenDashboard,
    icon: BarChart3,
    stats: [
      { value: "-22%", label: "de pertes en moyenne" },
      { value: "3x", label: "plus rapide qu'Excel" },
    ],
  },
  {
    label: "Inventaires",
    title: "Vos stocks sous contrôle total",
    description:
      "Inventaire simplifié, alertes de seuil, historique complet. Détectez les écarts et les anomalies avant qu'ils ne vous coûtent cher.",
    image: screenInventory,
    icon: Package,
    stats: [
      { value: "45 min", label: "par inventaire au lieu de 3h" },
      { value: "100%", label: "traçabilité" },
    ],
  },
  {
    label: "Marges & Rentabilité",
    title: "Renouez avec la rentabilité",
    description:
      "Identifiez vos plats les plus rentables, éliminez ceux qui vous coûtent de l'argent et optimisez vos prix. Reprenez le contrôle de vos marges pour sourire à chaque encaissement.",
    image: screenMargins,
    icon: Euro,
    stats: [
      { value: "+15%", label: "de marge brute en moyenne" },
      { value: "2x", label: "moins de pertes cachées" },
    ],
  },
  {
    label: "Recettes & Ingrédients",
    title: "Générez vos fiches recettes en un clic",
    description:
      "Créez des fiches techniques détaillées avec coûts, grammages et étapes. Vos chefs suivent chaque recette sur leur téléphone, directement en cuisine, pour un résultat parfait à chaque service.",
    image: screenRecipes,
    icon: ChefHat,
    stats: [
      { value: "0 gaspillage", label: "grâce aux dosages précis" },
      { value: "100+", label: "recettes générées en 1 mois" },
    ],
  },
];

const ProductShowcase = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
            <TrendingDown className="w-4 h-4" />
            Réduisez vos coûts, augmentez vos marges
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight">
            Des outils puissants,{" "}
            <span className="text-gradient">simples à utiliser</span>
          </h2>
        </div>

        <div className="space-y-16">
          {showcases.map((item, index) => {
            const Icon = item.icon;
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={item.label}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12`}
              >
                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <div className="flex gap-8 pt-2">
                    {item.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-heading font-bold text-gradient">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
