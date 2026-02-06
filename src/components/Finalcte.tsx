import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
// import CountdownTimer from "@/components/CountdownTimer";

const FinalCTA = () => {
  const peluchesRestantes = 147;

  return (
    <section className="valentine-section relative overflow-hidden bg-foreground">
      {/* Decorative */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-valentine-pink/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="valentine-container relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2">
          <span className="animate-heartbeat text-lg">❤️</span>
          <span className="font-body text-sm font-medium text-primary-foreground/80">
            Il reste seulement {peluchesRestantes} peluches
          </span>
        </div>

        <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
          Ne fais pas attendre son sourire.
        </h2>
        <p className="mb-2 font-display text-xl text-primary-foreground/70 md:text-2xl">
          Offre-lui <span className="text-valentine-rose">Câlin Éternel</span> MAINTENANT.
        </p>
        <p className="mb-10 font-body text-primary-foreground/50">
          Cette Saint-Valentin, sois le héros de son cœur. Clique, commande, et vis la magie.
        </p>

        {/* Countdown */}
        {/* <div className="mb-10 flex justify-center">
          <CountdownTimer />
        </div> */}

        <div className="mb-4 flex flex-wrap items-center justify-center gap-4 font-body text-sm text-primary-foreground/60">
          <span>💰 Prix final : <strong className="text-primary-foreground">49€</strong></span>
          <span>🚚 Livraison gratuite</span>
          <span>⚡ Stock épuise vite !</span>
        </div>

        <Button
          variant="hero"
          size="lg"
          className="rounded-full px-14 py-8 font-display text-lg md:text-xl"
        >
          <Heart className="mr-2 h-6 w-6" fill="currentColor" />
          JE L'OFFRE POUR LA SAINT-VALENTIN
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
