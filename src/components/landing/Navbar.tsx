import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <span className="text-xl font-heading font-bold text-foreground tracking-tight">FoodCostPro</span>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fonctionnalités</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Tarifs</a>
          <a href="#stats" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Résultats</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Se connecter</Button>
          <Button size="sm" className="bg-gradient-accent hover:opacity-90 text-white border-0">Essai gratuit</Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3 animate-fade-in">
          <a href="#features" className="block text-sm text-muted-foreground">Fonctionnalités</a>
          <a href="#pricing" className="block text-sm text-muted-foreground">Tarifs</a>
          <a href="#stats" className="block text-sm text-muted-foreground">Résultats</a>
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" className="flex-1">Se connecter</Button>
            <Button size="sm" className="flex-1">Essai gratuit</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
