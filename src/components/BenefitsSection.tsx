import { HeartHandshake, Clock, Tv, Infinity as InfinityIcon, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: HeartHandshake,
    title: "Émotion pure",
    desc: "Elle serre Câlin Éternel quand tu n'es pas là, se sentant aimée et protégée.",
  },
  {
    icon: Clock,
    title: "Souvenir gravé",
    desc: "Chaque câlin ravive votre histoire d'amour, bien après le 14 février.",
  },
  {
    icon: Tv,
    title: "Magie quotidienne",
    desc: "Parfaite pour les soirées Netflix, les voyages ou les moments complices.",
  },
  {
    icon: InfinityIcon,
    title: "Valeur infinie",
    desc: 'Un geste qui dit "Je pense à toi" sans effort, pour un bonheur qui ne s\'use pas.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="valentine-section bg-card">
      <div className="valentine-container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Offre-lui des frissons qui durent{" "}
            <span className="valentine-gradient-text">toute l'année</span>.
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Ton chéri(e) la chérira comme un trésor – parce que l'amour se nourrit de ces
            attentions qui touchent l'âme.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-valentine-blush transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <b.icon className="mb-4 h-10 w-10 text-valentine-pink" />
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="hero"
            size="lg"
            className="rounded-full px-10 py-6 text-base md:text-lg"
          >
            <Heart className="mr-2 h-5 w-5" fill="currentColor" />
            Offrir maintenant
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
