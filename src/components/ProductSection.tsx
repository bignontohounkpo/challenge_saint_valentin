import { useState } from "react";
import { Check, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderModal from "@/components/OrderModal";

const features = [
  "40 cm de pur bonheur moelleux",
  "Tissu ultra-doux hypoallergénique",
  "Yeux pétillants cousus à la main",
  "Cœur brodé « Forever Yours »",
  "Senteur subtile de vanille (rechargeable)",
  "Édition limitée Saint-Valentin",
];

const ProductSection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section id="product"
        className="valentine-section"
        style={{ background: "var(--gradient-soft)" }}
      >
        <div className="valentine-container mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          {/* Image */}
          <div className="flex-1 hidden w-full lg:flex items-stretch py-4">
            <div className="relative mx-auto w-64 md:w-72 lg:w-full lg:max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-valentine-rose/20 blur-2xl" />
              <div className="relative z-10 w-full h-full min-h-[350px] lg:min-h-[450px] rounded-3xl bg-gradient-to-br from-valentine-rose/20 to-valentine-pink/20 flex items-center justify-center p-6 lg:p-10">
                <img
                  src="/peluche.webp"
                  alt="Ourson Éternel"
                  className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h2 className="mb-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Rencontre{" "}
              <span className="valentine-gradient-text">Ourson Éternel</span>
            </h2>
            <p className="mb-6 font-display text-lg italic text-valentine-crimson">
              Ta complice romantique ultime.
            </p>

            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground md:text-lg">
              Cette peluche unique n'est pas ordinaire&nbsp;: elle est conçue
              pour les amoureux. Une seule édition limitée pour la Saint-Valentin
              – parce que l'amour vrai est rare et précieux.
            </p>

            <div className="flex flex-col max-sm:flex-col-reverse sm:flex-row items-start gap-8 mt-6">
              <div className="w-full lg:flex-1">
                <ul className="space-y-3">
                  {features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 font-body text-foreground"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm md:text-base">{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex max-sm:justify-center w-full">
                  <Button
                    variant="hero"
                    size="lg"
                    className="rounded-full px-8 py-5 text-sm md:text-base"
                    onClick={() => setOpenModal(true)}
                  >
                    <Heart className="mr-2 h-4 w-4" fill="currentColor" />
                    Offrir maintenant
                  </Button>
                </div>
              </div>

              {/* Image mobile */}
              <div className="md:ml-10 w-full flex items-center justify-center lg:hidden">
                <div className="aspect-square w-40 md:w-72">
                  <img
                    src="/peluche.webp"
                    alt="Ourson Éternel"
                    className="max-w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                    width={500}
                    height={500}
                  />
                </div>
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

export default ProductSection;