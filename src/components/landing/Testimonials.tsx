import chefImg from "@/assets/testimonial-chef.jpg";
import comptableImg from "@/assets/testimonial-comptable.jpg";
import serveurImg from "@/assets/testimonial-serveur.jpg";
import geranteImg from "@/assets/testimonial-gerante.jpg";
import directeurImg from "@/assets/testimonial-directeur.jpg";
import patissiereImg from "@/assets/testimonial-patissiere.jpg";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Thomas Lefèvre",
    role: "Chef exécutif",
    restaurant: "Le Bistrot Parisien",
    image: chefImg,
    quote:
      "Depuis qu'on utilise cet outil, j'ai une visibilité totale sur mes coûts matières. On a réduit nos pertes de 22% en 3 mois. C'est devenu indispensable en cuisine.",
  },
  {
    name: "Sophie Martin",
    role: "Comptable",
    restaurant: "Groupe Brasseries du Sud",
    image: comptableImg,
    quote:
      "Les rapports automatiques me font gagner une journée complète par mois. Les marges sont claires, les écarts identifiés en un clic. Mon cabinet adore.",
  },
  {
    name: "Lucas Dupont",
    role: "Responsable de salle",
    restaurant: "La Belle Époque",
    image: serveurImg,
    quote:
      "Les inventaires qui prenaient 3 heures se font maintenant en 45 minutes. L'équipe est plus motivée et on détecte les problèmes tout de suite.",
  },
  {
    name: "Marie Rousseau",
    role: "Gérante",
    restaurant: "Café des Halles",
    image: geranteImg,
    quote:
      "On a enfin une vision claire de notre rentabilité par plat. J'ai supprimé 4 plats qui nous coûtaient de l'argent sans le savoir. Résultat : +15% de marge brute.",
  },
  {
    name: "Antoine Girard",
    role: "Directeur des opérations",
    restaurant: "Les 3 Fourchettes",
    image: directeurImg,
    quote:
      "Gérer 3 restaurants avec un seul tableau de bord, c'était notre rêve. Aujourd'hui c'est notre quotidien. Le temps gagné est colossal.",
  },
  {
    name: "Camille Perrin",
    role: "Cheffe pâtissière",
    restaurant: "Maison Dorée",
    image: patissiereImg,
    quote:
      "Le suivi des matières premières en pâtisserie demande une précision extrême. Cet outil me donne exactement ça, sans prise de tête.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-3">
            Ils en parlent <span className="text-gradient">mieux que nous</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Restaurateurs, comptables et équipes de salle : ils ont transformé leur gestion au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="font-heading font-bold text-xl">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.role} · {t.restaurant}
                  </p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <blockquote className="text-foreground/80 leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
