import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden px-4 md:px-8 lg:px-12 pb-16 pt-8 md:pb-24 md:pt-12"
      style={{ background: "var(--gradient-soft)" }}
    >
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-valentine-rose/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-valentine-pink/10 blur-3xl" />

      <div className="valentine-container relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-valentine-red/20 px-4 py-2">
            <Heart className="h-4 w-4 text-primary animate-heartbeat" fill="currentColor" />
            <span className="font-body text-sm font-medium text-primary">
              Édition limitée Saint-Valentin 2026
            </span>
          </div>

          <h1 className="mb-6 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            L'ourson qui fait fondre {" "}
            <span className="valentine-gradient-text">les coeurs </span>
          </h1>

          <p className="mb-2 text-muted-foreground ">
            Le cadeau parfait qui dit "Je t'aime" sans cesse et pour toujours.
          </p>

          <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-muted-foreground ">
            Découvrez <strong className="text-foreground">Ourson Eternel</strong>, la peluche unique
            qui murmure "je t'aime" à chaque étreinte. Douce, irrésistible, faite pour
            faire battre son cœur plus fort.
          </p>

          <Button variant="hero" size="lg" className="rounded-full px-10 py-6 text-base md:text-lg">
            <Heart className="mr-2 h-5 w-5" fill="currentColor" />
            Offrir maintenant
          </Button>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            🚚 Livraison express avant le 14 février !
          </p>
        </div>

        {/* Plush image with reflection */}
        <div className="relative flex-1">
          <div className="animate-gentle-float relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 m-auto h-80 w-80 rounded-full bg-valentine-pink/15 blur-3xl sm:h-96 sm:w-96 md:h-[28rem] md:w-[28rem]" />

            {/* Placeholder */}
            <div className="relative z-10 mx-auto w-80 sm:w-96 md:w-[26rem] drop-shadow-xl flex items-center justify-center  rounded-3xl h-96 sm:h-[26rem] md:h-[28rem]">
              <div className="text-center">
                <div className="text-8xl mb-4"><img src="/src/assets/images/peluche.png" alt="Câlin Éternel" /></div>
                {/* <p className="font-display text-lg font-bold text-foreground">Câlin Éternel</p> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
