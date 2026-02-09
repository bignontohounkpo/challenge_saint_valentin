import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "@/components/OrderModal";

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section
        className="relative flex min-h-[90dvh] items-center overflow-hidden px-4 py-12 md:px-8 lg:px-12"
        style={{ background: "var(--gradient-soft)" }}
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-valentine-rose/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-valentine-pink/10 blur-3xl" />

        {/* Extra halos */}
        <div className="hidden xl:block pointer-events-none absolute top-1/4 -right-64 h-[40rem] w-[40rem] rounded-full bg-valentine-rose/5 blur-[120px]" />
        <div className="hidden xl:block pointer-events-none absolute bottom-1/4 -left-64 h-[40rem] w-[40rem] rounded-full bg-valentine-pink/5 blur-[120px]" />

        <div className="valentine-container relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-valentine-red/5 px-4 py-2">
              <Heart
                className="h-4 w-4 text-primary animate-heartbeat"
                fill="currentColor"
              />
              <span className="font-body text-sm font-medium text-primary">
                Édition limitée Saint-Valentin 2026
              </span>
            </div>

            <h1 className="mb-6 font-display text-2xl md:text-4xl font-bold lg:leading-tight tracking-tight text-foreground lg:text-5xl xl:text-6xl">
              Cette Saint-Valentin, ne lui offre pas juste un cadeau…{" "}
              <span className="valentine-gradient-text">
                offre-lui une émotion.
              </span>
            </h1>

            <p className="mb-2 text-muted-foreground">
              Le cadeau parfait qui dit "Je t'aime" sans cesse et pour toujours.
            </p>

            <p className="mb-8 max-w-lg font-body text-base leading-relaxed text-muted-foreground">
              Découvrez{" "}
              <strong className="text-foreground">Ourson Eternel</strong>, la
              peluche unique qui murmure "je t'aime" à chaque étreinte. Douce,
              irrésistible, faite pour faire battre son cœur plus fort.
            </p>

            <Button
              variant="hero"
              size="lg"
              className="rounded-full px-10 py-6 text-base lg:text-lg"
              onClick={() => setOpenModal(true)}
            >
              <Heart className="mr-2 h-5 w-5" fill="currentColor" />
              Offrir maintenant
            </Button>

            <p className="mt-3 font-body text-sm text-muted-foreground">
              🚚 Livraison express avant le 14 février !
            </p>
          </div>

          {/* Image */}
          <div className="relative flex-1 w-full max-w-lg lg:max-w-none">
            <div className="animate-gentle-float relative w-full aspect-square flex items-center justify-center">
              <div className="absolute inset-0 m-auto h-4/5 w-4/5 rounded-full bg-valentine-pink/20 blur-3xl opacity-60" />

              <div className="relative z-10 w-full h-full drop-shadow-2xl flex items-center justify-center p-4 md:p-8">
                <img
                  src="/peluche.webp"
                  alt="Câlin Éternel"
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <OrderModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default HeroSection;