import { UtensilsCrossed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-heading font-bold text-background">FoodCostPro</span>
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              La plateforme de gestion des coûts matières pour les professionnels de la restauration.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#features" className="hover:text-background transition-colors">Fonctionnalités</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Intégrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><a href="#" className="hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Guide du food cost</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Centre d'aide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>contact@foodcostpro.fr</li>
              <li>01 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center">
          <p className="text-sm text-background/40">
            © 2026 FoodCostPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
