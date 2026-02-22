const stats = [
  { value: "2 500+", label: "Restaurants équipés" },
  { value: "-18%", label: "Réduction du food cost" },
  { value: "5h", label: "Gagnées par semaine" },
  { value: "98%", label: "Taux de satisfaction" },
];

const Stats = () => {
  return (
    <section id="stats" className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
