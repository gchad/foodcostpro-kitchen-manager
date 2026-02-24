import ContactFormDialog from "./ContactFormDialog";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-icon.svg" alt="FoodCostPro" className="w-6 h-6 brightness-0 invert" />
              <span className="text-lg font-heading font-bold text-primary-foreground">FoodCostPro</span>
            </div>
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              La plateforme de gestion des coûts matières pour les professionnels de la restauration.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Produit</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Fonctionnalités</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Tarifs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Intégrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Guide du food cost</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Centre d'aide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/50">
              <li>contact@foodcostpro.fr</li>
              <li>01 23 45 67 89</li>
              <li>
                <ContactFormDialog>
                  <button className="hover:text-primary-foreground transition-colors underline underline-offset-2">
                    Nous contacter
                  </button>
                </ContactFormDialog>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-sm text-primary-foreground/30">
            © 2026 FoodCostPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
