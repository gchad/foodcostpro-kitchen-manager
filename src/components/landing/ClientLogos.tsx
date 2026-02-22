import logoBistrot from "@/assets/logo-bistrot.png";
import logoMarcel from "@/assets/logo-marcel.png";
import logoBelleEpoque from "@/assets/logo-belle-epoque.png";
import logoBrasserie from "@/assets/logo-brasserie.png";
import logoAtelier from "@/assets/logo-atelier.png";
import logoComptoir from "@/assets/logo-comptoir.png";
import logoDuval from "@/assets/logo-duval.png";
import logoHalles from "@/assets/logo-halles.png";
import logoMG from "@/assets/logo-mauvais-garcons.svg";

const clients = [
  { name: "Les Mauvais Garçons", logo: logoMG, invert: true },
  { name: "Le Bistrot Parisien", logo: logoBistrot },
  { name: "Chez Marcel", logo: logoMarcel },
  { name: "La Belle Époque", logo: logoBelleEpoque },
  { name: "Brasserie du Port", logo: logoBrasserie },
  { name: "L'Atelier Gourmand", logo: logoAtelier },
  { name: "Le Petit Comptoir", logo: logoComptoir },
  { name: "Maison Duval", logo: logoDuval },
  { name: "Les Halles", logo: logoHalles },
];

const ClientLogos = () => {
  return (
    <section className="py-10 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
          Ils nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className={`h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 ${(client as any).invert ? "invert dark:invert-0" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
