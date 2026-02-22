const clients = [
  "Le Bistrot Parisien",
  "Chez Marcel",
  "La Belle Époque",
  "Brasserie du Port",
  "L'Atelier Gourmand",
  "Le Petit Comptoir",
  "Maison Duval",
  "Les Halles",
];

const ClientLogos = () => {
  return (
    <section className="py-10 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <span
              key={name}
              className="text-lg font-heading font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
