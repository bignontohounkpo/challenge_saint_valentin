import { Heart, Gift, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="valentine-section relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Decorative */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-primary-foreground/5 blur-2xl" />

      <div className="valentine-container relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Seulement 49€
        </h2>
        <p className="mb-2 font-display text-xl text-primary-foreground/80">
          L'offre Saint-Valentin qui fait chavirer les cœurs.
        </p>
        <p className="mb-10 font-body text-primary-foreground/60">
          <span className="text-primary-foreground/40 line-through">69€</span>{" "}
          <span className="font-semibold text-primary-foreground">49€</span> — Offre flash limitée
        </p>

        <div className="mx-auto mb-10 grid max-w-xl gap-4 sm:grid-cols-3">
          {[
            { icon: Gift, text: 'Carte "Mon câlin pour la vie" gratuite' },
            { icon: Truck, text: "Livraison express gratuite" },
            { icon: Star, text: "500 peluches seulement" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-2 rounded-xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
            >
              <item.icon className="h-6 w-6 text-primary-foreground" />
              <p className="font-body text-sm text-primary-foreground/90">{item.text}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="rounded-full bg-primary-foreground px-12 py-7 font-display text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-primary-foreground/90"
        >
          <Heart className="mr-2 h-5 w-5" fill="currentColor" />
          Commander maintenant
        </Button>
        <p className="mt-4 font-body text-sm text-primary-foreground/60">
          Ne rate pas sa joie infinie. Stock limité !
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
