import { Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "40 cm de pur bonheur moelleux",
  "Tissu ultra-doux hypoallergénique",
  "Yeux pétillants cousus à la main",
  "Cœur brodé « Forever Yours »",
  "Senteur subtile de vanille (rechargeable)",
  "Édition limitée Saint-Valentin",
];

const ProductSection = () => {
  return (
    <section className="valentine-section" style={{ background: "var(--gradient-soft)" }}>
      <div className="valentine-container mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
        {/* Image */}
        <div className="flex-1">
          <div className="relative mx-auto w-64 md:w-80">
            <div className="absolute inset-0 rounded-3xl bg-valentine-rose/20 blur-2xl" />
            <div className="relative z-10 w-full rounded-3xl bg-gradient-to-br from-valentine-rose/20 to-valentine-pink/20 h-full flex items-center justify-center">
              <div className="text-center">
                <div className=" mb-4"><img src="/src/assets/images/peluche.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex-1">
          <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Rencontre{" "}
            <span className="valentine-gradient-text">Câlin Éternel</span>
          </h2>
          <p className="mb-6 font-display text-lg italic text-valentine-crimson">
            Ta complice romantique ultime.
          </p>

          <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Cette peluche unique n'est pas ordinaire&nbsp;: elle est conçue pour les amoureux.
            Une seule édition limitée pour la Saint-Valentin – parce que l'amour vrai est rare et précieux.
          </p>

          <ul className="space-y-3">
            {features.map((feat) => (
              <li key={feat} className="flex items-center gap-3 font-body text-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </span>
                {feat}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4">
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
      </div>
    </section>
  );
};

export default ProductSection;
