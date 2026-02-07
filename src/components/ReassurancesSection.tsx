import { Truck, RotateCcw, ShieldCheck, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  {
    icon: Truck,
    title: "Livraison sécurisée",
    desc: "Expédition immédiate depuis la France, traçable 24/7.",
  },
  {
    icon: RotateCcw,
    title: "Satisfaction 100%",
    desc: "30 jours pour retourner, sans questions.",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    desc: "Carte, PayPal, Apple Pay – vos données protégées.",
  },
  {
    icon: Leaf,
    title: "Éco-responsable",
    desc: "Fabriquée en Europe avec matériaux durables.",
  },
];

const ReassuranceSection = () => {
  return (
    <section className="valentine-section bg-card">
      <div className="valentine-container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          Paix d'esprit garantie pour ton{" "}
          <span className="valentine-gradient-text">geste d'amour</span>.
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center font-body text-muted-foreground">
          Des milliers d'amoureux comblés avant toi. Ton cadeau arrive parfait, pile à l'heure.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-background p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-valentine-blush">
                <item.icon className="h-7 w-7 text-valentine-crimson" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
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

export default ReassuranceSection;
